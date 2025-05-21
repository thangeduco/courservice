import { db } from '../../../../config/db';
import { CourseRepository } from '../../domain/ports/course.repository';
import { Course, CourseWeekWithLessons } from '../../domain/models/course.model';

export class PgCourseRepository implements CourseRepository {
  async getAll(): Promise<Course[]> {
    const result = await db.query('SELECT * FROM course.courses');
    return result.rows;
  }

  async getById(courseId: number): Promise<Course | null> {
    const result = await db.query('SELECT * FROM course.courses WHERE id = $1', [courseId]);
    return result.rows[0] || null;
  }

  async getWeeksWithLessons(courseId: number): Promise<CourseWeekWithLessons[]> {
    const weekResult = await db.query(
      'SELECT * FROM course.course_weeks WHERE course_id = $1 ORDER BY week_number',
      [courseId]
    );
    const weeks = weekResult.rows;

    const weekIds = weeks.map((w) => w.id);
    if (weekIds.length === 0) return [];

    const lessonResult = await db.query(
      'SELECT * FROM course.course_week_lessons WHERE week_number = ANY($1) ORDER BY week_number, step',
      [weekIds]
    );
    const lessons = lessonResult.rows;

    const lessonMap = lessons.reduce((acc, lesson) => {
      if (!acc[lesson.week_number]) acc[lesson.week_number] = [];
      acc[lesson.week_number].push(lesson);
      return acc;
    }, {} as Record<number, any[]>);

    return weeks.map((week) => ({
      ...week,
      lessons: lessonMap[week.id] || [],
    }));
  }
}

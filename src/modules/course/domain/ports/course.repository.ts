import { Course } from '../models/course.model';
import { CourseWeekWithLessons } from '../models/course.model';

export interface CourseRepository {
  getAll(): Promise<Course[]>;
  getById(courseId: number): Promise<Course | null>;
}


export interface CourseRepository {
  getWeeksWithLessons(courseId: number): Promise<CourseWeekWithLessons[]>;
}
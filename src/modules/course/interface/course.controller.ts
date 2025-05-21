import { Request, Response, NextFunction } from 'express';
import { GetCoursesUseCase } from '../application/usecases/get-courses.usecase';
import { PgCourseRepository } from '../infrastructure/repositories/pg-course.repository';

export class CourseController {
  private readonly repo = new PgCourseRepository();

  constructor(private readonly usecase: GetCoursesUseCase = new GetCoursesUseCase(new PgCourseRepository())) {}

  getCourses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.usecase.execute();
      res.json(data);
    } catch (err) {
      next(err);
    }
  };

  getCourseById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const courseId = parseInt(req.params.id);
      const course = await this.usecase.getById(courseId);
      if (!course) {
        res.status(404).json({ error: 'Not found' });
        return;
      }
      res.json(course);
    } catch (err) {
      next(err);
    }
  };

  getCourseWeeks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const courseId = parseInt(req.params.id);
      const data = await this.repo.getWeeksWithLessons(courseId);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
}

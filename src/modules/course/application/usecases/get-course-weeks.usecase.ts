import { CourseRepository } from '../../domain/ports/course.repository';

export class GetCourseWeeksUseCase {
  constructor(private readonly repo: CourseRepository) {}

  async execute(courseId: number) {
    return this.repo.getWeeksWithLessons(courseId);
  }
}

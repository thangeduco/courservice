import { CourseRepository } from '../../domain/ports/course.repository';
export class GetCoursesUseCase {
  constructor(private readonly repo: CourseRepository) {}
  async execute() {
    return this.repo.getAll();
  }
}

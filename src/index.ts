import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import { PgCourseRepository } from './modules/course/infrastructure/repositories/pg-course.repository';
import { GetCoursesUseCase } from './modules/course/application/usecases/get-courses.usecase';
import { CourseController } from './modules/course/interface/course.controller';

const app = express();
app.use(cors());

const repo = new PgCourseRepository();
const usecase = new GetCoursesUseCase(repo);
const controller = new CourseController(usecase);

app.get('/courses', controller.getCourses);
app.get('/courses/:id', controller.getCourseById);
app.get('/courses/:id/weeks', controller.getCourseWeeks);

console.log('Routes /courses, /courses/:id, /courses/:id/weeks are set up');

const RUN_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3100;
app.listen(RUN_PORT, '0.0.0.0', () => {
  console.log(`CourseService running at http://localhost:${RUN_PORT}`);
});

export interface Course {
    id: number;
    title: string;
    description: string;
    grade: string;
    subject: string;
    roadmapImageUrl: string;
  }
  
  export interface Lesson {
    id: number;
    title: string;
    description: string;
    order: number;
  }
  
  export interface LessonVideo {
    lesson_id: number;
    video_id: number;
    order: number;
  }
  
  export interface LessonWorksheet {
    lesson_id: number;
    worksheet_id: number;
    order: number;
  }
  
  export interface VideoLecture {
    id: number;
    title: string;
    description: string;
    url: string;
    duration: number;
    tags: string[];
  }
  
  export interface Question {
    id: number;
    type: string;
    content: string;
    choices: any;
    answer: any;
    difficulty: string;
    tags: string[];
  }
  
  export interface QuestionVideoLink {
    question_id: number;
    video_id: number;
    timestamp: number;
  }
  
  export interface Worksheet {
    id: number;
    title: string;
    description: string;
    tags: string[];
  }
  
  export interface WorksheetQuestion {
    worksheet_id: number;
    question_id: number;
    order: number;
  }
  
  export interface CourseWeek {
  id: number;
  course_id: number;
  week_number: number;
  title?: string;
  description?: string;
}

export interface CourseWeekLesson {
  id: number;
  week_number: number;
  lesson_id: number;
  step: number;
}

export interface CourseWeekWithLessons extends CourseWeek {
  lessons: CourseWeekLesson[];
}
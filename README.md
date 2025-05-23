#courservice
Là service xử lý toàn bộ các nội dung học tập.
Được thiết kế theo kiến trúc hexagon, sử dụng nodejs typescript, sử dụng cơ sở dữ liệu postgres
Xử lý các nghiệp vụ:
+ Quản lý video bài giảng
+ QUản lý các câu hỏi, các work sheet bài tập
+ Quản lý các bài học từ nhiều video bài giảng và nhiều worksheet bài tập
+ QUản lý khoá học, khóa học được chia làm nhiều tuần, mỗi tuần gồm nhiều bài học
Các bảng cơ sở dữ liệu:
+ video_lectures: id, title, description, url, duration, tags									 Danh sách video bài giảng	
+ questions: id, type, content, choices, answer, difficulty, tags									Ngân hàng câu hỏi	
+ question_video_links: question_id, video_id, timestamp									Liên kết câu hỏi vào video	
+ worksheets: id, title, description, tags									Phiếu bài tập	
+ worksheet_questions: worksheet_id, question_id, order									Quan hệ nhiều-nhiều giữa worksheet và question	
+ lessons: id, title, description									Bài học	
+ lesson_contents (lesson_id, content_type, content_id, step)									Content_type = 1 là video, = 2 là worksheet	
+ courses: id, title, description, grade, subject, roadmap_image_url									Khoá học	
+ course.course_weeks: id, course_id, week_number, title, description									Các tuần học của 1 khoá học	
+ course_week_lessons: id, week_number, lession_id, step									Các bài học của 1 tuần	






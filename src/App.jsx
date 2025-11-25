import { useEffect } from 'react';
import { courses } from './data/courses';
import './App.css';
import { useRoute } from './hooks/useRoute';
import { useProgress } from './hooks/useProgress';
import { HomeView } from './components/HomeView';
import { CourseView } from './components/CourseView';
import { LessonView } from './components/LessonView';

function App() {
  const {
    course,
    selectedDay,
    navigateToHome,
    navigateToCourse,
    navigateToDay
  } = useRoute();

  const {
    completedDays,
    toggleComplete,
    getCompletedDate
  } = useProgress(course);

  // Scroll to top whenever navigation changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [course, selectedDay]);

  // 현재 선택된 커리큘럼 데이터 가져오기
  const currentCourseData = courses.find(c => c.id === course);
  const currentCurriculum = currentCourseData?.data || [];

  // 1. 코스 선택 화면 (Home)
  if (!course) {
    return <HomeView onNavigate={navigateToCourse} />;
  }

  // 2. 상세 학습 화면 (Lesson Detail)
  if (selectedDay) {
    const lesson = currentCurriculum.find(d => d.day === selectedDay);
    const nextLesson = currentCurriculum.find(d => d.day === selectedDay + 1);

    if (!lesson) return <div>Loading...</div>;

    return (
      <LessonView
        courseData={currentCourseData}
        lesson={lesson}
        nextLesson={nextLesson}
        completedDate={getCompletedDate(selectedDay)}
        onNavigateHome={navigateToHome}
        onNavigateCourse={() => navigateToCourse(course)}
        onNavigateDay={navigateToDay}
        onToggleComplete={toggleComplete}
      />
    );
  }

  // 3. 커리큘럼 목록 화면 (Course List)
  return (
    <CourseView
      courseData={currentCourseData}
      curriculum={currentCurriculum}
      completedDays={completedDays[course]}
      onNavigateDay={navigateToDay}
      onNavigateHome={navigateToHome}
    />
  );
}

export default App;

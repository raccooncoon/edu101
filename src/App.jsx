import { useState, useEffect } from 'react';
import { courses } from './data/courses';
import './App.css';

function CodeBlock({ code }) {
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}

function App() {
  const [course, setCourse] = useState(null); // 'react' | 'js' | null
  const [selectedDay, setSelectedDay] = useState(null);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completedDays_v2');
    return saved ? JSON.parse(saved) : { react: [], js: [] };
  });
  const [showSolution, setShowSolution] = useState(false);

  // 현재 선택된 커리큘럼 데이터 가져오기
  const currentCourseData = courses.find(c => c.id === course);
  const currentCurriculum = currentCourseData?.data || [];

  // URL 해시 기반 라우팅
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // #/react, #/js, #/react/day/1

      // Try to match #/courseId or #/courseId/day/dayId
      const match = hash.match(/^#\/([^/]+)(?:\/day\/(\d+))?/);

      if (match) {
        const courseId = match[1];
        const dayId = match[2] ? parseInt(match[2]) : null;

        // Check if it's a valid course
        if (courses.some(c => c.id === courseId)) {
          setCourse(courseId);
          setSelectedDay(dayId);
          return;
        }
      }

      setCourse(null);
      setSelectedDay(null);
    };

    // 초기 로드 시 해시 확인
    handleHashChange();

    // 해시 변경 감지
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 날짜 변경 시 정답 숨기기 초기화
  useEffect(() => {
    setShowSolution(false);
  }, [selectedDay, course]);

  // 백스페이스 키로 뒤로 가기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Backspace') {
        const target = e.target;
        const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

        if (!isInput) {
          if (selectedDay !== null) {
            e.preventDefault();
            navigateToCourse(course);
          } else if (course !== null) {
            e.preventDefault();
            navigateToHome();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [course, selectedDay]);

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const navigateToCourse = (courseId) => {
    window.location.hash = `#/${courseId}`;
  };

  const navigateToDay = (dayId) => {
    window.location.hash = `#/${course}/day/${dayId}`;
  };

  const handleComplete = (dayId) => {
    if (!course) return;

    const currentCompleted = completedDays[course];
    let newCourseCompleted;

    if (currentCompleted.includes(dayId)) {
      newCourseCompleted = currentCompleted.filter(id => id !== dayId);
    } else {
      newCourseCompleted = [...currentCompleted, dayId];
    }

    const newCompletedDays = {
      ...completedDays,
      [course]: newCourseCompleted
    };

    setCompletedDays(newCompletedDays);
    localStorage.setItem('completedDays_v2', JSON.stringify(newCompletedDays));
  };

  // 1. 코스 선택 화면 (Home)
  if (!course) {
    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="logo">
              <div className="logo-icon">🚀</div>
              <span className="gradient-text">DevMastery</span>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="container">
            <div className="hero">
              <h1><span className="gradient-text">학습할 과정을 선택하세요</span></h1>
              <p className="hero-desc">
                기초부터 심화까지, 당신의 개발 여정을 함께합니다.
              </p>
            </div>

            <div className="course-selection">
              {courses.map(c => (
                <div
                  key={c.id}
                  className={`course-card ${c.themeColor}-card`}
                  onClick={() => navigateToCourse(c.id)}
                >
                  <div className="course-icon">{c.icon}</div>
                  <h2>{c.title}</h2>
                  <p>{c.description}</p>
                  <span className="btn-text">시작하기 →</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <p>Start your journey today 🚀</p>
          </div>
        </footer>
      </div>
    );
  }

  // 2. 상세 학습 화면 (Lesson Detail)
  if (selectedDay) {
    const lesson = currentCurriculum.find(d => d.day === selectedDay);
    const nextLesson = currentCurriculum.find(d => d.day === selectedDay + 1);
    const isCompleted = completedDays[course].includes(selectedDay);

    if (!lesson) return <div>Loading...</div>;

    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
                <div className="logo-icon">{currentCourseData?.icon}</div>
                <span className="gradient-text">{currentCourseData?.title}</span>
              </div>
              <div className="nav-buttons">
                <button onClick={() => navigateToCourse(course)} className="btn btn-outline">
                  목록으로
                </button>
                <button onClick={navigateToHome} className="btn btn-outline btn-home">
                  🏠 홈
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="container lesson-container">
            <button onClick={() => navigateToCourse(course)} className="back-btn">
              ← 목록으로 돌아가기
            </button>

            <div className="lesson-header">
              <div className="lesson-meta">
                <span className="tag">Day {lesson.day}</span>
                <span className="duration">⏱️ {lesson.duration}</span>
              </div>
              <h1>{lesson.title}</h1>
              <p className="lesson-desc">{lesson.description}</p>
            </div>

            <div className="topics">
              {lesson.topics.map((topic, idx) => (
                <section key={idx} className="topic-card">
                  <h2>
                    <span className="topic-number">{idx + 1}</span>
                    {topic.title}
                  </h2>
                  <p>{topic.content}</p>
                  {topic.code && <CodeBlock code={topic.code} />}
                </section>
              ))}
            </div>

            <section className="challenge-card">
              <div className="challenge-icon">💡</div>
              <div style={{ width: '100%' }}>
                <h2>오늘의 도전 과제</h2>
                <h3>{lesson.challenge.title}</h3>
                <p>{lesson.challenge.description}</p>
                <div className="hint-box">
                  💡 힌트: 이 페이지의 코드를 참고하여 직접 실습해보세요!
                </div>

                <div style={{ marginTop: '15px' }}>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="btn btn-outline"
                    style={{ padding: '5px 10px', fontSize: '0.9rem' }}
                  >
                    {showSolution ? '🙈 정답 숨기기' : '👀 정답 보기'}
                  </button>
                </div>

                {showSolution && lesson.challenge.solution && (
                  <div style={{ marginTop: '15px' }}>
                    <CodeBlock code={lesson.challenge.solution} />
                  </div>
                )}
              </div>
            </section>

            <div className="action-bar">
              <button
                onClick={() => handleComplete(selectedDay)}
                className={`btn ${isCompleted ? 'btn-completed' : 'btn-outline'}`}
              >
                {isCompleted ? '✓ 완료됨' : '완료 표시하기'}
              </button>

              {nextLesson && (
                <button onClick={() => navigateToDay(nextLesson.day)} className="btn btn-primary">
                  다음 수업 →
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 3. 커리큘럼 목록 화면 (Course List)
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
              <div className="logo-icon">{currentCourseData?.icon}</div>
              <span className="gradient-text">{currentCourseData?.title}</span>
            </div>
            <button onClick={navigateToHome} className="btn btn-outline btn-home">
              🏠 코스 변경
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="hero">
            <h1><span className="gradient-text">
              {currentCourseData?.heroTitle}
            </span></h1>
            <p className="hero-desc">
              {currentCourseData?.heroDesc}
            </p>
          </div>

          <div className="curriculum-grid">
            {currentCurriculum.map((day) => {
              const isCompleted = completedDays[course].includes(day.day);
              return (
                <div
                  key={day.day}
                  className={`card ${isCompleted ? 'card-completed' : ''}`}
                  onClick={() => navigateToDay(day.day)}
                >
                  {isCompleted && <div className="card-check">✓</div>}

                  <div className="card-header">
                    <span className="day-badge">Day {day.day}</span>
                    <span className="duration">⏱️ {day.duration}</span>
                  </div>

                  <h3>{day.title}</h3>
                  <p>{day.description}</p>

                  <div className="card-footer">
                    학습하기 →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Designed for your Coding Journey 🚀</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

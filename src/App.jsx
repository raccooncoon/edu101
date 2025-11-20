import { useState, useEffect } from 'react';
import { curriculum } from './data/curriculum';
import './App.css';

function CodeBlock({ code }) {
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : [];
  });

  // URL 해시 기반 라우팅
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#day-')) {
        const dayNum = parseInt(hash.replace('#day-', ''));
        if (!isNaN(dayNum) && dayNum >= 1 && dayNum <= curriculum.length) {
          setSelectedDay(dayNum);
        }
      } else {
        setSelectedDay(null);
      }
    };

    // 초기 로드 시 해시 확인
    handleHashChange();

    // 해시 변경 감지
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 백스페이스 키로 메인으로 이동
  useEffect(() => {
    const handleKeyDown = (e) => {
      // 백스페이스 키이고, input/textarea에 포커스가 없을 때만
      if (e.key === 'Backspace' && selectedDay !== null) {
        const target = e.target;
        const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

        if (!isInput) {
          e.preventDefault();
          navigateToHome();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDay]);

  const navigateToDay = (dayId) => {
    window.location.hash = `day-${dayId}`;
  };

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const handleComplete = (dayId) => {
    let newCompleted;
    if (completedDays.includes(dayId)) {
      // 이미 완료된 경우 - 완료 해제
      newCompleted = completedDays.filter(id => id !== dayId);
    } else {
      // 완료되지 않은 경우 - 완료 추가
      newCompleted = [...completedDays, dayId];
    }
    setCompletedDays(newCompleted);
    localStorage.setItem('completedDays', JSON.stringify(newCompleted));
  };

  if (selectedDay) {
    const lesson = curriculum.find(d => d.day === selectedDay);
    const nextLesson = curriculum.find(d => d.day === selectedDay + 1);
    const isCompleted = completedDays.includes(selectedDay);

    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
                <div className="logo-icon">📚</div>
                <span className="gradient-text">React 101</span>
              </div>
              <button onClick={navigateToHome} className="btn btn-outline btn-home">
                🏠 메인으로
              </button>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="container lesson-container">
            <button onClick={navigateToHome} className="back-btn">
              ← 돌아가기
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
              <div>
                <h2>오늘의 도전 과제</h2>
                <h3>{lesson.challenge.title}</h3>
                <p>{lesson.challenge.description}</p>
                <div className="hint-box">
                  💡 힌트: 이 페이지의 코드를 참고하여 직접 실습해보세요!
                </div>
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

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">📚</div>
            <span className="gradient-text">React 101</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="hero">
            <h1><span className="gradient-text">React 마스터 여정</span></h1>
            <p className="hero-desc">
              하루 1-2시간, 체계적인 커리큘럼으로 React의 기초부터 실전까지 완벽하게 마스터하세요.
            </p>
          </div>

          <div className="curriculum-grid">
            {curriculum.map((day) => {
              const isCompleted = completedDays.includes(day.day);
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
          <p>Designed for your React Journey 🚀</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

const curriculum = [
  {
    day: 1,
    title: "React의 시작과 JSX",
    description: "React가 무엇인지 알아보고, JavaScript를 HTML처럼 쓰는 JSX 문법을 익혀봅시다.",
    duration: "1시간",
    topics: [
      {
        title: "React란 무엇인가?",
        content: "React는 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반으로 UI를 재사용 가능한 조각으로 나눕니다."
      },
      {
        title: "JSX 소개",
        content: "JSX는 JavaScript XML의 약자로, JavaScript 안에서 HTML 마크업을 작성할 수 있게 해줍니다.",
        code: `function HelloWorld() {
  return <h1>Hello, World!</h1>;
}`
      },
      {
        title: "표현식 포함하기",
        content: "중괄호 {}를 사용하여 JSX 내부에서 JavaScript 변수나 표현식을 사용할 수 있습니다.",
        code: `const name = "React";
const element = <h1>Hello, {name}</h1>;`
      }
    ],
    challenge: {
      title: "나만의 명함 만들기",
      description: "변수에 이름, 직업을 저장하고 JSX를 사용하여 화면에 출력해보세요."
    }
  },
  {
    day: 2,
    title: "컴포넌트와 Props",
    description: "UI를 독립적인 컴포넌트로 나누고, Props를 통해 데이터를 전달하는 방법을 배웁니다.",
    duration: "1.5시간",
    topics: [
      {
        title: "함수형 컴포넌트",
        content: "React 컴포넌트는 props를 받아 React 요소를 반환하는 JavaScript 함수입니다.",
        code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
      },
      {
        title: "Props 전달하기",
        content: "부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 HTML 속성처럼 작성하여 전달합니다.",
        code: `<Welcome name="Sara" />`
      }
    ],
    challenge: {
      title: "팀원 소개 페이지",
      description: "Profile 컴포넌트를 만들고, 여러 명의 팀원 정보를 Props로 전달하여 리스트를 만들어보세요."
    }
  },
  {
    day: 3,
    title: "State와 이벤트 처리",
    description: "컴포넌트 내부에서 변하는 데이터인 State를 관리하고 사용자의 클릭 이벤트를 처리해봅시다.",
    duration: "2시간",
    topics: [
      {
        title: "useState 훅",
        content: "컴포넌트에 state 변수를 추가하기 위해 useState 훅을 사용합니다.",
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`
      },
      {
        title: "이벤트 핸들링",
        content: "React 요소의 이벤트 처리는 DOM 요소의 이벤트 처리와 매우 유사하지만, 캐멀 케이스(camelCase)를 사용합니다.",
        code: `<button onClick={handleClick}>Click me</button>`
      }
    ],
    challenge: {
      title: "좋아요 버튼 만들기",
      description: "클릭할 때마다 숫자가 올라가는 '좋아요' 버튼을 만들어보세요."
    }
  },
  {
    day: 4,
    title: "조건부 렌더링과 리스트",
    description: "조건에 따라 다른 UI를 보여주고, 배열 데이터를 리스트로 출력하는 법을 배웁니다.",
    duration: "1.5시간",
    topics: [
      {
        title: "조건부 렌더링",
        content: "JavaScript의 if문이나 삼항 연산자(? :)를 사용하여 조건에 맞는 UI를 렌더링합니다.",
        code: `<div>{isLoggedIn ? <LogoutButton /> : <LoginButton />}</div>`
      },
      {
        title: "리스트 렌더링",
        content: "map() 함수를 사용하여 배열을 엘리먼트 리스트로 변환합니다. 이때 key prop이 중요합니다.",
        code: `const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);`
      }
    ],
    challenge: {
      title: "할 일 목록(Todo List) 보기",
      description: "할 일 배열을 정의하고, map을 사용하여 화면에 뿌려주세요. 완료 여부에 따라 스타일을 다르게 적용해보세요."
    }
  },
  {
    day: 5,
    title: "Effect와 생명주기",
    description: "useEffect를 사용하여 데이터 가져오기, 구독 설정 등 부수 효과(Side Effects)를 처리합니다.",
    duration: "2시간",
    topics: [
      {
        title: "useEffect 훅",
        content: "컴포넌트가 렌더링 된 이후에 어떤 일을 수행해야 할 때 사용합니다.",
        code: `useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]); // count가 바뀔 때만 실행`
      }
    ],
    challenge: {
      title: "타이머 만들기",
      description: "useEffect를 사용하여 1초마다 숫자가 증가하는 타이머를 만들어보세요."
    }
  }
];

// Enhanced syntax highlighting component
function CodeBlock({ code }) {
  const [highlighted, setHighlighted] = useState('');

  useEffect(() => {
    const html = highlightCode(code);
    setHighlighted(html);
  }, [code]);

  const highlightCode = (code) => {
    let result = code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Keywords
    result = result.replace(/\b(import|from|export|default|const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|class|extends|super|this)\b/g, '<span class="hl-keyword">$1</span>');

    // React hooks
    result = result.replace(/\b(useState|useEffect|useContext|useReducer|useCallback|useMemo|useRef)\b/g, '<span class="hl-hook">$1</span>');

    // Strings
    result = result.replace(/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g, '<span class="hl-string">$1$2$1</span>');

    // Comments
    result = result.replace(/\/\/(.*?)$/gm, '<span class="hl-comment">//$1</span>');
    result = result.replace(/\/\*([\s\S]*?)\*\//g, '<span class="hl-comment">/*$1*/</span>');

    // Numbers
    result = result.replace(/\b(\d+)\b/g, '<span class="hl-number">$1</span>');

    // Function calls
    result = result.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="hl-function">$1</span>');

    // JSX tags and components
    result = result.replace(/&lt;(\/?[A-Z][a-zA-Z0-9]*)/g, '&lt;<span class="hl-component">$1</span>');
    result = result.replace(/&lt;(\/?[a-z][a-zA-Z0-9]*)/g, '&lt;<span class="hl-tag">$1</span>');

    // JSX attributes
    result = result.replace(/\b([a-zA-Z-]+)(?==)/g, '<span class="hl-attr">$1</span>');

    // Brackets and braces
    result = result.replace(/([{}[\]()])/g, '<span class="hl-punctuation">$1</span>');

    // Arrow functions
    result = result.replace(/=&gt;/g, '<span class="hl-operator">=&gt;</span>');

    return result;
  };

  return (
    <pre className="code-block">
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : [];
  });

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
            <div className="logo">
              <div className="logo-icon">📚</div>
              <span className="gradient-text">React 101</span>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="container lesson-container">
            <button onClick={() => setSelectedDay(null)} className="back-btn">
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
                <button onClick={() => setSelectedDay(nextLesson.day)} className="btn btn-primary">
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
                  onClick={() => setSelectedDay(day.day)}
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

export const curriculum = [
  {
    day: 1,
    title: "React의 시작과 JSX",
    description: "React의 핵심 개념을 이해하고, JavaScript를 확장한 JSX 문법으로 첫 번째 컴포넌트를 만들어봅니다.",
    duration: "1시간",
    topics: [
      {
        title: "React란 무엇인가?",
        content: "React는 사용자 인터페이스(UI)를 구축하기 위한 선언형, 컴포넌트 기반 JavaScript 라이브러리입니다. Virtual DOM을 사용하여 효율적인 렌더링을 제공합니다."
      },
      {
        title: "JSX (JavaScript XML)",
        content: "JSX는 JavaScript 코드 안에서 UI 구조를 HTML과 비슷하게 작성할 수 있게 해주는 문법입니다. 브라우저가 이해하기 전에 Babel과 같은 도구가 일반 JavaScript로 변환합니다.",
        code: `function HelloWorld() {
  return (
    <div className="container">
      <h1>Hello, React!</h1>
      <p>This is JSX.</p>
    </div>
  );
}`
      },
      {
        title: "JSX의 규칙과 Fragment",
        content: "반드시 하나의 부모 요소로 감싸야 합니다. 불필요한 div를 추가하고 싶지 않다면 <React.Fragment> 또는 단축 문법인 <>...</>를 사용하세요.",
        code: `function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}`
      },
      {
        title: "JSX 내의 표현식과 스타일",
        content: "중괄호 {}를 사용하여 변수나 표현식을 넣을 수 있습니다. 인라인 스타일은 객체 형태로 작성하며 camelCase를 사용합니다.",
        code: `const name = "React";
const style = { 
  color: "blue", 
  fontSize: "20px" 
};

const element = <h1 style={style}>Hello, {name}</h1>;`
      }
    ],
    challenge: {
      title: "자기소개 카드 만들기",
      description: "JSX를 사용하여 자신의 이름, 목표, 좋아하는 기술 스택이 담긴 간단한 프로필 카드를 화면에 출력해보세요. 스타일 객체를 사용하여 꾸며보세요."
    }
  },
  {
    day: 2,
    title: "컴포넌트와 Props",
    description: "UI를 재사용 가능한 독립적인 조각(컴포넌트)으로 나누고, 부모에서 자식으로 데이터(Props)를 전달하는 법을 배웁니다.",
    duration: "1.5시간",
    topics: [
      {
        title: "함수형 컴포넌트",
        content: "React 컴포넌트는 데이터를 가진 'props' 객체 인자를 받아 React 요소를 반환하는 단순한 JavaScript 함수입니다. 대문자로 시작해야 합니다.",
        code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
      },
      {
        title: "Props 구조 분해 할당과 기본값",
        content: "매개변수 부분에서 구조 분해 할당을 사용하면 코드가 깔끔해집니다. 기본값을 설정하여 props가 없을 때를 대비할 수 있습니다.",
        code: `function Button({ label, color = "blue" }) {
  return <button style={{ color }}>{label}</button>;
}`
      },
      {
        title: "Children Prop",
        content: "컴포넌트 태그 사이에 넣은 내용은 children이라는 특별한 prop으로 전달됩니다. 레이아웃 컴포넌트를 만들 때 유용합니다.",
        code: `function Card({ children }) {
  return <div className="card-box">{children}</div>;
}

// 사용
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>`
      }
    ],
    challenge: {
      title: "재사용 가능한 버튼 컴포넌트",
      description: "text와 color를 props로 받아서 스타일이 적용된 버튼을 렌더링하는 Button 컴포넌트를 만들고, 여러 번 재사용해보세요."
    }
  },
  {
    day: 3,
    title: "State(상태) 관리와 이벤트",
    description: "컴포넌트 내부에서 변경되는 데이터인 State를 관리하고, 사용자의 클릭/입력 이벤트를 처리하여 상호작용하는 UI를 만듭니다.",
    duration: "2시간",
    topics: [
      {
        title: "useState 훅 이해하기",
        content: "useState는 상태값과 그 상태를 업데이트하는 함수를 반환합니다. 상태가 변경되면 컴포넌트는 다시 렌더링됩니다.",
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 초기값 0
  
  return (
    <button onClick={() => setCount(count + 1)}>
      클릭 횟수: {count}
    </button>
  );
}`
      },
      {
        title: "함수형 업데이트 (Functional Update)",
        content: "이전 상태값을 기반으로 업데이트할 때는 콜백 함수를 사용하는 것이 안전합니다. 특히 비동기 상황이나 연속된 업데이트에서 중요합니다.",
        code: `// 안전한 방식
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1); // 정확히 2 증가`
      },
      {
        title: "객체 상태 관리하기",
        content: "객체를 업데이트할 때는 Spread 연산자(...)를 사용하여 기존 값을 복사한 후 변경해야 불변성이 유지됩니다.",
        code: `const [user, setUser] = useState({ name: "Kim", age: 20 });

const updateName = () => {
  setUser({ ...user, name: "Lee" }); // age는 유지됨
};`
      }
    ],
    challenge: {
      title: "좋아요 버튼 만들기",
      description: "버튼을 클릭하면 '좋아요' 숫자가 올라가고, 버튼 색상이 변경되는 컴포넌트를 만들어보세요."
    }
  },
  {
    day: 4,
    title: "조건부 렌더링과 리스트",
    description: "상황에 따라 다른 UI를 보여주는 조건부 렌더링과, 배열 데이터를 효율적으로 화면에 뿌려주는 리스트 렌더링을 익힙니다.",
    duration: "1.5시간",
    topics: [
      {
        title: "조건부 렌더링 패턴",
        content: "&& 연산자는 조건이 참일 때만 렌더링하고, 삼항 연산자(? :)는 참/거짓에 따라 다른 UI를 보여줍니다.",
        code: `function UserGreeting({ user }) {
  return (
    <div>
      {user ? <h1>Welcome, {user.name}!</h1> : <button>Login</button>}
      {user && <p>You have unread messages.</p>}
    </div>
  );
}`
      },
      {
        title: "리스트 렌더링과 Key의 중요성",
        content: "map()을 사용할 때 key prop은 필수입니다. key는 React가 어떤 항목이 변경, 추가, 삭제되었는지 식별하는 데 도움을 줍니다. 인덱스(index)보다는 고유 ID를 사용하는 것이 좋습니다.",
        code: `const todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build App' }
];

function TodoList() {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`
      }
    ],
    challenge: {
      title: "필터링 가능한 리스트",
      description: "사용자 목록 배열을 만들고, 버튼을 누르면 '관리자'인 사용자만 화면에 필터링해서 보여주는 기능을 구현해보세요."
    }
  },
  {
    day: 5,
    title: "Effect와 컴포넌트 생명주기",
    description: "useEffect를 사용하여 데이터 가져오기, 구독, 타이머 등 컴포넌트 외부와 상호작용하는 부수 효과(Side Effects)를 제어합니다.",
    duration: "2시간",
    topics: [
      {
        title: "useEffect와 의존성 배열 (Dependency Array)",
        content: "의존성 배열에 있는 값이 변할 때만 Effect가 실행됩니다. 빈 배열([])은 마운트 시 1회만 실행됨을 의미합니다.",
        code: `useEffect(() => {
  console.log("마운트 될 때 실행");
}, []);

useEffect(() => {
  console.log("count가 변할 때마다 실행");
}, [count]);`
      },
      {
        title: "Cleanup 함수 (뒷정리)",
        content: "컴포넌트가 언마운트되거나 다음 Effect가 실행되기 전에 정리 작업을 수행합니다. 이벤트 리스너 제거나 타이머 해제에 필수적입니다.",
        code: `useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(timer); // 정리 함수
}, []);`
      }
    ],
    challenge: {
      title: "윈도우 리사이즈 감지기",
      description: "useEffect를 사용하여 브라우저 창의 크기가 바뀔 때마다 현재 가로 폭을 화면에 표시하는 컴포넌트를 만드세요. (이벤트 리스너 제거 필수!)"
    }
  },
  {
    day: 6,
    title: "폼(Form) 핸들링",
    description: "사용자의 입력을 관리하는 Controlled Component 패턴과 폼 유효성 검사 기초를 배웁니다.",
    duration: "2시간",
    topics: [
      {
        title: "제어 컴포넌트 (Controlled Component)",
        content: "input의 value를 React state로 관리하여, 입력값이 항상 React 상태와 동기화되도록 만듭니다.",
        code: `function NameForm() {
  const [value, setValue] = useState('');

  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}`
      },
      {
        title: "다중 입력 제어하기",
        content: "여러 개의 input을 하나의 state 객체로 관리하는 효율적인 방법입니다. input의 name 속성을 활용합니다.",
        code: `const [inputs, setInputs] = useState({ name: '', email: '' });

const onChange = (e) => {
  const { name, value } = e.target;
  setInputs({ ...inputs, [name]: value });
};`
      },
      {
        title: "useRef로 비제어 컴포넌트 접근하기",
        content: "값이 바뀔 때마다 렌더링할 필요가 없거나, DOM에 직접 접근해야 할 때(예: 포커스 주기) useRef를 사용합니다.",
        code: `const inputRef = useRef();

const focusInput = () => {
  inputRef.current.focus();
};`
      }
    ],
    challenge: {
      title: "로그인 폼 만들기",
      description: "아이디와 비밀번호를 입력받고, 비밀번호가 8자 미만이면 에러 메시지를 보여주는 폼을 만들어보세요."
    }
  },
  {
    day: 7,
    title: "스타일링 전략",
    description: "CSS Modules, Styled Components, Tailwind CSS 등 React에서 자주 쓰이는 스타일링 방식을 알아봅니다.",
    duration: "2시간",
    topics: [
      {
        title: "CSS Modules",
        content: "CSS 클래스 이름 충돌을 방지하기 위해 파일 단위로 스코프를 제한하는 방식입니다. [name].module.css 파일을 만들어 사용합니다.",
        code: `import styles from './Button.module.css';

function Button() {
  return <button className={styles.error}>Error</button>;
}`
      },
      {
        title: "CSS-in-JS (Styled Components)",
        content: "JavaScript 파일 안에 CSS를 작성하는 방식입니다. props에 따라 동적으로 스타일을 변경하기 쉽습니다.",
        code: `const Button = styled.button\`
  background: \${props => props.primary ? "blue" : "white"};
  color: \${props => props.primary ? "white" : "blue"};
\`;`
      }
    ],
    challenge: {
      title: "다크 모드 버튼",
      description: "버튼 하나를 만들고, 클릭 상태(활성/비활성)에 따라 색상이 완전히 바뀌는 스타일링을 적용해보세요."
    }
  },
  {
    day: 8,
    title: "React Router (SPA)",
    description: "React Router를 사용하여 페이지 새로고침 없이 화면을 전환하는 SPA(Single Page Application)를 구현합니다.",
    duration: "2.5시간",
    topics: [
      {
        title: "기본 라우팅 설정",
        content: "BrowserRouter, Routes, Route 컴포넌트를 사용하여 URL 경로에 따라 다른 컴포넌트를 보여줍니다.",
        code: `import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}`
      },
      {
        title: "Link와 useNavigate",
        content: "a 태그 대신 Link 컴포넌트를 사용하여 페이지를 이동하고, useNavigate 훅으로 프로그래밍 방식으로 이동합니다.",
        code: `import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/about">About으로 이동</Link>
      <button onClick={() => navigate('/about')}>이동</button>
    </>
  );
}`
      }
    ],
    challenge: {
      title: "간단한 블로그 라우팅",
      description: "메인 페이지, 글 목록 페이지, 글 상세 페이지(/post/:id)를 만들고 라우팅을 연결해보세요. useParams를 사용하여 ID를 가져와보세요."
    }
  },
  {
    day: 9,
    title: "Context API와 전역 상태",
    description: "Props Drilling 문제를 해결하기 위해 Context API를 사용하여 전역적으로 데이터를 공유하는 법을 배웁니다.",
    duration: "2시간",
    topics: [
      {
        title: "Context 생성과 Provider",
        content: "createContext로 컨텍스트를 만들고, Provider로 하위 컴포넌트들에게 데이터를 공급합니다.",
        code: `const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}`
      },
      {
        title: "useContext 사용하기",
        content: "하위 컴포넌트에서는 useContext 훅을 사용하여 Provider가 공급한 값을 손쉽게 가져다 쓸 수 있습니다.",
        code: `function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am {theme}</button>;
}`
      }
    ],
    challenge: {
      title: "테마 스위처 구현",
      description: "Context를 사용하여 앱 전체의 테마(Light/Dark)를 토글하는 기능을 구현해보세요."
    }
  },
  {
    day: 10,
    title: "고급 Hooks 정복",
    description: "useMemo, useCallback, useRef 등 성능 최적화와 DOM 접근을 위한 고급 훅들을 마스터합니다.",
    duration: "3시간",
    topics: [
      {
        title: "useMemo (값 캐싱)",
        content: "복잡한 계산 결과를 메모리에 저장(캐싱)하여, 의존성 값이 바뀌지 않는 한 재계산을 방지합니다.",
        code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`
      },
      {
        title: "useCallback (함수 캐싱)",
        content: "함수를 메모이제이션하여 자식 컴포넌트에 props로 전달할 때 불필요한 렌더링을 방지합니다.",
        code: `const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`
      }
    ],
    challenge: {
      title: "렌더링 최적화 실험",
      description: "console.log를 찍어보며, React.memo와 useCallback을 사용했을 때와 안 했을 때의 자식 컴포넌트 렌더링 횟수 차이를 확인해보세요."
    }
  },
  {
    day: 11,
    title: "API 연동과 비동기 처리",
    description: "fetch나 axios를 사용하여 서버에서 데이터를 받아오고, 로딩/에러 상태를 처리하는 패턴을 익힙니다.",
    duration: "2.5시간",
    topics: [
      {
        title: "데이터 Fetching 패턴",
        content: "useEffect 안에서 비동기 함수를 호출하여 데이터를 가져오고 state에 저장합니다. 로딩 상태와 에러 상태 관리가 중요합니다.",
        code: `useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  fetchData();
}, []);`
      }
    ],
    challenge: {
      title: "뉴스 뷰어 만들기",
      description: "무료 API(예: JSONPlaceholder)를 사용하여 게시글 목록을 불러오고, 로딩 중일 때는 'Loading...'을, 에러 발생 시 에러 메시지를 보여주세요."
    }
  },
  {
    day: 12,
    title: "커스텀 Hook 만들기",
    description: "반복되는 로직을 나만의 Hook으로 분리하여 코드의 재사용성을 극대화하는 방법을 배웁니다.",
    duration: "2시간",
    topics: [
      {
        title: "Custom Hook 규칙",
        content: "이름이 'use'로 시작해야 하며, 내부에서 다른 Hook을 호출할 수 있습니다. 로직을 캡슐화하여 공유할 때 강력합니다.",
        code: `function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}`
      }
    ],
    challenge: {
      title: "useFetch 훅 만들기",
      description: "URL을 넣으면 { data, loading, error } 객체를 반환하는 useFetch 커스텀 훅을 직접 만들어보세요."
    }
  },
  {
    day: 13,
    title: "상태 관리 라이브러리 (Redux Toolkit)",
    description: "대규모 애플리케이션에서 복잡한 상태를 체계적으로 관리하기 위한 Redux Toolkit의 기초를 배웁니다.",
    duration: "3시간",
    topics: [
      {
        title: "Store와 Slice",
        content: "전역 상태 저장소인 Store와, 상태의 일부분과 변경 로직을 정의하는 Slice 개념을 이해합니다.",
        code: `const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }
  }
});`
      },
      {
        title: "useSelector와 useDispatch",
        content: "컴포넌트에서 Redux 상태를 읽거나(useSelector), 액션을 발생시켜(useDispatch) 상태를 변경합니다.",
        code: `const count = useSelector(state => state.counter.value);
const dispatch = useDispatch();

<button onClick={() => dispatch(increment())}>+</button>`
      }
    ],
    challenge: {
      title: "쇼핑카트 구현하기",
      description: "Redux를 사용하여 상품 목록에서 '담기'를 누르면 장바구니에 추가되고, 장바구니에서 수량을 변경하는 기능을 구현해보세요."
    }
  },
  {
    day: 14,
    title: "성능 최적화와 배포",
    description: "React 앱의 성능을 분석하고 최적화하는 기법과, 실제 웹에 배포하는 과정을 경험합니다.",
    duration: "2시간",
    topics: [
      {
        title: "Code Splitting (Lazy Loading)",
        content: "React.lazy와 Suspense를 사용하여 당장 필요하지 않은 컴포넌트는 나중에 불러와 초기 로딩 속도를 높입니다.",
        code: `const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}`
      },
      {
        title: "배포하기 (Vercel/Netlify)",
        content: "npm run build 명령어로 프로덕션 빌드를 생성하고, Vercel이나 Netlify 같은 플랫폼을 통해 전 세계에 배포합니다."
      }
    ],
    challenge: {
      title: "나만의 포트폴리오 배포",
      description: "지금까지 만든 예제들을 모아 포트폴리오 사이트를 만들고, 실제 URL로 접속 가능하게 배포해보세요."
    }
  },
  {
    day: 15,
    title: "Next.js 맛보기 (React의 미래)",
    description: "React 기반의 풀스택 프레임워크인 Next.js의 기본 개념(SSR, 파일 기반 라우팅)을 살펴보고 확장성을 고민해봅니다.",
    duration: "2시간",
    topics: [
      {
        title: "SSR vs CSR",
        content: "클라이언트 사이드 렌더링(CSR)과 서버 사이드 렌더링(SSR)의 차이점을 이해하고, Next.js가 주는 이점을 알아봅니다."
      },
      {
        title: "파일 기반 라우팅",
        content: "pages 폴더(또는 app 디렉토리)에 파일을 만들면 자동으로 라우팅이 되는 Next.js의 편리한 시스템을 체험합니다."
      }
    ],
    challenge: {
      title: "Next.js 프로젝트 생성해보기",
      description: "create-next-app을 사용하여 Next.js 프로젝트를 생성하고, 첫 페이지를 띄워보세요."
    }
  }
];

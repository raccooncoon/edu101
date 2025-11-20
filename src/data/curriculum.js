export const curriculum = [
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
        code: `function App() {
  return <Welcome name="Sara" />;
}`
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
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      클릭 횟수: {count}
    </button>
  );
}`
      },
      {
        title: "이벤트 핸들링",
        content: "React 요소의 이벤트 처리는 DOM 요소의 이벤트 처리와 매우 유사하지만, 캐멀 케이스(camelCase)를 사용합니다.",
        code: `function Button() {
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };
  
  return <button onClick={handleClick}>Click me</button>;
}`
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
        code: `function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
    </div>
  );
}`
      },
      {
        title: "리스트 렌더링",
        content: "map() 함수를 사용하여 배열을 엘리먼트 리스트로 변환합니다. 이때 key prop이 중요합니다.",
        code: `function NumberList({ numbers }) {
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  
  return <ul>{listItems}</ul>;
}`
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
        code: `import { useState, useEffect } from "react";

function DocumentTitle() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // count가 바뀔 때만 실행
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}`
      }
    ],
    challenge: {
      title: "타이머 만들기",
      description: "useEffect를 사용하여 1초마다 숫자가 증가하는 타이머를 만들어보세요."
    }
  }
];

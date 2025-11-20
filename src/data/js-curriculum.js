export const jsCurriculum = [
    {
        day: 1,
        title: "자바스크립트 시작하기",
        description: "프로그래밍의 기초, 변수와 데이터 타입을 배우고 첫 코드를 작성해봅니다.",
        duration: "1시간",
        topics: [
            {
                title: "Hello, JavaScript!",
                content: "자바스크립트는 웹 페이지를 동적으로 만들어주는 프로그래밍 언어입니다. 브라우저 개발자 도구(F12)의 Console 탭에서 바로 실행해볼 수 있습니다.",
                code: `console.log("Hello, World!");`
            },
            {
                title: "변수 선언 (let, const)",
                content: "데이터를 저장할 공간인 변수를 만듭니다. ES6부터는 var 대신 let(변경 가능)과 const(변경 불가능)를 주로 사용합니다.",
                code: `let name = "Alice";
const age = 25;
name = "Bob"; // 가능
// age = 26; // 에러 발생!`
            },
            {
                title: "기본 데이터 타입",
                content: "문자열(String), 숫자(Number), 불리언(Boolean), null, undefined 등 기본적인 자료형을 알아봅니다.",
                code: `const message = "Hi"; // String
const count = 10;     // Number
const isDone = true;  // Boolean`
            }
        ],
        challenge: {
            title: "자기소개 변수 만들기",
            description: "이름, 나이, 취미를 각각 변수에 저장하고, console.log를 사용하여 한 문장으로 출력해보세요."
        }
    },
    {
        day: 2,
        title: "연산자와 조건문",
        description: "데이터를 계산하고 상황에 따라 다른 코드를 실행하는 로직을 만듭니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "산술 및 비교 연산자",
                content: "+, -, *, / 같은 산술 연산자와 >, <, ===, !== 같은 비교 연산자를 사용합니다.",
                code: `console.log(10 + 5); // 15
console.log(10 > 5); // true
console.log(10 === "10"); // false (타입까지 비교)`
            },
            {
                title: "if - else 조건문",
                content: "조건이 참(true)인지 거짓(false)인지에 따라 실행 흐름을 제어합니다.",
                code: `const score = 85;

if (score >= 90) {
  console.log("A학점");
} else if (score >= 80) {
  console.log("B학점");
} else {
  console.log("C학점");
}`
            }
        ],
        challenge: {
            title: "짝수/홀수 판별기",
            description: "숫자가 담긴 변수를 만들고, 이 숫자가 짝수인지 홀수인지 if문을 사용하여 출력하는 코드를 작성하세요."
        }
    },
    {
        day: 3,
        title: "반복문 (Loops)",
        description: "반복되는 작업을 효율적으로 처리하는 for문과 while문을 배웁니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "for 반복문",
                content: "특정 횟수만큼 코드를 반복 실행할 때 가장 많이 사용됩니다.",
                code: `for (let i = 0; i < 5; i++) {
  console.log("반복 횟수:", i);
}`
            },
            {
                title: "while 반복문",
                content: "조건이 참인 동안 계속해서 코드를 반복 실행합니다.",
                code: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`
            }
        ],
        challenge: {
            title: "구구단 출력하기",
            description: "for문을 사용하여 2단부터 9단까지 구구단을 콘솔에 출력해보세요."
        }
    },
    {
        day: 4,
        title: "함수 (Function)",
        description: "코드를 재사용 가능한 블록으로 묶는 함수의 개념과 다양한 선언 방식을 익힙니다.",
        duration: "2시간",
        topics: [
            {
                title: "함수 선언과 호출",
                content: "function 키워드로 함수를 정의하고, 이름 뒤에 ()를 붙여 실행합니다.",
                code: `function greet(name) {
  return "Hello, " + name;
}

console.log(greet("React"));`
            },
            {
                title: "화살표 함수 (Arrow Function)",
                content: "ES6에서 도입된 간결한 함수 작성법입니다. React에서 매우 자주 사용됩니다.",
                code: `const add = (a, b) => a + b;
console.log(add(3, 5)); // 8`
            }
        ],
        challenge: {
            title: "계산기 함수 만들기",
            description: "두 숫자와 연산자(+, -, *, /)를 입력받아 결과를 반환하는 함수를 만들어보세요."
        }
    },
    {
        day: 5,
        title: "배열과 객체",
        description: "여러 데이터를 구조적으로 관리하는 배열(Array)과 객체(Object)를 다룹니다.",
        duration: "2시간",
        topics: [
            {
                title: "배열 (Array)",
                content: "순서가 있는 데이터의 집합입니다. 인덱스로 접근하며 push, pop, map, filter 등 다양한 메서드를 가집니다.",
                code: `const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple
fruits.push("Grape");`
            },
            {
                title: "객체 (Object)",
                content: "키(Key)와 값(Value)의 쌍으로 이루어진 데이터 집합입니다.",
                code: `const user = {
  name: "John",
  age: 30,
  isDev: true
};
console.log(user.name);`
            }
        ],
        challenge: {
            title: "쇼핑 카트 데이터 구조",
            description: "상품명, 가격, 수량을 가진 객체들을 배열에 담아 쇼핑 카트 데이터를 모델링해보세요."
        }
    },
    {
        day: 6,
        title: "ES6+ 필수 문법",
        description: "React 학습 전 반드시 알아야 할 모던 자바스크립트 문법을 정리합니다.",
        duration: "2시간",
        topics: [
            {
                title: "구조 분해 할당 (Destructuring)",
                content: "객체나 배열에서 값을 간편하게 추출하여 변수에 할당하는 문법입니다.",
                code: `const user = { name: "Kim", age: 20 };
const { name, age } = user;

const colors = ["red", "blue"];
const [first, second] = colors;`
            },
            {
                title: "스프레드 연산자 (...)",
                content: "배열이나 객체를 복사하거나 합칠 때 유용합니다.",
                code: `const oldArr = [1, 2];
const newArr = [...oldArr, 3, 4]; // [1, 2, 3, 4]`
            },
            {
                title: "템플릿 리터럴",
                content: "백틱(`)을 사용하여 문자열 안에 변수를 쉽게 넣을 수 있습니다.",
                code: `const greeting = \`Hello, \${name}!\`;`
            }
        ],
        challenge: {
            title: "객체 합치기",
            description: "두 개의 다른 정보를 가진 객체를 스프레드 연산자를 사용하여 하나의 객체로 합쳐보세요."
        }
    },
    {
        day: 7,
        title: "비동기 처리",
        description: "서버 통신 등에 필수적인 비동기 작업의 개념과 Promise, async/await를 배웁니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "Promise",
                content: "비동기 작업의 완료 또는 실패를 나타내는 객체입니다.",
                code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("성공!"), 1000);
});`
            },
            {
                title: "async / await",
                content: "Promise를 더 읽기 쉽고 동기 코드처럼 작성할 수 있게 해주는 문법입니다.",
                code: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}`
            }
        ],
        challenge: {
            title: "가짜 API 호출하기",
            description: "setTimeout을 사용하여 2초 뒤에 데이터를 반환하는 모의 비동기 함수를 만들고, async/await로 결과를 출력해보세요."
        }
    },
    {
        day: 8,
        title: "DOM 조작과 이벤트",
        description: "자바스크립트로 HTML 요소를 선택하고 변경하며, 사용자의 행동(클릭 등)에 반응하는 법을 배웁니다.",
        duration: "2시간",
        topics: [
            {
                title: "DOM 요소 선택 및 변경",
                content: "document.querySelector 등을 사용하여 HTML 요소를 찾고 내용을 바꿉니다.",
                code: `const title = document.querySelector('#title');
title.innerText = "변경된 제목";
title.style.color = "red";`
            },
            {
                title: "이벤트 리스너",
                content: "addEventListener를 사용하여 클릭, 입력 등의 이벤트를 감지합니다.",
                code: `const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert("버튼 클릭됨!");
});`
            }
        ],
        challenge: {
            title: "카운터 만들기 (Vanilla JS)",
            description: "HTML 버튼을 클릭하면 화면의 숫자가 증가하는 기능을 순수 자바스크립트로 구현해보세요."
        }
    }
];

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
                code: `console.log("Hello, ^^World!^^");
console.warn("This is a warning!");
console.error("This is an error!");`
            },
            {
                title: "변수 선언 (let, const)",
                content: "데이터를 저장할 공간인 변수를 만듭니다. ES6부터는 var 대신 let(변경 가능)과 const(변경 불가능)를 주로 사용합니다. 변수명은 의미있게 짓는 것이 중요합니다 (camelCase 사용).",
                code: `^^let^^ userName = "Alice"; // 변경 가능
^^const^^ PI = 3.14;        // 변경 불가능 (상수)
userName = "Bob";       // 가능
// PI = 3.14159;        // 에러 발생! Assignment to constant variable.`
            },
            {
                title: "기본 데이터 타입과 typeof",
                content: "자바스크립트의 동적 타이핑 특징과 기본 자료형을 알아봅니다. typeof 연산자로 타입을 확인할 수 있습니다.",
                code: `const message = "Hi";     // String
const count = 10;         // Number
const isDone = true;      // Boolean
const empty = null;       // Object (초기화된 빈 값)
let notDefined;           // Undefined (정의되지 않음)

console.log(^^typeof^^ message); // "string"
console.log(^^typeof^^ count);   // "number"`
            },
            {
                title: "템플릿 리터럴 (Template Literals)",
                content: "백틱(\`)을 사용하면 문자열 내에서 변수를 쉽게 사용할 수 있습니다.",
                code: `const name = "JavaScript";
const year = 2024;
// 기존 방식
console.log("Hello, " + name + " " + year);
// 템플릿 리터럴
console.log(\`Hello, ^^\${name}^^ ^^\${year}^^\`);`
            }
        ],
        challenge: {
            title: "나만의 명함 만들기",
            description: "이름, 직업, 나이를 변수에 저장하고, 템플릿 리터럴을 사용하여 '제 이름은 OOO이고, 직업은 OOO입니다.' 형식으로 출력해보세요.",
            solution: `const name = "김철수";
const job = "프론트엔드 개발자";
const age = 25;

console.log(\`제 이름은 \${name}이고, 직업은 \${job}입니다.\`);`
        }
    },
    {
        day: 2,
        title: "연산자와 제어 흐름",
        description: "데이터를 계산하고 상황에 따라 다른 코드를 실행하는 로직을 만듭니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "산술 및 비교 연산자",
                content: "기본적인 사칙연산과 값의 크기를 비교하는 연산자입니다. ===는 값과 타입이 모두 같은지 비교합니다.",
                code: `console.log(10 % 3);      // 1 (나머지)
console.log(2 ** 3);      // 8 (거듭제곱)
console.log(10 == "10");  // true (값만 비교)
console.log(10 ^^===^^ "10"); // false (타입까지 비교 - 권장)`
            },
            {
                title: "논리 연산자와 Truthy/Falsy",
                content: "AND(&&), OR(||), NOT(!) 연산자와 자바스크립트에서 거짓으로 취급되는 값(0, '', null, undefined, NaN)을 이해합니다.",
                code: `const user = { name: "Alice" };
// 단축 평가 (Short-circuit evaluation)
const name = user.name ^^||^^ "Guest"; // user.name이 없으면 "Guest"
const isAdult = true ^^&&^^ true;      // true`
            },
            {
                title: "조건문 (if-else, switch)",
                content: "조건에 따라 실행 흐름을 분기합니다. 조건이 많을 때는 switch문이 가독성이 좋을 수 있습니다.",
                code: `const rank = "B";

switch (^^rank^^) {
  case "A":
    console.log("최고에요!");
    break;
  case "B":
    console.log("좋아요!");
    break;
  default:
    console.log("화이팅!");
}`
            },
            {
                title: "삼항 연산자",
                content: "간단한 if-else 문을 한 줄로 표현할 때 유용합니다.",
                code: `const age = 20;
const status = age >= 18 ^^?^^ "성인" ^^:^^ "미성년자";
console.log(status);`
            }
        ],
        challenge: {
            title: "학점 계산기",
            description: "점수(0~100)가 주어졌을 때, 90점 이상 A, 80점 이상 B, 그 외 C를 출력하는 코드를 삼항 연산자나 if문을 사용하여 작성하세요.",
            solution: `const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

console.log(grade);

// 삼항 연산자 버전
// const grade = score >= 90 ? "A" : (score >= 80 ? "B" : "C");`
        }
    },
    {
        day: 3,
        title: "반복문과 스코프",
        description: "반복되는 작업을 효율적으로 처리하고, 변수의 유효 범위(Scope)를 이해합니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "for 반복문과 break/continue",
                content: "가장 기본적인 반복문입니다. break로 반복을 중단하거나 continue로 다음 반복으로 건너뛸 수 있습니다.",
                code: `for (let i = 1; i <= 5; i++) {
    if (i === 3) ^^continue^^; // 3은 건너뜀
    console.log(i);        // 1, 2, 4, 5
} `
            },
            {
                title: "for...of 와 for...in",
                content: "배열이나 객체를 순회할 때 사용하는 모던한 반복문입니다.",
                code: `const fruits = ["Apple", "Banana"];
// 배열 값 순회
for (const fruit ^^of^^ fruits) {
    console.log(fruit);
}

const user = { name: "Kim", age: 30 };
// 객체 키 순회
for (const key ^^in^^ user) {
    console.log(\`\${key}: \${user[key]}\`);
}`
            },
            {
                title: "while 반복문",
                content: "조건이 참인 동안 계속 실행됩니다. 무한 루프에 빠지지 않도록 주의해야 합니다.",
                code: `let count = 0;
while (^^count < 3^^) {
  console.log(count);
  count++;
}`
            }
        ],
        challenge: {
            title: "짝수만 더하기",
            description: "1부터 10까지의 숫자 중 짝수만 골라서 모두 더한 값을 출력하는 코드를 작성하세요.",
            solution: `let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("짝수의 합:", sum);`
        }
    },
    {
        day: 4,
        title: "함수 심화",
        description: "함수의 다양한 선언 방식, 매개변수 처리, 그리고 스코프 개념을 깊이 있게 다룹니다.",
        duration: "2시간",
        topics: [
            {
                title: "함수 선언식 vs 표현식 vs 화살표 함수",
                content: "함수를 만드는 다양한 방법과 그 차이를 이해합니다. 화살표 함수는 this 바인딩 방식이 다릅니다.",
                code: `// 선언식
    function add(a, b) { return a + b; }

    // 표현식
    const sub = function (a, b) { return a - b; };

    // 화살표 함수 (return 생략 가능)
    const mul = (a, b) ^^=>^^ a * b; `
            },
            {
                title: "매개변수 기본값과 Rest 파라미터",
                content: "매개변수가 전달되지 않았을 때의 기본값을 설정하거나, 개수가 정해지지 않은 인자를 배열로 받을 수 있습니다.",
                code: `function greet(name = "Guest") {
        console.log(\`Hello, \${name}\`);
}

function sum(^^...numbers^^) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`
            },
            {
                title: "스코프 (Scope)와 호이스팅",
                content: "변수가 어디서 접근 가능한지를 결정하는 규칙입니다. let/const는 블록 스코프를 가집니다.",
                code: `let global = "전역";

function test() {
  let local = "지역";
  console.log(global); // 가능
}
// console.log(local); // 에러! 함수 밖에서 접근 불가`
            }
        ],
        challenge: {
            title: "최대값 찾기 함수",
            description: "숫자들을 인자로 몇 개든 받아서 그 중 가장 큰 수를 반환하는 max(...numbers) 함수를 구현해보세요.",
            solution: `function max(...numbers) {
  let maxNum = numbers[0];
  for (const num of numbers) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
  
  // 더 간단한 방법:
  // return Math.max(...numbers);
}

console.log(max(1, 5, 3, 9, 2)); // 9`
        }
    },
    {
        day: 5,
        title: "배열과 객체 마스터",
        description: "실무에서 가장 많이 쓰이는 배열 메서드와 객체 조작법을 익힙니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "배열 고차 함수 (map, filter, reduce)",
                content: "데이터를 변환하거나 필터링할 때 필수적인 메서드들입니다. 원본 배열을 변경하지 않고 새로운 배열을 반환합니다.",
                code: `const nums = [1, 2, 3, 4, 5];

        // 제곱하기
        const squared = nums.^^map^^(n => n * n); // [1, 4, 9, 16, 25]

        // 짝수만 필터링
        const evens = nums.^^filter^^(n => n % 2 === 0); // [2, 4]

        // 합계 구하기
        const sum = nums.^^reduce^^((acc, cur) => acc + cur, 0); // 15`
            },
            {
                title: "객체 조작 (Object.keys, values, entries)",
                content: "객체의 키나 값들을 배열로 변환하여 다루기 쉽게 만듭니다.",
                code: `const user = { name: "Alice", age: 25 };

console.log(^^Object.keys^^(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Alice", 25]
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25]]`
            },
            {
                title: "구조 분해 할당과 Spread 심화",
                content: "중첩된 객체나 배열에서 데이터를 우아하게 추출하고 병합하는 방법입니다.",
                code: `const user = { 
  id: 1, 
  info: { name: "Kim", skill: "JS" } 
};
const ^^ { info: { name } } ^^ = user; // "Kim"

const updatedUser = { ^^...user^^, active: true }; // 객체 복사 및 추가`
            }
        ],
        challenge: {
            title: "쇼핑 카트 총액 계산",
            description: "상품 객체({ name, price, qty })들이 담긴 배열에서 reduce를 사용하여 총 주문 금액을 계산하세요.",
            solution: `const cart = [
  { name: "사과", price: 1000, qty: 2 },
  { name: "바나나", price: 2000, qty: 1 },
  { name: "우유", price: 1500, qty: 3 }
];

const total = cart.reduce((acc, item) => {
  return acc + (item.price * item.qty);
}, 0);

console.log("총액:", total); // 8500`
        }
    },
    {
        day: 6,
        title: "ES6+ 모던 문법",
        description: "코드를 더 안전하고 간결하게 만들어주는 최신 문법들을 배웁니다.",
        duration: "2시간",
        topics: [
            {
                title: "옵셔널 체이닝 (?.)",
                content: "객체의 속성이 존재하는지 확인하지 않고도 안전하게 접근할 수 있습니다. 없으면 undefined를 반환합니다.",
                code: `const user = {};
        // console.log(user.address.street); // 에러 발생!
        console.log(user.address^^?.^^street); // undefined (에러 없음)`
            },
            {
                title: "Nullish 병합 연산자 (??)",
                content: "|| 연산자와 달리, 오직 null이나 undefined일 때만 오른쪽 값을 반환합니다. (0이나 ''은 유효한 값으로 취급)",
                code: `const count = 0;
const num1 = count || 10; // 10 (0을 거짓으로 취급)
const num2 = count ^^??^^ 10; // 0 (0은 null/undefined가 아님)`
            },
            {
                title: "모듈 시스템 (import/export)",
                content: "코드를 여러 파일로 나누고 필요한 것만 가져와서 사용하는 방법입니다. HTML에서 script 태그에 type='module' 속성이 필요합니다.",
                code: `// math.js
^^export^^ const add = (a, b) => a + b;

// app.js
^^import^^ { add } from './math.js';
console.log(add(1, 2));`
            }
        ],
        challenge: {
            title: "안전한 데이터 접근",
            description: "중첩된 객체에서 옵셔널 체이닝과 Nullish 병합 연산자를 사용하여, 데이터가 없을 때 '정보 없음'을 출력하는 코드를 작성하세요.",
            solution: `const user = {
  profile: {
    // name: "Alice" // 주석 처리하여 테스트
  }
};

const userName = user.profile?.name ?? "정보 없음";
console.log(userName);`
        }
    },
    {
        day: 7,
        title: "비동기 프로그래밍",
        description: "서버 통신, 타이머 등 시간이 걸리는 작업을 처리하는 비동기 로직을 완벽하게 이해합니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "Promise와 then/catch",
                content: "비동기 작업의 성공/실패를 처리하는 객체입니다. 콜백 지옥을 해결해줍니다.",
                code: `const fetchUser = () => {
            return new ^^Promise^^((resolve, reject) => {
                setTimeout(() => resolve("User Data"), 1000);
            });
        };

        fetchUser()
            .then(data => console.log(data))
            .catch(err => console.error(err)); `
            },
            {
                title: "async / await",
                content: "Promise를 동기 코드처럼 작성할 수 있게 해주는 문법적 설탕(Syntactic Sugar)입니다. try/catch로 에러를 처리합니다.",
                code: `^^async^^ function getUser() {
            try {
                const data = ^^await^^ fetchUser();
                console.log(data);
            } catch (e) {
                console.log("에러 발생:", e);
            }
        } `
            },
            {
                title: "Promise.all",
                content: "여러 비동기 작업을 병렬로 동시에 처리하고, 모두 완료될 때까지 기다립니다.",
                code: `const p1 = Promise.resolve(1);
        const p2 = Promise.resolve(2);

        const results = await ^^Promise.all^^([p1, p2]);
        console.log(results); // [1, 2]`
            }
        ],
        challenge: {
            title: "순차적 vs 병렬 실행",
            description: "두 개의 1초 걸리는 비동기 함수를 만들고, await로 순차 실행했을 때와 Promise.all로 병렬 실행했을 때의 시간 차이를 확인해보세요.",
            solution: `const wait1s = () => new Promise(res => setTimeout(res, 1000));

async function test() {
  console.time("Sequential");
  await wait1s();
  await wait1s();
  console.timeEnd("Sequential"); // 약 2초

  console.time("Parallel");
  await Promise.all([wait1s(), wait1s()]);
  console.timeEnd("Parallel"); // 약 1초
}

test();`
        }
    },
    {
        day: 8,
        title: "DOM 조작과 이벤트",
        description: "자바스크립트로 웹 페이지의 요소를 동적으로 변경하고 사용자와 상호작용합니다.",
        duration: "2시간",
        topics: [
            {
                title: "요소 선택과 스타일 변경",
                content: "querySelector로 요소를 찾고, style 속성이나 classList를 사용하여 스타일을 변경합니다.",
                code: `const box = document.^^querySelector^^('.box');
        box.style.backgroundColor = 'red';
        box.classList.add('active'); // 클래스 추가
        box.classList.remove('hidden'); // 클래스 제거`
            },
            {
                title: "요소 생성과 추가 (createElement)",
                content: "새로운 HTML 요소를 만들어서 화면에 추가합니다.",
                code: `const list = document.getElementById('list');
const newItem = document.^^createElement^^('li');
newItem.innerText = "새로운 아이템";
list.appendChild(newItem);`
            },
            {
                title: "이벤트 리스너와 이벤트 객체",
                content: "클릭, 입력 등의 이벤트를 감지하고, 이벤트 객체(e)를 통해 상세 정보를 얻습니다.",
                code: `const btn = document.querySelector('button');
btn.^^addEventListener^^('click', (e) => {
  console.log("클릭된 좌표:", e.clientX, e.clientY);
  e.target.innerText = "클릭됨!";
});`
            }
        ],
        challenge: {
            title: "할 일 목록(Todo) 만들기",
            description: "input에 내용을 입력하고 버튼을 누르면, 아래 리스트에 새로운 항목이 추가되는 기능을 구현해보세요.",
            solution: `// HTML: <input id="input" /> <button id="btn">추가</button> <ul id="list"></ul>

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
  if (input.value === '') return;
  
  const li = document.createElement('li');
  li.innerText = input.value;
  list.appendChild(li);
  
  input.value = ''; // 입력창 초기화
});`
        }
    }
];

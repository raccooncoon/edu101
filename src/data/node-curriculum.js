export const nodeCurriculum = [
    {
        day: 1,
        title: "Node.js 시작하기 & NPM",
        description: "Node.js 환경을 설정하고 패키지 매니저(NPM)의 기본 사용법을 익힙니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "Node.js와 런타임",
                content: "Chrome V8 엔진 기반의 자바스크립트 런타임인 Node.js의 특징(이벤트 기반, 비동기 I/O)을 이해합니다.",
                code: `console.log("Hello, Node.js!");
console.log("Arch:", process.arch);
console.log("Platform:", process.platform);`
            },
            {
                title: "NPM과 package.json",
                content: "Node Package Manager를 통해 외부 라이브러리를 관리하는 방법을 배웁니다. `npm init`으로 프로젝트를 시작합니다.",
                code: `// package.json 예시
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "dayjs": "^1.11.10"
  }
}`
            }
        ],
        challenge: {
            title: "프로젝트 초기화",
            description: "새 폴더를 만들고 `npm init -y`로 초기화한 뒤, `figlet` 패키지를 설치하여 터미널에 멋진 아스키 아트를 출력하는 코드를 작성하세요.",
            solution: `// 1. npm install figlet
// 2. index.js 작성
import figlet from 'figlet';

figlet('Node.js', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});`
        }
    },
    {
        day: 2,
        title: "모듈 시스템과 내장 모듈",
        description: "CommonJS와 ES Modules의 차이를 이해하고, 유용한 내장 모듈들을 활용해봅니다.",
        duration: "2시간",
        topics: [
            {
                title: "모듈 내보내기/가져오기",
                content: "코드를 분리하여 재사용성을 높입니다. 최신 표준인 ES Modules(import/export)를 주로 사용합니다.",
                code: `// utils.js
export const sayHi = (name) => \`Hi, \${name}!\`;

// main.js
import { sayHi } from './utils.js';
console.log(sayHi('Alice'));`
            },
            {
                title: "OS와 Path 모듈",
                content: "운영체제 정보에 접근하거나 파일 경로를 다룰 때 사용하는 내장 모듈입니다.",
                code: `import os from 'os';
import path from 'path';

console.log(os.cpus().length); // CPU 코어 수
const fullPath = path.join('users', 'documents', 'file.txt');
console.log(fullPath); // users/documents/file.txt (OS에 맞게 구분자 처리)`
            }
        ],
        challenge: {
            title: "시스템 정보 출력기",
            description: "현재 사용 중인 OS의 종류, 총 메모리 용량, 사용 가능한 메모리 용량을 출력하는 스크립트를 작성하세요.",
            solution: `import os from 'os';

const totalMem = os.totalmem() / (1024 * 1024 * 1024); // GB 단위 변환
const freeMem = os.freemem() / (1024 * 1024 * 1024);

console.log(\`OS Type: \${os.type()}\`);
console.log(\`Total Memory: \${totalMem.toFixed(2)} GB\`);
console.log(\`Free Memory: \${freeMem.toFixed(2)} GB\`);`
        }
    },
    {
        day: 3,
        title: "비동기 프로그래밍 심화",
        description: "Node.js의 핵심인 비동기 처리를 마스터합니다. Callback, Promise, Async/Await의 진화를 이해합니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "Callback Hell과 Promise",
                content: "콜백 지옥을 해결하기 위해 등장한 Promise 객체의 사용법과 체이닝을 배웁니다.",
                code: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("성공!"), 1000);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));`
            },
            {
                title: "Async / Await",
                content: "비동기 코드를 동기 코드처럼 읽기 쉽게 작성하는 현대적인 방법입니다.",
                code: `const run = async () => {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};
run();`
            }
        ],
        challenge: {
            title: "비동기 파일 읽기",
            description: "fs.readFile(콜백 방식)을 Promise로 감싸서 직접 promisify 해보고, async/await로 파일을 읽는 함수를 만들어보세요.",
            solution: `import fs from 'fs';

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

async function main() {
  try {
    const data = await readFilePromise('./package.json');
    console.log(data);
  } catch (err) {
    console.error("파일 읽기 실패:", err);
  }
}
main();`
        }
    },
    {
        day: 4,
        title: "파일 시스템과 스트림",
        description: "대용량 데이터를 효율적으로 처리하기 위한 스트림(Stream)과 버퍼(Buffer)를 이해합니다.",
        duration: "2시간",
        topics: [
            {
                title: "fs 모듈 (Promises API)",
                content: "파일 생성, 읽기, 수정, 삭제(CRUD) 작업을 수행합니다.",
                code: `import fs from 'fs/promises';

await fs.writeFile('test.txt', 'Hello');
const data = await fs.readFile('test.txt', 'utf8');
await fs.unlink('test.txt'); // 삭제`
            },
            {
                title: "Stream과 Pipe",
                content: "파일을 조각(chunk)내어 전송하는 스트림 방식을 통해 메모리 효율을 높입니다.",
                code: `import fs from 'fs';

const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream); // 읽은 데이터를 바로 씀`
            }
        ],
        challenge: {
            title: "파일 복사기 만들기",
            description: "스트림을 사용하여 원본 파일을 읽어 복사본을 만드는 `copyFile.js`를 작성하세요. 복사가 완료되면 '복사 완료'를 출력해야 합니다.",
            solution: `import fs from 'fs';

const rs = fs.createReadStream('source.txt');
const ws = fs.createWriteStream('dest.txt');

rs.pipe(ws);

ws.on('finish', () => {
  console.log('파일 복사가 완료되었습니다.');
});`
        }
    },
    {
        day: 5,
        title: "HTTP 웹 서버 구축",
        description: "프레임워크 없이 순수 Node.js로 웹 서버를 만들며 HTTP 프로토콜의 원리를 익힙니다.",
        duration: "2시간",
        topics: [
            {
                title: "http 모듈로 서버 띄우기",
                content: "요청(Request)과 응답(Response) 객체를 다루는 법을 배웁니다.",
                code: `import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
});

server.listen(8080);`
            },
            {
                title: "URL 파싱과 라우팅",
                content: "요청된 URL에 따라 다른 콘텐츠를 보여주는 라우팅 로직을 구현합니다.",
                code: `// req.url 확인
if (req.url === '/') {
  res.end('Home');
} else if (req.url === '/login') {
  res.end('Login Page');
}`
            }
        ],
        challenge: {
            title: "간단한 API 서버",
            description: "`GET /time` 요청이 오면 현재 시간을 JSON으로 응답하고, 그 외의 요청은 404를 반환하는 서버를 만드세요.",
            solution: `import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ time: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);`
        }
    },
    {
        day: 6,
        title: "Express.js 시작하기",
        description: "Node.js의 표준 웹 프레임워크인 Express를 사용하여 서버 개발 생산성을 높입니다.",
        duration: "2시간",
        topics: [
            {
                title: "Express 설치 및 기본 구조",
                content: "http 모듈의 복잡한 보일러플레이트를 제거하고 간결하게 서버를 작성합니다.",
                code: `import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000);`
            },
            {
                title: "정적 파일 제공 (Static Files)",
                content: "이미지, CSS, HTML 파일 등을 브라우저에 제공하는 방법을 배웁니다.",
                code: `app.use(express.static('public'));
// public 폴더 안의 파일들이 루트 경로로 접근 가능해짐`
            }
        ],
        challenge: {
            title: "HTML 파일 서빙",
            description: "public 폴더에 index.html을 만들고, Express 서버를 통해 해당 파일이 브라우저에 보이도록 설정하세요.",
            solution: `import express from 'express';
import path from 'path';

const app = express();

// 'public' 폴더를 정적 파일 경로로 지정
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('http://localhost:3000 에서 확인하세요.');
});`
        }
    },
    {
        day: 7,
        title: "미들웨어와 에러 핸들링",
        description: "Express의 핵심인 미들웨어 패턴을 이해하고, 에러를 우아하게 처리하는 법을 배웁니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "미들웨어의 동작 원리",
                content: "요청이 들어와서 응답이 나갈 때까지 거쳐가는 함수들입니다. `next()`로 다음 단계로 넘깁니다.",
                code: `app.use((req, res, next) => {
  console.log('모든 요청에 대해 실행됨');
  next();
});`
            },
            {
                title: "에러 처리 미들웨어",
                content: "인자가 4개인 미들웨어는 에러 처리 전용입니다.",
                code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`
            }
        ],
        challenge: {
            title: "요청 시간 기록기",
            description: "모든 요청에 대해 요청이 들어온 시각과 URL을 콘솔에 찍는 미들웨어를 작성하세요.",
            solution: `const timeLogger = (req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(\`[\${time}] \${req.method} \${req.url}\`);
  next();
};

app.use(timeLogger);`
        }
    },
    {
        day: 8,
        title: "REST API 설계 및 구현",
        description: "자원을 명시하고 HTTP 메서드로 행위를 결정하는 RESTful API를 설계합니다.",
        duration: "3시간",
        topics: [
            {
                title: "REST 원칙과 HTTP Method",
                content: "GET(조회), POST(생성), PUT/PATCH(수정), DELETE(삭제)의 의미를 명확히 이해합니다.",
                code: `// 좋은 예
GET /users/1
POST /users

// 나쁜 예
GET /getUsers
POST /createUser`
            },
            {
                title: "Router로 코드 분리",
                content: "API 경로별로 파일을 나누어 관리합니다.",
                code: `// routes/users.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => { ... });

export default router;

// app.js
app.use('/users', userRouter);`
            }
        ],
        challenge: {
            title: "게시판 API 구조 잡기",
            description: "게시글(posts)과 댓글(comments)을 위한 라우터를 각각 만들고 app.js에 연결하세요.",
            solution: `// routes/posts.js
const router = express.Router();
router.get('/', (req, res) => res.send('Post List'));
export default router;

// routes/comments.js
const router = express.Router();
router.get('/', (req, res) => res.send('Comment List'));
export default router;

// app.js
import postRouter from './routes/posts.js';
import commentRouter from './routes/comments.js';

app.use('/posts', postRouter);
app.use('/comments', commentRouter);`
        }
    },
    {
        day: 9,
        title: "데이터베이스 연동 (MongoDB)",
        description: "NoSQL 데이터베이스인 MongoDB와 ODM인 Mongoose를 사용하여 데이터를 영구 저장합니다.",
        duration: "3시간",
        topics: [
            {
                title: "MongoDB와 Mongoose 연결",
                content: "데이터베이스에 접속하고 스키마(Schema)를 정의합니다.",
                code: `import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/myapp');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', UserSchema);`
            },
            {
                title: "데이터 생성 및 조회",
                content: "Model을 사용하여 DB에 데이터를 넣고 찾습니다.",
                code: `// 생성
const user = new User({ name: 'Kim', age: 20 });
await user.save();

// 조회
const users = await User.find({ age: { $gte: 20 } });`
            }
        ],
        challenge: {
            title: "회원가입 API",
            description: "POST /register 요청으로 { name, email }을 받아 DB에 저장하는 API를 만드세요.",
            solution: `app.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`
        }
    },
    {
        day: 10,
        title: "CRUD 완성하기",
        description: "DB와 연동하여 완전한 CRUD(Create, Read, Update, Delete) 기능을 구현합니다.",
        duration: "3시간",
        topics: [
            {
                title: "수정과 삭제",
                content: "findByIdAndUpdate, findByIdAndDelete 메서드를 활용합니다.",
                code: `// 수정
await User.findByIdAndUpdate(id, { age: 21 });

// 삭제
await User.findByIdAndDelete(id);`
            },
            {
                title: "비동기 에러 처리",
                content: "async 함수 내부의 에러를 catch하여 클라이언트에게 적절한 응답을 보냅니다.",
                code: `try {
  // DB 작업
} catch (error) {
  res.status(500).json({ message: "서버 에러" });
}`
            }
        ],
        challenge: {
            title: "상품 관리 API",
            description: "상품(Product) 모델을 정의하고, ID로 특정 상품을 수정하고 삭제하는 API를 구현하세요.",
            solution: `// PUT /products/:id
app.put('/products/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE /products/:id
app.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});`
        }
    },
    {
        day: 11,
        title: "인증과 보안 (Authentication)",
        description: "사용자 로그인 기능을 구현하고 JWT(JSON Web Token)를 통해 인증 상태를 관리합니다.",
        duration: "4시간",
        topics: [
            {
                title: "비밀번호 암호화 (Bcrypt)",
                content: "비밀번호를 평문으로 저장하면 안 됩니다. 해시 함수를 이용해 암호화합니다.",
                code: `import bcrypt from 'bcrypt';
const hashedPassword = await bcrypt.hash('mypassword', 10);
const match = await bcrypt.compare('mypassword', hashedPassword);`
            },
            {
                title: "JWT 발급과 검증",
                content: "로그인 성공 시 토큰을 발급하고, 이후 요청에서 토큰을 확인하여 유저를 식별합니다.",
                code: `import jwt from 'jsonwebtoken';
const token = jwt.sign({ id: user._id }, 'SECRET_KEY');

// 검증
const decoded = jwt.verify(token, 'SECRET_KEY');`
            }
        ],
        challenge: {
            title: "로그인 API",
            description: "이메일과 비밀번호를 받아 검증하고, 일치하면 JWT 토큰을 반환하는 로그인 로직을 작성하세요.",
            solution: `app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('User not found');

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, 'SECRET');
  res.header('auth-token', token).send(token);
});`
        }
    },
    {
        day: 12,
        title: "배포와 환경 변수",
        description: "개발한 서버를 실제 환경에 배포하기 위한 준비를 합니다.",
        duration: "2시간",
        topics: [
            {
                title: "환경 변수 관리 (dotenv)",
                content: "DB 주소, 비밀 키 등 민감한 정보는 코드에 하드코딩하지 않고 .env 파일로 관리합니다.",
                code: `// .env 파일
DB_URL=mongodb://...
PORT=3000

// app.js
import 'dotenv/config';
console.log(process.env.PORT);`
            },
            {
                title: "PM2로 프로세스 관리",
                content: "서버가 꺼지지 않게 관리해주는 프로세스 매니저 PM2를 알아봅니다.",
                code: `npm install pm2 -g
pm2 start app.js`
            }
        ],
        challenge: {
            title: "배포 준비하기",
            description: "프로젝트의 포트 번호와 DB 연결 주소를 환경 변수로 분리하고, npm start 스크립트를 설정하세요.",
            solution: `// package.json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}

// app.js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => ...);`
        }
    }
];

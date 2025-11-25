export const expressCurriculum = [
    {
        day: 1,
        title: "Express 시작하기 & 서버 구축",
        description: "Node.js를 위한 빠르고 개방적인 웹 프레임워크인 Express의 기초를 다집니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "Express란?",
                content: "Node.js 환경에서 웹 서버를 쉽게 구축할 수 있게 도와주는 프레임워크입니다. 미들웨어 구조를 기반으로 유연한 확장이 가능합니다.",
                code: `npm init -y
npm install express`
            },
            {
                title: "Hello World 서버",
                content: "가장 기본적인 웹 서버를 띄우고 루트 경로('/') 요청에 응답해봅니다.",
                code: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});`
            }
        ],
        challenge: {
            title: "나만의 서버 만들기",
            description: "3000번 포트에서 실행되며, '/about' 경로로 접속했을 때 본인의 이름을 응답하는 서버를 만드세요.",
            solution: `const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.send('My name is Developer');
});

app.listen(3000);`
        }
    },
    {
        day: 2,
        title: "Routing & Middleware",
        description: "Express의 핵심인 라우팅 시스템과 미들웨어의 동작 원리를 이해합니다.",
        duration: "2시간",
        topics: [
            {
                title: "Routing",
                content: "HTTP 메서드(GET, POST 등)와 URL 경로에 따라 애플리케이션이 어떻게 응답할지 정의합니다.",
                code: `app.get('/users', (req, res) => { ... });
app.post('/users', (req, res) => { ... });
app.put('/users/:id', (req, res) => { ... });`
            },
            {
                title: "Middleware",
                content: "요청과 응답 사이클 중간에 위치하여 기능을 수행하는 함수입니다. 로깅, 파싱 등에 사용됩니다.",
                code: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// JSON 파싱 미들웨어
app.use(express.json());`
            }
        ],
        challenge: {
            title: "요청 로거 만들기",
            description: "모든 요청에 대해 'METHOD URL' 형식(예: 'GET /users')으로 콘솔에 로그를 남기는 미들웨어를 작성하세요.",
            solution: `app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});`
        }
    },
    {
        day: 3,
        title: "REST API Design",
        description: "자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 RESTful API를 설계하고 구현합니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "REST 원칙",
                content: "자원(Resource)은 URI로, 행위(Verb)는 HTTP Method로, 표현(Representation)은 JSON 등으로 처리합니다.",
                code: `GET /articles      // 목록 조회
GET /articles/1    // 상세 조회
POST /articles     // 생성
PUT /articles/1    // 수정
DELETE /articles/1 // 삭제`
            },
            {
                title: "Router 객체",
                content: "라우트를 모듈화하여 관리하기 위해 express.Router()를 사용합니다.",
                code: `// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { ... });

module.exports = router;

// app.js
app.use('/users', userRouter);`
            }
        ],
        challenge: {
            title: "Todo API 만들기",
            description: "메모리 상의 배열을 사용하여 Todo 리스트의 CRUD(Create, Read, Update, Delete) API를 구현하세요.",
            solution: `const todos = [];
app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});`
        }
    },
    {
        day: 4,
        title: "Error Handling & Validation",
        description: "안정적인 서버를 위해 에러를 적절히 처리하고, 들어오는 데이터의 유효성을 검사합니다.",
        duration: "2시간",
        topics: [
            {
                title: "에러 처리 미들웨어",
                content: "4개의 인자(err, req, res, next)를 가지는 미들웨어는 에러 처리를 담당합니다.",
                code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`
            },
            {
                title: "입력값 검증",
                content: "클라이언트가 보낸 데이터가 올바른 형식인지 확인해야 합니다. (예: express-validator 사용)",
                code: `if (!req.body.email) {
  return res.status(400).json({ error: 'Email is required' });
}`
            }
        ],
        challenge: {
            title: "안전한 API 만들기",
            description: "사용자 생성 API에서 이름이 없거나 2글자 미만일 경우 400 Bad Request 에러를 응답하도록 구현하세요.",
            solution: `app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  // ... 사용자 생성 로직
});`
        }
    },
    {
        day: 5,
        title: "Database Integration (MongoDB)",
        description: "NoSQL 데이터베이스인 MongoDB와 ODM인 Mongoose를 사용하여 데이터를 영구 저장합니다.",
        duration: "3시간",
        topics: [
            {
                title: "Mongoose 연결",
                content: "Node.js와 MongoDB를 연결하고 스키마를 정의합니다.",
                code: `const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);`
            },
            {
                title: "DB 쿼리",
                content: "모델을 사용하여 데이터를 조회, 생성, 수정, 삭제합니다.",
                code: `// 생성
const user = new User({ name: 'Kim' });
await user.save();

// 조회
const users = await User.find();`
            }
        ],
        challenge: {
            title: "DB 연동 Todo API",
            description: "Day 3에서 만든 Todo API를 Mongoose를 사용하여 실제 DB에 저장되도록 수정하세요.",
            solution: `app.post('/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.status(201).json(todo);
});`
        }
    },
    {
        day: 6,
        title: "Authentication (JWT)",
        description: "JSON Web Token(JWT)을 사용하여 사용자 인증 및 인가 시스템을 구현합니다.",
        duration: "3시간",
        topics: [
            {
                title: "JWT 발급",
                content: "로그인 성공 시 사용자 정보를 담은 토큰을 생성하여 클라이언트에 전달합니다.",
                code: `const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
res.json({ token });`
            },
            {
                title: "인증 미들웨어",
                content: "요청 헤더의 토큰을 검증하여 유효한 사용자인지 확인합니다.",
                code: `const auth = (req, res, next) => {
  const token = req.header('Authorization');
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch(e) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};`
            }
        ],
        challenge: {
            title: "보호된 라우트",
            description: "로그인한 사용자만 접근할 수 있는 '/profile' 라우트를 구현하세요.",
            solution: `app.get('/profile', auth, (req, res) => {
  res.json({ message: \`Hello user \${req.user.id}\` });
});`
        }
    },
    {
        day: 7,
        title: "Deployment",
        description: "완성된 Express 애플리케이션을 클라우드 환경(예: Render, Heroku)에 배포합니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "환경 변수 설정",
                content: "포트, DB 주소, 비밀 키 등 민감한 정보는 환경 변수로 관리합니다.",
                code: `require('dotenv').config();
const port = process.env.PORT || 3000;`
            },
            {
                title: "배포 준비",
                content: "package.json의 start 스크립트를 설정하고, 프로덕션 환경에 맞는 설정을 확인합니다.",
                code: `"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}`
            }
        ],
        challenge: {
            title: "Hello Express 배포",
            description: "간단한 Express 서버를 클라우드 서비스에 배포하고 접속 URL을 확인하세요.",
            solution: `// 1. 코드를 GitHub에 푸시
// 2. 클라우드 서비스(Render 등)에서 레포지토리 연결
// 3. 환경 변수 설정 후 배포`
        }
    }
];

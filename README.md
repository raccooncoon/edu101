# DevMastery 학습 플랫폼

React와 JavaScript를 학습할 수 있는 인터랙티브 웹 플랫폼입니다.

## 🛠️ 리팩토링 및 구조 개선 (2024. 5. 21)

코드의 유지보수성과 확장성을 높이기 위해 대규모 리팩토링을 진행했습니다. 기존의 단일 파일(`App.jsx`) 구조에서 **컴포넌트 기반 아키텍처**로 전환하고, 비즈니스 로직을 **Custom Hooks**로 분리했습니다.

### 📂 디렉토리 구조

```
src/
├── components/        # UI 컴포넌트 (View)
│   ├── Layout.jsx     # 공통 레이아웃 (헤더, 푸터)
│   ├── HomeView.jsx   # 메인 코스 선택 화면
│   ├── CourseView.jsx # 커리큘럼 목록 화면
│   ├── LessonView.jsx # 상세 학습 및 챌린지 화면
│   └── CodeBlock.jsx  # 코드 하이라이팅 컴포넌트
├── hooks/             # 비즈니스 로직 (Logic)
│   ├── useRoute.js    # 해시 기반 라우팅 로직
│   └── useProgress.js # 학습 진도 저장 및 관리 로직
├── data/              # 학습 데이터
│   ├── courses.js           # 코스 메타 데이터
│   ├── js-curriculum.js     # JS 커리큘럼
│   └── react-curriculum.js  # React 커리큘럼
└── App.jsx            # 메인 진입점 (Composition Root)
```

### ✨ 주요 변경 사항

#### 1. Custom Hooks 도입
- **`useRoute`**: URL Hash를 이용한 라우팅 로직을 전담합니다. `window.location.hash` 변경을 감지하고 파싱하여 현재 상태(`course`, `selectedDay`)를 반환합니다.
- **`useProgress`**: `localStorage`를 이용한 학습 진도 저장 로직을 캡슐화했습니다. 완료 버튼 클릭 시 타임스탬프를 저장하고 관리합니다.

#### 2. 컴포넌트 분리
- **`Layout`**: 모든 페이지에 공통으로 적용되는 헤더와 푸터를 관리하여 코드 중복을 제거했습니다.
- **View 컴포넌트**: 화면 단위로 컴포넌트를 분리(`HomeView`, `CourseView`, `LessonView`)하여 `App.jsx`의 복잡도를 낮추고 가독성을 높였습니다.

#### 3. 데이터 관리 개선
- 완료 데이터 저장 방식을 개선하여 단순 완료 여부뿐만 아니라 **완료 시간**까지 기록하도록 변경했습니다. (기존 데이터 자동 마이그레이션 지원)

## 🚀 실행 방법

```bash
npm install
npm run dev
```

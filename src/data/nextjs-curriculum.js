export const nextjsCurriculum = [
    {
        day: 1,
        title: "Next.js 시작하기 & App Router",
        description: "React 프레임워크인 Next.js의 기본 개념과 App Router 구조를 이해합니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "Next.js란?",
                content: "풀스택 웹 애플리케이션을 위한 React 프레임워크입니다. 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원합니다.",
                code: `npx create-next-app@latest my-app
cd my-app
npm run dev`
            },
            {
                title: "App Router 구조",
                content: "파일 시스템 기반 라우팅을 사용합니다. `app` 폴더 내의 폴더 구조가 URL 경로가 됩니다.",
                code: `app/
  page.tsx      // / 경로
  about/
    page.tsx    // /about 경로
  layout.tsx    // 공통 레이아웃`
            }
        ],
        challenge: {
            title: "첫 페이지 만들기",
            description: "새 Next.js 프로젝트를 생성하고, `/about` 페이지를 만들어 'About Page'라는 텍스트를 띄워보세요.",
            solution: `// app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my first Next.js page!</p>
    </div>
  );
}`
        }
    },
    {
        day: 2,
        title: "Routing과 Navigation",
        description: "페이지 간 이동과 동적 라우팅(Dynamic Routing)을 구현하는 방법을 배웁니다.",
        duration: "2시간",
        topics: [
            {
                title: "Link 컴포넌트",
                content: "`<a>` 태그 대신 `<Link>` 컴포넌트를 사용하여 클라이언트 사이드 네비게이션을 구현합니다.",
                code: `import Link from 'next/link';

export default function Home() {
  return <Link href="/about">Go to About</Link>;
}`
            },
            {
                title: "동적 라우팅 (Dynamic Routes)",
                content: "대괄호 `[param]`을 사용하여 동적인 경로를 처리합니다.",
                code: `// app/posts/[id]/page.tsx
export default function Post({ params }: { params: { id: string } }) {
  return <h1>Post ID: {params.id}</h1>;
}`
            }
        ],
        challenge: {
            title: "블로그 포스트 네비게이션",
            description: "메인 페이지에 포스트 목록(1, 2, 3)을 만들고, 클릭하면 `/posts/[id]`로 이동하여 해당 ID를 출력하게 하세요.",
            solution: `// app/page.tsx
import Link from 'next/link';

export default function Home() {
  const posts = [1, 2, 3];
  return (
    <ul>
      {posts.map(id => (
        <li key={id}>
          <Link href={\`/posts/\${id}\`}>Post {id}</Link>
        </li>
      ))}
    </ul>
  );
}`
        }
    },
    {
        day: 3,
        title: "Server vs Client Components",
        description: "Next.js 13+의 핵심인 서버 컴포넌트와 클라이언트 컴포넌트의 차이를 이해합니다.",
        duration: "2시간",
        topics: [
            {
                title: "Server Components (기본값)",
                content: "서버에서 렌더링되며, DB 접근 등 보안이 필요한 작업에 유리합니다. 브라우저 API(useState, useEffect)는 사용할 수 없습니다.",
                code: `// 기본적으로 모든 컴포넌트는 서버 컴포넌트입니다.
export default async function Page() {
  const data = await getData(); // 서버에서 직접 데이터 호출 가능
  return <div>{data}</div>;
}`
            },
            {
                title: "Client Components",
                content: "상호작용(onClick, onChange)이나 상태 관리(useState)가 필요할 때 `'use client'` 지시어를 사용합니다.",
                code: `'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`
            }
        ],
        challenge: {
            title: "인터랙티브 버튼 만들기",
            description: "서버 컴포넌트인 `page.tsx` 안에 클라이언트 컴포넌트인 `LikeButton`을 만들어 포함시키세요.",
            solution: `// app/LikeButton.tsx
'use client';
import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>Likes: {likes}</button>;
}

// app/page.tsx
import LikeButton from './LikeButton';

export default function Page() {
  return (
    <div>
      <h1>Post Title</h1>
      <LikeButton />
    </div>
  );
}`
        }
    },
    {
        day: 4,
        title: "Data Fetching",
        description: "서버 컴포넌트에서 데이터를 가져오는 방법과 로딩/에러 상태를 처리하는 방법을 배웁니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "async / await 데이터 호출",
                content: "서버 컴포넌트는 그 자체로 async 함수가 될 수 있어, 데이터를 직관적으로 가져올 수 있습니다.",
                code: `async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{JSON.stringify(data)}</main>;
}`
            },
            {
                title: "Loading UI & Error Handling",
                content: "`loading.tsx`와 `error.tsx` 파일을 통해 로딩 상태와 에러를 우아하게 처리합니다.",
                code: `// app/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}

// app/error.tsx
'use client';
export default function Error({ error, reset }) {
  return <button onClick={() => reset()}>Try again</button>;
}`
            }
        ],
        challenge: {
            title: "외부 API 데이터 표시",
            description: "`jsonplaceholder` API를 사용하여 사용자 목록을 가져와 화면에 표시하는 페이지를 만드세요.",
            solution: `export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
        }
    },
    {
        day: 5,
        title: "Server Actions",
        description: "API 라우트를 따로 만들지 않고, 서버 함수를 직접 호출하여 폼 데이터를 처리합니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "Server Actions 정의",
                content: "`'use server'` 지시어를 사용하여 서버에서 실행될 함수를 정의합니다.",
                code: `// app/actions.ts
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.post.create({ data: { title } });
}`
            },
            {
                title: "Form 연결",
                content: "form 태그의 `action` 속성에 서버 액션 함수를 연결합니다.",
                code: `import { createPost } from './actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}`
            }
        ],
        challenge: {
            title: "간단한 방명록",
            description: "Server Action을 사용하여 입력받은 메시지를 콘솔에 출력하는 폼을 만드세요.",
            solution: `// app/page.tsx
export default function Guestbook() {
  async function addMessage(formData: FormData) {
    'use server';
    const message = formData.get('message');
    console.log('New message:', message);
  }

  return (
    <form action={addMessage}>
      <input name="message" placeholder="Leave a message..." />
      <button type="submit">Send</button>
    </form>
  );
}`
        }
    },
    {
        day: 6,
        title: "Styling & Optimization",
        description: "Tailwind CSS, CSS Modules 등 스타일링 방법과 폰트/이미지 최적화를 배웁니다.",
        duration: "2시간",
        topics: [
            {
                title: "Next/Image",
                content: "`<Image>` 컴포넌트를 사용하여 이미지를 자동으로 최적화(Resizing, Lazy loading)합니다.",
                code: `import Image from 'next/image';
import profilePic from './me.png';

export default function Page() {
  return <Image src={profilePic} alt="Me" />;
}`
            },
            {
                title: "Next/Font",
                content: "구글 폰트를 최적화하여 레이아웃 시프트(CLS) 없이 사용합니다.",
                code: `import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return <body className={inter.className}>{children}</body>;
}`
            }
        ],
        challenge: {
            title: "갤러리 페이지",
            description: "`next/image`를 사용하여 외부 이미지(예: Unsplash)를 최적화하여 보여주는 그리드 레이아웃을 만드세요.",
            solution: `import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Image 
        src="https://images.unsplash.com/photo-123" 
        alt="Photo" 
        width={300} 
        height={300} 
      />
    </div>
  );
}
// next.config.js에서 images.domains 설정 필요`
        }
    },
    {
        day: 7,
        title: "배포 (Deployment)",
        description: "Vercel을 통해 Next.js 애플리케이션을 전 세계에 배포하는 과정을 실습합니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "Vercel 배포",
                content: "GitHub 레포지토리를 연결하면 `git push`만으로 자동으로 빌드 및 배포가 진행됩니다.",
                code: `// 별도의 코드 없이 Vercel 대시보드에서 설정`
            },
            {
                title: "환경 변수 설정",
                content: "Vercel 프로젝트 설정에서 Production 환경 변수를 안전하게 관리합니다.",
                code: `process.env.NEXT_PUBLIC_API_URL`
            }
        ],
        challenge: {
            title: "나만의 포트폴리오 배포",
            description: "지금까지 만든 Next.js 프로젝트를 Vercel에 배포하고, 실제 접속 가능한 URL을 공유하세요.",
            solution: `// 1. GitHub에 코드 푸시
// 2. Vercel.com 로그인
// 3. 'Add New Project' -> 레포지토리 선택 -> Deploy`
        }
    }
];

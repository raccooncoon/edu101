import { curriculum as reactCurriculum } from './react-curriculum';
import { jsCurriculum } from './js-curriculum';
import { nodeCurriculum } from './node-curriculum';
import { nestjsCurriculum } from './nestjs-curriculum';
import { nextjsCurriculum } from './nextjs-curriculum';
import { expressCurriculum } from './express-curriculum';

export const courses = [
    {
        id: 'js',
        title: 'JavaScript 101',
        description: '웹 개발의 기본, 자바스크립트 문법과 핵심 개념을 8일 만에 마스터하세요.',
        heroTitle: 'JavaScript 기초 다지기',
        heroDesc: '프로그래밍의 시작, 자바스크립트의 핵심 개념을 탄탄하게 다져보세요.',
        icon: '💛',
        themeColor: 'js', // css class hook
        data: jsCurriculum
    },
    {
        id: 'react',
        title: 'React 101',
        description: '모던 웹 개발의 대세, 리액트의 기초부터 실전 배포까지 15일 완성 코스.',
        heroTitle: 'React 마스터 여정',
        heroDesc: '하루 1-2시간, 체계적인 커리큘럼으로 React의 기초부터 실전까지 완벽하게 마스터하세요.',
        icon: '⚛️',
        themeColor: 'react', // css class hook
        data: reactCurriculum
    },
    {
        id: 'node',
        title: 'Node.js 101',
        description: '자바스크립트로 서버를 만드는 첫걸음. Node.js의 핵심부터 Express 서버 구축까지.',
        heroTitle: 'Node.js 백엔드 입문',
        heroDesc: '프론트엔드를 넘어 백엔드까지, 자바스크립트 하나로 풀스택 개발자에 도전하세요.',
        icon: '🟩',
        themeColor: 'node', // css class hook
        data: nodeCurriculum
    },
    {
        id: 'express',
        title: 'Express 101',
        description: 'Node.js를 위한 빠르고 개방적인 웹 프레임워크. 미들웨어부터 DB 연동까지.',
        heroTitle: 'Express 서버 구축',
        heroDesc: '가장 인기 있는 Node.js 프레임워크로 강력하고 유연한 백엔드 API를 만들어보세요.',
        icon: '🚂',
        themeColor: 'express', // css class hook
        data: expressCurriculum
    },
    {
        id: 'nestjs',
        title: 'NestJS 101',
        description: 'Node.js의 스프링, NestJS로 견고하고 확장 가능한 백엔드 서버를 구축해보세요.',
        heroTitle: 'NestJS 아키텍처 마스터',
        heroDesc: '체계적인 모듈 시스템과 DI 패턴을 익히고, 엔터프라이즈급 백엔드 개발에 도전하세요.',
        icon: '🦁',
        themeColor: 'nestjs', // css class hook
        data: nestjsCurriculum
    },
    {
        id: 'nextjs',
        title: 'Next.js 101',
        description: 'React의 완성형 프레임워크. App Router부터 배포까지 풀스택 개발을 경험하세요.',
        heroTitle: 'Next.js 풀스택 완성',
        heroDesc: '서버 컴포넌트와 최신 기능을 활용하여 빠르고 SEO 친화적인 웹 애플리케이션을 만드세요.',
        icon: '▲',
        themeColor: 'nextjs', // css class hook
        data: nextjsCurriculum
    }
];

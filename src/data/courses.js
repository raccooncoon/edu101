import { curriculum as reactCurriculum } from './react-curriculum';
import { jsCurriculum } from './js-curriculum';
import { nodeCurriculum } from './node-curriculum';

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
    }
];

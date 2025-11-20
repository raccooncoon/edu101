import { curriculum as reactCurriculum } from './react-curriculum';
import { jsCurriculum } from './js-curriculum';

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
    }
];

import { useState, useEffect } from 'react';
import { courses } from '../data/courses';

export function useRoute() {
    const [course, setCourse] = useState(null); // 'react' | 'js' | null
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash; // #/react, #/js, #/react/day/1

            // Try to match #/courseId or #/courseId/day/dayId
            const match = hash.match(/^#\/([^/]+)(?:\/day\/(\d+))?/);

            if (match) {
                const courseId = match[1];
                const dayId = match[2] ? parseInt(match[2]) : null;

                // Check if it's a valid course
                if (courses.some(c => c.id === courseId)) {
                    setCourse(courseId);
                    setSelectedDay(dayId);
                    return;
                }
            }

            setCourse(null);
            setSelectedDay(null);
        };

        // 초기 로드 시 해시 확인
        handleHashChange();

        // 해시 변경 감지
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // 백스페이스 키로 뒤로 가기
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Backspace') {
                const target = e.target;
                const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

                if (!isInput) {
                    if (selectedDay !== null) {
                        e.preventDefault();
                        navigateToCourse(course);
                    } else if (course !== null) {
                        e.preventDefault();
                        navigateToHome();
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [course, selectedDay]);

    const navigateToHome = () => {
        window.location.hash = '';
    };

    const navigateToCourse = (courseId) => {
        window.location.hash = `#/${courseId}`;
    };

    const navigateToDay = (dayId) => {
        window.location.hash = `#/${course}/day/${dayId}`;
    };

    return {
        course,
        selectedDay,
        navigateToHome,
        navigateToCourse,
        navigateToDay
    };
}

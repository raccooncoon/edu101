import { useState } from 'react';

export function useProgress(course) {
    const [completedDays, setCompletedDays] = useState(() => {
        const saved = localStorage.getItem('completedDays_v2');
        if (!saved) return { react: {}, js: {} };

        const parsed = JSON.parse(saved);
        // Migration: Array -> Object check
        if (Array.isArray(parsed.react)) {
            const now = new Date().toLocaleString();
            const migrated = { react: {}, js: {} };
            parsed.react.forEach(id => migrated.react[id] = now);
            parsed.js.forEach(id => migrated.js[id] = now);
            return migrated;
        }
        return parsed;
    });

    const toggleComplete = (dayId) => {
        if (!course) return;

        const currentCourseCompleted = completedDays[course] || {};
        const isAlreadyCompleted = !!currentCourseCompleted[dayId];

        let newCourseCompleted;

        if (isAlreadyCompleted) {
            newCourseCompleted = { ...currentCourseCompleted };
            delete newCourseCompleted[dayId];
        } else {
            const now = new Date().toLocaleString();
            newCourseCompleted = {
                ...currentCourseCompleted,
                [dayId]: now
            };
        }

        const newCompletedDays = {
            ...completedDays,
            [course]: newCourseCompleted
        };

        setCompletedDays(newCompletedDays);
        localStorage.setItem('completedDays_v2', JSON.stringify(newCompletedDays));
    };

    const isCompleted = (dayId) => {
        if (!course) return false;
        return !!completedDays[course]?.[dayId];
    };

    const getCompletedDate = (dayId) => {
        if (!course) return null;
        return completedDays[course]?.[dayId];
    };

    return {
        completedDays,
        toggleComplete,
        isCompleted,
        getCompletedDate
    };
}

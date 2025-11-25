import React, { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { CodeBlock } from './CodeBlock';

export function LessonView({
    courseData,
    lesson,
    nextLesson,
    completedDate,
    onNavigateHome,
    onNavigateCourse,
    onNavigateDay,
    onToggleComplete
}) {
    const [showSolution, setShowSolution] = useState(false);
    const isCompleted = !!completedDate;

    // Reset solution visibility and scroll to top when lesson changes
    useEffect(() => {
        setShowSolution(false);
        window.scrollTo(0, 0);
    }, [lesson.day]);

    const headerContent = (
        <div className="header-content">
            <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
                <div className="logo-icon">{courseData?.icon}</div>
                <span className="gradient-text">{courseData?.title}</span>
            </div>
            <div className="nav-buttons">
                <button onClick={onNavigateCourse} className="btn btn-outline">
                    목록으로
                </button>
                <button onClick={onNavigateHome} className="btn btn-outline btn-home">
                    🏠 홈
                </button>
            </div>
        </div>
    );

    return (
        <Layout headerContent={headerContent}>
            <div className="container lesson-container">
                <button onClick={onNavigateCourse} className="back-btn">
                    ← 목록으로 돌아가기
                </button>

                <div className="lesson-header">
                    <div className="lesson-meta">
                        <span className="tag">Day {lesson.day}</span>
                        <span className="duration">⏱️ {lesson.duration}</span>
                    </div>
                    <h1>{lesson.title}</h1>
                    <p className="lesson-desc">{lesson.description}</p>
                </div>

                <div className="topics">
                    {lesson.topics.map((topic, idx) => (
                        <section key={idx} className="topic-card">
                            <h2>
                                <span className="topic-number">{idx + 1}</span>
                                {topic.title}
                            </h2>
                            <p>{topic.content}</p>
                            {topic.code && <CodeBlock code={topic.code} />}
                        </section>
                    ))}
                </div>

                <section className="challenge-card">
                    <div className="challenge-icon">💡</div>
                    <div style={{ width: '100%' }}>
                        <h2>오늘의 도전 과제</h2>
                        <h3>{lesson.challenge.title}</h3>
                        <p>{lesson.challenge.description}</p>
                        <div className="hint-box">
                            💡 힌트: 이 페이지의 코드를 참고하여 직접 실습해보세요!
                        </div>

                        <div style={{ marginTop: '15px' }}>
                            <button
                                onClick={() => setShowSolution(!showSolution)}
                                className="btn btn-outline"
                                style={{ padding: '5px 10px', fontSize: '0.9rem' }}
                            >
                                {showSolution ? '🙈 정답 숨기기' : '👀 정답 보기'}
                            </button>
                        </div>

                        {showSolution && lesson.challenge.solution && (
                            <div style={{ marginTop: '15px' }}>
                                <CodeBlock code={lesson.challenge.solution} />
                            </div>
                        )}
                    </div>
                </section>

                <div className="action-bar">
                    <button
                        onClick={() => onToggleComplete(lesson.day)}
                        className={`btn ${isCompleted ? 'btn-completed' : 'btn-outline'}`}
                    >
                        {isCompleted ? `✓ 완료됨 (${completedDate})` : '완료 표시하기'}
                    </button>

                    {nextLesson && (
                        <button onClick={() => onNavigateDay(nextLesson.day)} className="btn btn-primary">
                            다음 수업 →
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    );
}

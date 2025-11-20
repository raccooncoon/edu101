import React from 'react';
import { Layout } from './Layout';

export function CourseView({ courseData, curriculum, completedDays, onNavigateDay, onNavigateHome }) {
    const headerContent = (
        <div className="header-content">
            <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
                <div className="logo-icon">{courseData?.icon}</div>
                <span className="gradient-text">{courseData?.title}</span>
            </div>
            <button onClick={onNavigateHome} className="btn btn-outline btn-home">
                🏠 코스 변경
            </button>
        </div>
    );

    return (
        <Layout headerContent={headerContent}>
            <div className="container">
                <div className="hero">
                    <h1><span className="gradient-text">
                        {courseData?.heroTitle}
                    </span></h1>
                    <p className="hero-desc">
                        {courseData?.heroDesc}
                    </p>
                </div>

                <div className="curriculum-grid">
                    {curriculum.map((day) => {
                        const completedDate = completedDays?.[day.day];
                        const isCompleted = !!completedDate;
                        return (
                            <div
                                key={day.day}
                                className={`card ${isCompleted ? 'card-completed' : ''}`}
                                onClick={() => onNavigateDay(day.day)}
                            >
                                {isCompleted && <div className="card-check">✓</div>}

                                <div className="card-header">
                                    <span className="day-badge">Day {day.day}</span>
                                    <span className="duration">⏱️ {day.duration}</span>
                                </div>

                                <h3>{day.title}</h3>
                                <p>{day.description}</p>
                                {isCompleted && <p style={{ fontSize: '0.8rem', color: '#4caf50', marginTop: '5px' }}>{completedDate} 완료</p>}

                                <div className="card-footer">
                                    학습하기 →
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}

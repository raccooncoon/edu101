import React from 'react';
import { Layout } from './Layout';
import { courses } from '../data/courses';

export function HomeView({ onNavigate }) {
    const headerContent = (
        <div className="logo">
            <div className="logo-icon">🚀</div>
            <span className="gradient-text">DevMastery</span>
        </div>
    );

    return (
        <Layout headerContent={headerContent}>
            <div className="container">
                <div className="hero">
                    <h1><span className="gradient-text">학습할 과정을 선택하세요</span></h1>
                    <p className="hero-desc">
                        기초부터 심화까지, 당신의 개발 여정을 함께합니다.
                    </p>
                </div>

                <div className="course-selection">
                    {courses.map(c => (
                        <div
                            key={c.id}
                            className={`course-card ${c.themeColor}-card`}
                            onClick={() => onNavigate(c.id)}
                        >
                            <div className="course-icon">{c.icon}</div>
                            <h2>{c.title}</h2>
                            <p>{c.description}</p>
                            <span className="btn-text">시작하기 →</span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

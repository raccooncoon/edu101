import { useParams, Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { ArrowLeft, CheckCircle, ChevronRight, Code, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Lesson() {
    const { id } = useParams();
    const dayId = parseInt(id);
    const lesson = curriculum.find(d => d.day === dayId);
    const nextLesson = curriculum.find(d => d.day === dayId + 1);

    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('completedDays') || '[]');
        setIsCompleted(saved.includes(dayId));
        window.scrollTo(0, 0);
    }, [dayId]);

    const handleComplete = () => {
        const saved = JSON.parse(localStorage.getItem('completedDays') || '[]');
        if (!saved.includes(dayId)) {
            const newSaved = [...saved, dayId];
            localStorage.setItem('completedDays', JSON.stringify(newSaved));
            setIsCompleted(true);
        }
    };

    if (!lesson) return <div style={{ textAlign: 'center', padding: '5rem 0' }}>Lesson not found</div>;

    return (
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <Link to="/" className="back-link">
                <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> 돌아가기
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="lesson-meta">
                    <span className="tag">
                        Day {lesson.day}
                    </span>
                    <span style={{ color: '#64748b', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={14} /> {lesson.duration}
                    </span>
                </div>

                <h1 style={{ marginBottom: '2rem' }}>{lesson.title}</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {lesson.topics.map((topic, idx) => (
                        <section key={idx} className="topic-card">
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span className="topic-number">
                                    {idx + 1}
                                </span>
                                {topic.title}
                            </h2>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                {topic.content}
                            </p>
                            {topic.code && (
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontSize: '0.75rem', color: '#64748b', fontFamily: 'monospace' }}>
                                        JSX
                                    </div>
                                    <pre style={{ fontSize: '0.875rem', overflowX: 'auto' }}>
                                        <code>{topic.code}</code>
                                    </pre>
                                </div>
                            )}
                        </section>
                    ))}

                    <section className="challenge-card">
                        <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
                            <div style={{ padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa' }}>
                                <Code size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>오늘의 도전 과제</h2>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#c4b5fd', marginBottom: '0.5rem' }}>
                                    {lesson.challenge.title}
                                </h3>
                                <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>{lesson.challenge.description}</p>
                                <div className="hint-box">
                                    💡 힌트: 프로젝트의 <code>src/App.jsx</code>를 수정하여 실습해보세요.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="action-bar">
                    <button
                        onClick={handleComplete}
                        className={`btn ${isCompleted ? '' : 'btn-outline'}`}
                        style={isCompleted ? {
                            backgroundColor: 'rgba(16, 185, 129, 0.2)',
                            color: '#34d399',
                            border: '1px solid rgba(16, 185, 129, 0.5)'
                        } : {}}
                    >
                        <CheckCircle size={18} />
                        {isCompleted ? '완료됨' : '완료 표시하기'}
                    </button>

                    {nextLesson && (
                        <Link to={`/day/${nextLesson.day}`} className="btn btn-primary">
                            다음 수업 <ChevronRight size={18} />
                        </Link>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

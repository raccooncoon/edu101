import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
    const [completedDays, setCompletedDays] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('completedDays');
        if (saved) {
            setCompletedDays(JSON.parse(saved));
        }
    }, []);

    return (
        <div>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '1rem' }}
                >
                    <span className="gradient-text">React 마스터 여정</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}
                >
                    하루 1-2시간, 체계적인 커리큘럼으로 React의 기초부터 실전까지 완벽하게 마스터하세요.
                </motion.p>
            </div>

            <div className="grid grid-cols-2 grid-cols-3">
                {curriculum.map((day, index) => {
                    const isCompleted = completedDays.includes(day.day);
                    return (
                        <motion.div
                            key={day.day}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/day/${day.day}`} style={{ display: 'block', height: '100%' }}>
                                <div className={`card ${isCompleted ? 'card-completed' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    {isCompleted && (
                                        <div className="card-check">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    )}

                                    <div style={{ marginBottom: '1rem' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.05em',
                                            color: '#a78bfa',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            marginBottom: '0.5rem'
                                        }}>
                                            Day {day.day}
                                        </span>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                            {day.title}
                                        </h3>
                                        <div className="flex items-center gap-2" style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                            <Clock size={14} />
                                            <span>{day.duration}</span>
                                        </div>
                                    </div>

                                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem', flex: 1 }}>
                                        {day.description}
                                    </p>

                                    <div className="flex items-center" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a78bfa' }}>
                                        학습하기 <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

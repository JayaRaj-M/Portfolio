import React from 'react';
import GlassCard from './GlassCard';

const Education: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">Education</h2>
                <div className="space-y-4">
                    <GlassCard className="p-6" hover>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                            Kongu Engineering College
                        </h3>
                        <p className="text-gray-300">B.E. Computer Science and Engineering</p>
                        <div className="flex justify-between mt-2 text-sm text-gray-400">
                            <span>2023–2027</span>
                            <span>CGPA: 6.87</span>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6" hover>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                            SVM Higher Secondary School
                        </h3>
                        <p className="text-gray-300">Computer Science</p>
                        <div className="flex justify-between mt-2 text-sm text-gray-400">
                            <span>2022–2023</span>
                            <span>Percentage: 62%</span>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Education;
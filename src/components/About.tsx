import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <GlassCard className="p-6" hover>
                    <p className="text-gray-300 mb-6">
                        To leverage my expertise in full stack development and emerging skills in data analysis
                        to design scalable, efficient, and user-friendly solutions. I strive to integrate strong
                        technical foundations with analytical thinking to deliver impactful applications and
                        actionable insights that enhance user experience and contribute to organizational growth.
                    </p>
                    <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-emerald-400" />
                            <span>madheeshjayara@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-emerald-400" />
                            <span>8248833907</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-emerald-400" />
                            <span>Namakkal, Tamil Nadu</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default About;
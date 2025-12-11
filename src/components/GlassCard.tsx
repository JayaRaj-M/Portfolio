import React, { type ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = '',
    hover = false
}) => {
    return (
        <div
            className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl ${hover ? 'hover:bg-white/15 hover:border-white/30 transition-all duration-300' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default GlassCard;
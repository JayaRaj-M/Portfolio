import React from 'react';
import GlassCard from './GlassCard';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl">
      <GlassCard className="px-6 py-3 rounded-full">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            JM.
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </GlassCard>
    </nav>
  );
};

export default Navigation;
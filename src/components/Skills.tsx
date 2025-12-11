import React from 'react';
import GlassCard from './GlassCard';

const Skills: React.FC = () => {
  const skills = {
    languages: ['C', 'Java', 'Python', 'JavaScript'],
    frontend: ['HTML/CSS', 'React', 'TypeScript', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'MongoDB'],
    tools: ['Git/GitHub', 'VS Code', 'Postman', 'Figma']
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400">A comprehensive toolkit for modern development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard className="p-6" hover>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
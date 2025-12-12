import React from 'react';
import GlassCard from './GlassCard';
import { IconCloudDemo } from './IconCloudDemo';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ['C', 'Java', 'Python']
    },
    {
      title: "Frontend Technologies",
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind', 'TypeScript']
    },
    {
      title: "Backend Technologies",
      skills: ['Node.js', 'PHP', 'MongoDB', 'Express.js']
    },
    {
      title: "Cloud Technologies",
      skills: ['Firebase', 'Google Cloud']
    },
    {
      title: "Applications",
      skills: ['Flutter', 'React Native']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400 mb-8">A comprehensive toolkit for modern development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <IconCloudDemo />
          </div>

          <div className="grid md:grid-cols-2 gap-6 order-1 lg:order-2">
            {skillCategories.map((category, index) => (
              <GlassCard key={index} className="p-6 h-full" hover>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4 whitespace-nowrap overflow-hidden text-ellipsis" title={category.title}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
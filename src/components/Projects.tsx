import React from 'react';
import { ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';

const Projects: React.FC = () => {
  const projects = [
    {
      year: '2025',
      title: 'Data Download Duplicate Alert System',
      description: 'Centralized duplicate download alert system with real-time Chrome extension pop-ups and file hashing.',
      tech: ['Chrome Ext', 'JavaScript', 'Python', 'Flask', 'SHA-256']
    },
    {
      year: '2023-Present',
      title: 'Farmer Empowerment System',
      description: 'User-friendly mobile application for farmers to manage farm details, sell crops, and access agricultural guidance.',
      tech: ['React', 'Express.js', 'MongoDB', 'JWT', 'Leaflet Maps']
    },
    {
      year: '2024-2025',
      title: 'Mentor Connect',
      description: 'Mentorship platform enabling students to schedule sessions with academic/career mentors with video calls.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'REST APIs']
    },
    {
      year: '2024-2025',
      title: 'Geolocation-Based Attendance System',
      description: 'Real-time location-based attendance system with GPS geofencing and spoof detection.',
      tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'GPS APIs']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="p-6" hover>
              <div className="flex items-start justify-between mb-4">
                <ExternalLink className="w-6 h-6 text-emerald-400" />
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
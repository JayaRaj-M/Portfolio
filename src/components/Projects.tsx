import React from 'react';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface Project {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Data Download Duplicate Alert System",
    summary: "Centralized duplicate download alert system with real-time Chrome extension pop-ups and file hashing to prevent redundant downloads.",
    label: "Chrome Extension",
    author: "Jayaraj M",
    published: "2025",
    url: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    tech: ['Chrome Extension', 'JavaScript', 'Python', 'Flask', 'SHA-256']
  },
  {
    id: "project-2",
    title: "Farmer Empowerment System",
    summary: "User-friendly mobile application for farmers to manage farm details, sell crops, and access agricultural guidance with real-time market updates.",
    label: "Mobile App",
    author: "Jayaraj M",
    published: "2023-Present",
    url: "#",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    tech: ['React', 'Express.js', 'MongoDB', 'JWT', 'Leaflet Maps']
  },
  {
    id: "project-3",
    title: "Mentor Connect",
    summary: "Mentorship platform enabling students to schedule sessions with academic/career mentors with integrated video calling and resource sharing.",
    label: "Web Platform",
    author: "Jayaraj M",
    published: "2024-2025",
    url: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'REST APIs']
  },
  {
    id: "project-4",
    title: "Geolocation-Based Attendance System",
    summary: "Real-time location-based attendance system with GPS geofencing and spoof detection to ensure authentic attendance tracking.",
    label: "Mobile System",
    author: "Jayaraj M",
    published: "2024-2025",
    url: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'GPS APIs']
  },
  {
    id: "project-5",
    title: "Television Series Management System",
    summary: "Comprehensive system for managing TV series data, episodes, cast information, and viewer ratings with administrative dashboard.",
    label: "Web Application",
    author: "Jayaraj M",
    published: "2024",
    url: "#",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop",
    tech: ['Flask', 'HTML', 'CSS', 'SQL', 'MySQL']
  },
];

const Projects: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true
    },
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]
  );

  return (
    <section id="projects" className="py-32 bg-black/20">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 lg:px-16">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6">
            Portfolio
          </div>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mb-8 text-gray-300 md:text-base lg:max-w-2xl lg:text-lg">
            Explore my latest work showcasing full-stack development, system design, and innovative solutions across web and mobile platforms.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
        
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="grid grid-rows-[auto_auto_1fr_auto] rounded-xl border border-emerald-500/20 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <a
                      href={project.url}
                      className="block transition-opacity duration-200 hover:opacity-70"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                        {project.label}
                      </span>
                      <span className="text-xs text-gray-400">{project.published}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white hover:text-emerald-400 transition-colors md:text-xl">
                      <a href={project.url}>
                        {project.title}
                      </a>
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-gray-300 text-sm mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs text-emerald-300"
                        >
                          {tech}{i < 2 && i < project.tech.slice(0, 3).length - 1 ? ' • ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center p-6 pt-0">
                    <a
                      href={project.url}
                      className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                    >
                      Read more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
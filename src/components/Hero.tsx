import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Code2 } from 'lucide-react';
import GlassCard from './GlassCard';
import jayarajImage from '../assets/JAYARAJ.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm mb-4">
            Software Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Jayaraj M
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Full Stack Developer passionate about creating scalable, efficient, and user-friendly solutions.
            Integrating strong technical foundations with analytical thinking.
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all font-semibold"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/jaya-raj-67298a326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/JayaRaj-M"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <GlassCard className="p-8 h-96 flex items-center justify-center">
            <GlassCard className="w-72 h-72 rounded-full overflow-hidden border-4 border-emerald-500/20 p-0">
              <img
                src={jayarajImage}
                alt="Jayaraj M"
                className="w-full h-full object-cover"
              />
            </GlassCard>
          </GlassCard>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-4 -right-4"
          >
            <GlassCard className="px-4 py-2">
              <div className="text-sm font-semibold">Experience</div>
              <div className="text-emerald-400">Full Stack</div>
            </GlassCard>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute -bottom-4 -left-4"
          >
            <GlassCard className="px-4 py-2">
              <div className="text-sm font-semibold">Projects</div>
              <div className="text-emerald-400">4+ Delivered</div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
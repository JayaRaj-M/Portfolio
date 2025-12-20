import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Code2 } from 'lucide-react';
import GlassCard from './GlassCard';
import TextType from './ui/Texttype';
import TargetCursor from './ui/TragetCursor';
import jayarajImage from '../assets/JAYARAJ.png';

const Hero: React.FC = () => {
  return (
    <>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      
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
              <TextType 
                text={["Hello, I'm Jayaraj M", "Full Stack Developer", "Building Digital Solutions"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
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
  className="relative flex justify-end"
>
  <div className="relative">
    <GlassCard className="cursor-target relative w-96 h-96 p-8 flex items-center justify-center overflow-hidden">
      {/* Rotating border background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-72 h-72 border-2 border-emerald-400/30 rounded-3xl"></div>
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-64 h-64 border-2 border-cyan-400/20 rounded-3xl"></div>
      </motion.div>
<motion.div 
  className="relative w-64 h-64 z-10 group cursor-pointer"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  <img
    src={jayarajImage}
    alt="Jayaraj M"
    className="w-full h-full object-cover rounded-3xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-emerald-500/50"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</motion.div>

      {/* Animated circles/squares around the image */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-400/60 rounded-full"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400/60 rounded-sm rotate-45"></div>
        <div className="absolute bottom-12 left-12 w-2.5 h-2.5 bg-emerald-300/60 rounded-full"></div>
        <div className="absolute bottom-8 right-12 w-3 h-3 bg-cyan-300/60 rounded-sm"></div>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-16 right-4 w-2 h-2 bg-emerald-500/60 rounded-sm rotate-12"></div>
        <div className="absolute bottom-16 left-8 w-2.5 h-2.5 bg-cyan-500/60 rounded-full"></div>
        <div className="absolute top-1/2 left-4 w-2 h-2 bg-emerald-400/60 rounded-sm"></div>
        <div className="absolute top-1/2 right-4 w-3 h-3 bg-cyan-400/60 rounded-full"></div>
      </motion.div>
    </GlassCard>

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute -top-4 -right-4"
    >
      <GlassCard className="cursor-target px-4 py-2">
        <div className="text-sm font-semibold">Experience</div>
        <div className="text-emerald-400">Full Stack</div>
      </GlassCard>
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2.5 }}
      className="absolute -bottom-4 -left-4"
    >
      <GlassCard className="cursor-target px-4 py-2">
        <div className="text-sm font-semibold">Projects</div>
        <div className="text-emerald-400">4+ Delivered</div>
      </GlassCard>
    </motion.div>
  </div>
</motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
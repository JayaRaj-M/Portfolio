import React from 'react';
import { Vortex } from './components/ui/vortex';
import Navigation from './components/navbar/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/footer/Footer';
const Landing: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Vortex
                backgroundColor="transparent"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                containerClassName="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#000b1e] to-black"
            />

            <Navigation />

            <main className="relative z-10">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
                <Gallery/>
            </main>

            <Footer />
        </div>
    );
};

export default Landing;

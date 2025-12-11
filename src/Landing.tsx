import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Landing: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#000b1e] to-black"></div>

            <Navigation />

            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Landing;

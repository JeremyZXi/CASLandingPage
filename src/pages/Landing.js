import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import Hero from "../components/hero";
const Landing = () => {
    return (
        <div className="min-h-screen bg-[rgb(255,255,255)]">
            <Navbar />
            <Hero />
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Landing;

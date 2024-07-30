import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Card, CardContent } from "../components/ui/card";

const About = () => {
    return (
        <div className="min-h-screen bg-blue-100">
            <Navbar />
            <Banner title="About"/>
            <main className="container mx-auto p-4">
                <Card className="bg-white p-6 shadow-lg mt-8">
                    <CardContent>
                        <p className="text-lg mb-4">
                            Welcome to our Student Project Showcase! This platform is dedicated to highlighting the incredible work of our talented students across various disciplines.
                        </p>
                        {/* Add more content about the showcase */}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default About;

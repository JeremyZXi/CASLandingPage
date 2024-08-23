import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Card, CardContent } from "../components/ui/card";
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About us</title>
                <meta name="description" content="A platform for Keystone students to present their on-going fascinating projects in a wide variety of fields. Join them or start your own!" />
                <meta property="og:title" content="About us" />
                <meta property="og:description" content="A platform for Keystone students to present their on-going fascinating projects in a wide variety of fields. Join them or start your own!" />
            </Helmet>

        <div className="min-h-screen">
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
        </>
    );
};

export default About;

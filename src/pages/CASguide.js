import React from 'react';
import ReactGA from "react-ga4";

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Card, CardContent } from "../components/ui/card";

const CASguide = () => {
    ReactGA.send({ hitType: "pageview", page: "/casguide", title: "CAS Guide" });
    return (
        <div className="min-h-screen">
            <Navbar />
            <Banner title="Guide"/>
            <main className="container mx-auto p-4">
                <Card className="bg-white p-6 shadow-lg mt-8">
                    <CardContent>
                        <p className="text-lg mb-4">
                            Creativity, activity, service (CAS) is one of the three essential elements that every student must complete as part of the Diploma Programme (DP).
                        </p>
                        {/* Add more content about CAS */}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default CASguide;

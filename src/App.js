import React, { useState, useEffect, useRef  } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { GraduationCap, Code, Palette, Microscope, Search, Menu, Layout, Box, Layers, Sliders, X } from 'lucide-react';
import Slider from "react-slick";
import * as echarts from 'echarts';
//Pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import CASguide from "./pages/CASguide";
import Editor from "./pages/Editor";
//Component
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
// Make sure to import the CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Google Font
import '@fontsource/blinker';
import '@fontsource/blinker/400.css';
import '@fontsource/blinker/700.css';







const StatisticsPage = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Initialize ECharts
        const chart = echarts.init(chartRef.current);

        // Mock data
        const data = [
            { domain: 'example.com', visits: 1000 },
            { domain: 'test.com', visits: 1500 },
            { domain: 'demo.com', visits: 800 },
        ];

        // Chart options
        const option = {
            title: {
                text: 'Domain Visit Statistics'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: data.map(item => item.domain)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: data.map(item => item.visits),
                type: 'bar'
            }]
        };

        // Set chart options
        chart.setOption(option);

        // Clean up
        return () => {
            chart.dispose();
        };
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
                <Navbar />
                <Banner title="Stats" />
            <main className="container mx-auto px-4 py-16">
                <Card className="bg-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Visit Count Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};



const App = () => {
    return (
        <Router>
            <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/casguide" element={<CASguide />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/statistics" element={<StatisticsPage />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;
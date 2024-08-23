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
import FAQ from "./pages/FAQ";
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









const App = () => {
    return (
        <Router>
            <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/casguide" element={<CASguide />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/editor" element={<Editor />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;
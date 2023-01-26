import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Preloader from "../src/components/PreLoader";
import Resume from "./components/Resume/ResumeNew";
import Projects from "./components/Projects/Projects";

import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


const PRE_LOADER_TIME = 1200

function App() {
    const [isPreLoading, setIsPreLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsPreLoading(false);
        }, PRE_LOADER_TIME);

        return () => clearTimeout(loadingTimer);
    }, []);

    return (
        <Router>
            <Preloader isPreLoading={isPreLoading} />
            <div className="App" id={isPreLoading ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

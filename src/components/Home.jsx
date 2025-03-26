import React from 'react'
import Navbar from "./Navbar";
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Projects/>
        <Skills/>
        <AboutMe/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home

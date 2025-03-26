import React from 'react'
import Navbar from "./Navbar";
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Projects/>
        <Skills/>
        <AboutMe/>
        <Contact/>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from "./Navbar";
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Projects/>
        <Skills/>
    </div>
  )
}

export default Home

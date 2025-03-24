import React from 'react'
import Navbar from "./Navbar";
import LandingPage from './LandingPage';
import Projects from './Projects';

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Projects/>
    </div>
  )
}

export default Home

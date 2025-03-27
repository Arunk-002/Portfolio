import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-8">
        <LandingPage />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </div>
        <Footer />
    </div>
  );
}

export default Home;

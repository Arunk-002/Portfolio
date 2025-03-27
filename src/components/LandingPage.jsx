import React from "react";
import { FaSquareFull } from "react-icons/fa6";

function LandingPage() {
  return (
    <section id="home" className="main-container w-full max-sm:pt-8">
      <div className="min-h-[99vh] max-sm:flex-col max-sm:justify-center  w-full flex items-center max-sm:gap-y-3.5 sm:justify-between">
        <div className="flex flex-col gap-y-5 max-w-[500px]">
          <div className="text-primary max-sm:text-2xl max-[770px]:text-2xl text-4xl ">
            <span className="text-white">Arun is a </span> web designer{" "}
            <span className="text-white">and</span> front-end developer
          </div>
          <div className="text-text text-sm">
            He crafts responsive websites where technologies meet creativity
          </div>
          <a
            href="#contact"
          >
            <button className="border-1 text-white border-primary px-3 py-2 flex items-center">Contact me !!</button>
          </a>
        </div>
        <div className="relative">
          <div className="absolute top-[30%]">
            <img src="/vector1.png" alt="" />
          </div>
          <img src="/Image.png" className=" relative" alt="" />
          <div className="border-1 text-sm border-white text-primary flex items-center py-2 px-5 gap-x-2 max-w-[430px]">
            <FaSquareFull />
            <span className="text-text">Currently an Intern</span>
          </div>
          <div className="absolute right-4   bottom-[20%]">
            <img src="/Dots.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

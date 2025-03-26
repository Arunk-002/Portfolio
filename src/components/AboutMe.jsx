import React from "react";

function AboutMe() {
  return (
    <section className="main-container text-white p t-6 max-sm:pt-18">
      <div className="grid md:grid-cols-2 max-md:gap-y-4 justify-between ">
        <div className="flex flex-col gap-y-12">
          <div className="flex items-center gap-x-2">
            <p className="text-2xl">
              <span className="text-primary">#</span>about-me
            </p>
            <hr className="h-0 min-w-[70%] max-sm:hidden border-primary "></hr>
          </div>
          <div className="flex flex-col gap-y-4 text-text">
            <p>Hello, i’m Arun! </p>
            <p>     
              I’m a self-taught MERN Stack developer based in Kerala, India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I always strive to learn about the
              newest technologies and frameworks.
            </p>
          </div>
        </div>
        <div><img src="/Image.png" alt="" /></div>
      </div>
    </section>
  );
}

export default AboutMe;

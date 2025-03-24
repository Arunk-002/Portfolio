import React from "react";

function Projects() {
  return (
    <>
      <section id="#works" className="main-container text-white w-full max-sm:pt-6">
        <div className="flex flex-col min-h-[99vh]">
          <div className="flex justify-between itemes w-full">
            <div className="flex w-auto items-center gap-x-3 min-w-[70%] ">
              <p className="text-xl">
                <span className="text-primary ">#</span>Projects
              </p>
              <hr className="h-0 w-full  border-primary "></hr>
            </div>
            <a href="https://github.com/Arunk-002" className="text-sm">view all</a>
          </div>
          <div>work1</div>
          <div>work2</div>
          <div>work3</div>
        </div>
      </section>
    </>
  );
}

export default Projects;

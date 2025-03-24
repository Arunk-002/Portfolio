import React from "react";
import { GoArrowRight } from "react-icons/go";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Projects() {
  const projects = [
    {
      name: "Truckky Live",
      description:
        "Developed a full-stack application using React.js and Node.js, featuring user authentication, OTP verification, email confirmation, Razorpay integration, and a Map Tile view with LeafLet.js. Tailwind CSS was used for styling.",
      techStack: "React, Node.js, OTP, JWT, MongoDB, LeafLet.js, Tailwind CSS",
      liveUrl: "https://truckyy.vercel.app/",
      image: "/truckyy.png",
    },
    {
      name: "Blog App",
      description:
        "Built a blog platform using Node.js, Express, MongoDB, and EJS following the MVC architecture. It includes JWT authentication, real-time likes & notifications with Socket.IO, and a responsive UI with Bootstrap.",
      techStack: "Node.js, Express, MongoDB, EJS, JWT, Socket.IO, Bootstrap",
      liveUrl: "https://blog-app-node-xvji.onrender.com/",
      image: "/bloggy.png",
    },
    {
      name: "Employee Management",
      description:
        "Developed an interactive employee management system supporting CRUD operations with a clean, responsive UI and optimized performance using JavaScript and API integration.",
      techStack: "JavaScript, API, CRUD Operations",
      liveUrl: "https://employe-management-five.vercel.app/",
      image: "/employee.png", 
    },

  ];
  return (
    <>
      <section
        id="#works"
        className="main-container text-white w-full max-sm:pt-6"
      >
        <div className="flex flex-col gap-y-28 min-h-[99vh]">
          <div className="flex justify-between itemes w-full">
            <div className="flex w-auto items-center gap-x-3 min-w-[70%] ">
              <p className="text-2xl">
                <span className="text-primary">#</span>Projects
              </p>
              <hr className="h-0 w-full  border-primary "></hr>
            </div>
            <a
              href="https://github.com/Arunk-002"
              className="decoration-white decoration-1 underline-offset-3 hover:underline flex gap-x-2 items-center text-sm"
            >
              view all
              <GoArrowRight />
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-text flex flex-col max-w-[350px] h-fit"
              >
                <div className="flex flex-col">
                  <img src={project.image} alt={`${project.name} image`} />
                  <p className="text-md px-2 border-y-2 border-text text-text">
                    {project.techStack}
                  </p>
                </div>
                <div className="p-3 flex flex-col gap-y-3">
                  <p className="text-xl">{project.name}</p>
                  <p className="text-text text-md">{project.description}</p>
                  <div className="flex gap-x-5">
                    <a href={project.liveUrl} target="_blank" className="border-1 border-primary px-3 py-2 hover:bg-primary/30 flex items-center">
                      Live{" "}
                      <span className="pl-2 text-xs flex items-center">
                        <SlArrowLeft />~<SlArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

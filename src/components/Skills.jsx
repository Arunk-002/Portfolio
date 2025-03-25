import React from "react";

const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "C"] },
    { category: "Tools", items: ["Postman", "Git", "GitHub", "Render"] },
    { category: "Frameworks/Library", items: ["React","Node.js", "Django", "Express.js", "EJS", "Bootstrap", "Tailwind","Leaflet.js"] },
    { category: "Others", items: ["Socket.io", "JWT", "OpenStreetMap-API", "REST API"] },
    { category: "Databases", items: ["MongoDB", "SQL"] },
];

function Skills() {
  return (
    <section className="main-container text-white">
      <div className="flex flex-col gap-y-3 w-full">
        <div className="flex items-center gap-x-3 w-[70%] ">
          <p className="text-2xl">
            <span className="text-primary">#</span>Skills
          </p>
          <hr className="h-0 w-full border-primary" />
        </div>
        <div className="grid grid-cols-2 ">
            <div className="c">
                <img src="/Dots.png" alt="" />
            </div>
          <div className="flex flex-wrap gap-4 w-full max-sm:justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="border-2 border-text flex flex-col max-w-min  h-fit">
                <div className="flex flex-col">
                  <p className="text-md px-2 border-y-2 border-text">{skill.category}</p>
                </div>
                <div className="p-3 flex flex-col gap-y-3">
                  <p className="text-text text-md">{skill.items.join(' ')} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

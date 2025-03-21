import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { FaSquareFull } from "react-icons/fa6";

function LandingPage() {
  const CustomBtn = styled(Button)(() => ({
    color: "white",
    fontSize: 11,
    padding:"4px 18px",
    border:"1px solid var(--color-primary)",
    borderRadius:"0px",
    textTransform:"none"
  }));
  return (
    <section id="#home">
      <div className="bg-background min-h-[99vh] flex items-center justify-center">
        <div className="flex flex-col gap-y-5 max-w-[500px]">
          <div className="text-primary text-3xl ">
            <span className="text-white">Arun is a </span> web designer{" "}
            <span className="text-white">and</span> front-end developer
          </div>
          <div className="text-text text-sm">
            He crafts responsive websites where technologies meet creativity
          </div>
          <div>
            <CustomBtn>Contact me !!</CustomBtn>
          </div>
        </div>
        <div className="relative">
            <div className="absolute top-[30%]">
                <img src="/vector1.png" alt="" />
            </div>
          <img src="/Image.png" className=" relative" alt="" />
          <div className="border-1 text-sm border-white text-primary flex items-center py-2 px-5 gap-x-2 max-w-[430px]">
          <FaSquareFull /><span className="text-text">Currently an Intern</span>
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

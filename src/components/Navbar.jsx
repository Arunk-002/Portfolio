import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import { styled } from "@mui/material/styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import DecryptedText from "./DecryptedText";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navigations = ["home", "works", "contact", "about-me"];

  const CustomBtn = styled(Button)(({ theme }) => ({
    color: "#C778DD",
    fontSize: 19,
  }));
  return (
    <>
      <nav className="max-sm:relative fixed bg-background w-full z-50">
        <div className="main-container">
          <div className="relative flex h-20 items-center justify-between ">
            <div className="absolute inset-y-0 left-0 max-sm:left-[-20px] flex items-center sm:hidden">
              <CustomBtn
                variant="text"
                color="primary"
                type="button"
                className="relative inline-flex text-xl "
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {menuOpen ? <IoMdClose /> : <IoIosMenu />}
              </CustomBtn>
            </div>
            <div className="flex flex-1 items-center justify-center  sm:items-center sm:justify-between">
              <div className="flex shrink-0 items-center sm:gap-x-3 cursor-pointer">
                <a href="#home" className="text-white  font-semibold">
                  A
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex md:space-x-4 space-x-1 ">
                  {Navigations.map((elem, index) => {
                    return (
                      <a
                        key={index}
                        className="rounded-md px-3 py-2 text-sm font-medium text-text hover:text-white "
                        href={`#${elem}`}
                      >
                        <span className="text-primary">#</span>
                        <DecryptedText
                          text={`${elem}`}
                          animateOn="view"
                          revealDirection="center"
                          speed={100}
                          maxIterations={20}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full sm:hidden bg-background transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
          id="mobile-menu"
        >
          <div className="space-y-3 flex flex-col items-center px-2 pt-2 pb-3">
            {Navigations.map((elem, index) => {
              return (
                <a
                  key={index}
                  href={`#${elem}`}
                  className="text-center cursor-pointer w-[90%] focus:bg-primary-color font-semibold text-sm text-text px-4 md:px-6 py-2 rounded-lg"
                >
                  <span className="text-primary">#</span>
                  {elem}
                </a>
              );
            })}
            <div className="grid pt-3.5 grid-cols-2 gap-x-3 text-text text-2xl">
              <a href="https://github.com/Arunk-002" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-kumar-18bb8129b/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden fixed sm:flex flex-col z-99 justify-center gap-y-2 items-center opacity-80 top-0 left-5">
        <div className="h-[150px] w-0 border-1 border-text "></div>
        <div className="flex flex-col gap-y-3 text-text text-xl ">
          <a
            href="https://github.com/Arunk-002"
            className="hover:text-white "
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-kumar-18bb8129b/"
            className="hover:text-white"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
}

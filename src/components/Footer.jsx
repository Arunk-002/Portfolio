import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <section className=" mt-8">
      <div className="border-t-2 border-text flex flex-col gap-y-4 py-6  items-center">
        <div className="flex gap-x-3 text-text text-xl sm:text-2xl">
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
        <div>
          <p className="text-white max-sm:text-xs text-sm">©2025 Arunk-002. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

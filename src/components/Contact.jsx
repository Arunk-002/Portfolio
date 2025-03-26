import React from "react";
import { IoMail } from "react-icons/io5";


function Contact() {
  return (
    <section className="main-container max-sm:pt-18 pt-6">
      <div className="grid max-md:gap-y-7 sm:grid-cols-2 text-white">
        <div className="flex flex-col gap-y-12">    
          <div className="flex items-center gap-x-3 w-[70%] ">
            <p className="text-2xl">
              <span className="text-primary">#</span>contact
            </p>
            <hr className="h-0 w-full max-sm:hidden border-primary" />
          </div>
          <p className="text-text">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </div>
        <div className="flex justify-center  md:items-end md:justify-end text-text">
            <div className="border-2 border-text flex flex-col justify-around items-center gap-y-3 p-3 ">
                <p>message me here</p>
                <a href="mailto:arunkumar.official.101@gmail.com" className="flex text-lg items-center gap-x-2 hover:text-white"><IoMail />Email </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

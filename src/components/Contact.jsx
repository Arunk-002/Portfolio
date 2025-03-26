import React from "react";

function Contact() {
  return (
    <section className="main-container max-sm:pt-18 pt-6">
      <div className="grid sm:grid-cols-2 text-white">
        <div className="flex flex-col gap-y-12">    
          <div className="flex items-center gap-x-3 w-[70%] ">
            <p className="text-2xl">
              <span className="text-primary">#</span>contact
            </p>
            <hr className="h-0 w-full max-sm:hidden border-primary" />
          </div>
          <p className="text-text">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </div>
        <div className="text-text">

        </div>
      </div>
    </section>
  );
}

export default Contact;

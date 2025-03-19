import React from "react";

function Navbar() {
  const navigation = ["home", "works", "about-me", "contacts"];
  return (
    <>
      <div className=" bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-white">Logo</div>
        <div>
          <ul className="flex justify-between items-center max-sm:hidden">
            {navigation.map((elem, index) => {
              return (
                <li className="text-text px-2" key={index}>
                  <span className="text-primary">#</span>
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center ">
            
          <div className="sm:hidden flex items-center">
            <ul className="flex justify-between items-center ">
              {navigation.map((elem, index) => {
                return (
                  <li className="text-text px-2" key={index}>
                    <span className="text-primary">#</span>
                    {elem}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

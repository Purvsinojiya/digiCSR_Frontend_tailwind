import React from "react";

import logo from "./image_company-componant/image 7.png";
import person from "./image_company-componant/Profile.png";

function Navbar() {
  return (
    <div className="h-screen w-screen flex relative justify-center align-center z-10">
      
      <div className="w-screen h-14 bg-white drop-shadow-sm flex justify-between align-center absolute">
        <img className="mt-0.5 w-44 h-13" src={logo} alt="Logo" />
        <div className="flex ustify-between align-center not-italic gap-1.5 ">
          <div className="flex justify-between align-center not-italic gap-1.5">
            <li className="flex justify-between align-center w-10 h-2.5 font-sans not-italic font-light text-lg text-black m-2.5">
              Home
            </li>
            <li className="flex justify-between align-center w-10 h-2.5 font-sans not-italic font-light text-lg text-black m-2.5 pl-3">
              Rfp
            </li>
            <li className="flex justify-between align-center w-10 h-2.5 font-sans not-italic font-light text-lg text-black m-2.5 ">
              Review
            </li>
            <img
              className="w-10 h-10 mr-4 ml-4 mt-1"
              src={person}
              alt="Profile"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;

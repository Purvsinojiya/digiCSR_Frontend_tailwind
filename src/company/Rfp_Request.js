import React from "react";
import background from "./image_company-componant/bg.png";
import logo from "./image_company-componant/image 7.png";
import person from "./image_company-componant/Profile.png";
import download from "./image_company-componant/download.png";
import ankh from "./image_company-componant/ankh.png"

function Rfp_Request() {
  return (
    <div className="h-screen w-screen flex relative justify-center align-center">
      <img
        className="h-screen w-full flex absolute"
        src={background}
        alt="Background"
      />
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
      <div className=" flex flex-col absolute h-5/6 w-5/6 mt-16 ">
        <div className="h-16 w-80 ">
          <div className=" flex absolute  h-11 w-72 mt-2 text-lg text-medium font-['Poppins'] justify-center items-center bg-[#A8E0FF] rounded-xl ml-8">
            List of Request for Proposals
          </div>
        </div>
        <div className="space-y-2.5 h-fit" id="set-height">
        <div className="w-80 h-40 ml-3 rounded-xl flex" id="mainbg">
         <div className="h-38 w-40 space-y-5 pt-3 pl-2">
            <h3 className="flex justify-start">Proposal Name: </h3>
            <h3 className="flex justify-start">Development Sector: </h3>
            <h3 className="flex justify-start">States:</h3>
         </div>
         <div className="h-38 w-40">
         <div className="h-38 w-40 space-y-5 text-sm pt-3 pl-2">
            <h6 className="flex justify-start">Name here </h6>
            <h5 className="flex justify-start">Sector1, Sector 2,  </h5>
            <h5 className="flex justify-start">States:</h5>
         </div>
         <div className="h-10 flex float-right space-x-3 justify-center items-center">
         <img src={ankh} className="h-6 w-6"></img>
         <img src={download} className="h-6 w-6"></img>
         </div>
         </div>
        </div>
        <div className="w-80 h-40 ml-3 rounded-xl flex" id="mainbg">
         <div className="h-38 w-40 space-y-5 pt-3 pl-2">
            <h3 className="flex justify-start">Proposal Name: </h3>
            <h3 className="flex justify-start">Development Sector: </h3>
            <h3 className="flex justify-start">States:</h3>
         </div>
         <div className="h-38 w-40 ">
         <div className="h-38 w-40   space-y-5 text-sm pt-3 pl-2">
            <h6 className="flex justify-start">Name here </h6>
            <h5 className="flex justify-start">Sector1, Sector 2,  </h5>
            <h5 className="flex justify-start">States:</h5>
         </div>
         <div className=" h-10 flex float-right space-x-3 justify-center items-center">
         <img src={ankh} className="h-6 w-6"></img>
         <img src={download} className="h-6 w-6"></img>
         </div>
         </div>
        </div>
        <div className="w-80 h-40 ml-3 rounded-xl flex" id="mainbg">
         <div className="h-38 w-40 space-y-5 pt-3 pl-2">
            <h3 className="flex justify-start">Proposal Name: </h3>
            <h3 className="flex justify-start">Development Sector: </h3>
            <h3 className="flex justify-start">States:</h3>
         </div>
         <div className="h-38 w-40">
         <div className="h-38 w-40  space-y-5 text-sm pt-3 pl-2">
            <h6 className="flex justify-start">Name here </h6>
            <h5 className="flex justify-start">Sector1, Sector 2,  </h5>
            <h5 className="flex justify-start">States:</h5>
         </div>
         <div className="h-10 flex float-right space-x-3 justify-center items-center">
         <img src={ankh} className="h-6 w-6"></img>
         <img src={download} className="h-6 w-6"></img>
         </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Rfp_Request;

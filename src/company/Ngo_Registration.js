import React from "react";
import background from "./image_company-componant/background2.png";
import logo from "./image_company-componant/image 7.png";
import person from "./image_company-componant/Profile.png";
import "../App.css";

function Ngo_Registration() {
  return (
    <div>
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
      <div className=" h-4/5 w-4/5 :w-3/4 xl:w-3/4  flex absolute mt-20 flex-col overflow-hidden rounded-sm ">
        <div className="h-28 w-full  flex justify-center items-center bg-[#7ED1FF] lg:text-4xl md:text-4xl text-2xl font-[Poppins] not-italic font-normal drop-shadow-[0px 4px 10px rgba(0, 0, 0, 0.25)] ">
          Ngo Registration Form
        </div>
        <div className="p-3 h-fit min-h-0 w-full  bg-white  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 backdrop-blur-40  scrollbar-track-gray-100 ld:text-base">
          <form className="space-y-3">
            <div className="grid grid-cols-1 gap-4">
              <label className="flex justify-start space-y-2.5">
                Ngo information
              </label>
              <div className="relative">
                <input
                  id="amountInput"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                  type="text"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="amountInput"
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                >
                  Ngo Name
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <input
                  id="amountInput"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                  type="text"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="amountInput"
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                >
                  Ngo Summary
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 ">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <input
                  id="sectorInput"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                  type="email"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="sectorInput"
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                >
                  CSR Budget of this Year
                </label>
              </div>
            </div>

            
            

            <div className="relative">
              <div className="grid grid-cols-1">
              <select
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                name="cars"
                id="cars"
              >
                <option
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                  value=""
                  disabled
                  selected
                >
                  Select a sector
                </option>
                <option value="volvo">All sector</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <input
                  id="sectorInput"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                  type="email"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="sectorInput"
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                >
                  Area of Operation
                </label>
              </div>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="flex justify-start">
              Board Member Of NGO :-
              </label>
              <div className="grid md:grid-cols-1 gap-4">
              <div className="relative">
                <input
                  id="rfpTitleInput"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                  type="text"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="rfpTitleInput"
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <div className="grid grid-cols-3 ld:flex md:justify-center">
                
                  <div className="flex gap-2 ml-3 sm:ml-10 md:ml-20 ld:ml-20">
                    <input type="radio"></input>
                    <p>male</p>
                  </div>
                  <div className="flex gap-1 ml-3 sm:ml-10 md:ml-20 ld:ml-20">
                    <input type="radio"></input>
                    <p>fimale</p>
                  </div>
                  <div className="flex gap-1 ml-3 sm:ml-10 md:ml-20 ld:ml-20">
                    <input type="radio"></input>
                    <p>Other</p>
                   
                
                  </div>
                </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    id="rfpTitleInput"
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="rfpTitleInput"
                    className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                  >
                    DIN Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="rfpTitleInput"
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="rfpTitleInput"
                    className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="rfpTitleInput"
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="rfpTitleInput"
                    className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                  >
                    Phone Number
                  </label>
                </div>
              </div>
            </div>

           
            <button className="rounded bg-[#7ED1FF] w-full p-1.5 font-normal text-white  color-[#FFFFFF] text-center text-2xl">
              save
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ngo_Registration

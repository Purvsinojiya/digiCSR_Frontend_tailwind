import React from "react";
import background from "./image_company-componant/bg.png";
import logo from "./image_company-componant/image 7.png";
import person from "./image_company-componant/Profile.png";
function Login() {
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
      <div
        className=" h-3/5 w-80 sm:h-3/5 sm:w-80 md:w-80 md:h-3/5 xl:h-3/5 lg:h-3/5 lg:w-80 xl:w-96 2xl:w-96 flex absolute mt-32 flex-col overflow-hidden rounded-sm xl:mt-40 2xl:mt-40 "
        id="mainbg"
      >
        <div className="h-14 w-full  flex">
          <div className="w-full h-full" >
            <div
              className="w-full h-full flex justify-center items-center"
              id="background-inner2"
            >
              LOG IN
            </div>
          </div>
          <div className=" w-full h-full" id="background">
          <div
            className="w-full h-full flex justify-center items-center"
            id="background-inner"
          >
            SING UP
          </div>
          </div>
        </div>
        <div className="h-80 ">
          <div className=" h-64 p-5  mt-5">
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
            <div className="relative mt-5 ">
              <div className="grid grid-cols-1 ">
                <input
                  id="emailInput"
                  className="border border-gray-400 rounded p-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
                  type="text"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="emailInput"
                  className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-300 origin-left transform scale-100 pointer-events-none"
                >
                 Email
                </label>
              </div>
            </div>
            <div className="mt-4">
            <label className="flex justify-start mt-2">OTP</label>
            <div class="grid grid-cols-6 gap-5 ml-1 mt-2">
            <input type="text" class="w-6 h-6 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxlength="1" />
  <input type="text" class="w-6 h-6 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxlength="1" />
  <input type="text" class="w-6 h-6 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxlength="1" />
  <input type="text" class="w-6 h-6 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxlength="1" />
  <input type="text" class="w-6 h-6 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxlength="1" />
  <input type="text" class="w-6 h-6 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxlength="1" />
</div>

          </div>
          <div className="flex flex-col justify-center items-center mt-4 xl:mt-8 2xl:mt-8  ">
          <button class="bg-[#23AFF0] rounded-full w-44 text-white text-center h-9 text-md font-normal flex items-center justify-center mt-2" id="save">SIGN UP</button>
         
</div>
<div id="buttone" className="xl:mt-2 2xl:mt-2">
 <button class="bg-[#23AFF0] w-24 text-white text-center h-7 text-md font-normal flex items-center justify-center mt-2" id="sentagain">Sent again</button>
 </div>
 </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

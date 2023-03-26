import React from "react";

import hero from "../assets/Hero.svg";

const Hero = () => {
  return (
    <div className="mt-5">
      <img src={hero} alt="" className="bg-purple-200 object-cover w-[100%] h-[40%] sm:h-auto absolute top-0 -z-10" />
      <div className="w-full h-auto sm:mt-28 p-5 space-y-10 sm:space-y-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">Our Biggest Sales Yet...</h1>
        <p className="text-lg sm:text-2xl font-semibold text-gray-800 max-w-4xl m-auto">
          We are offering massive discounts on all our health plans during our
          Black Friday and Cyber Monday sales.
        </p>
        <button className="px-4 py-3 bg-blue-500 font-semibold text-white hover:text-black rounded-lg cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

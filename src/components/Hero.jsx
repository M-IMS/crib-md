import React from "react";

import hero from "../assets/Hero.svg";

const Hero = () => {
  return (
    <div className="relative border-2 border-red-400">
      <img src={hero} alt="" className="absolute" />
      <div className="relative w-full h-auto sm:mt-40 p-5 space-y-8 text-center ">
        <h1 className="text-4xl font-bold">Our Biggest Sales Yet...</h1>
        <p className="text-lg font-semibold text-gray-800">
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

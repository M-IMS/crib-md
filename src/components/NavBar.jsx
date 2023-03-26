import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1440px] min-h-[50px] m-auto px-5 py-1 flex justify-between items-center z-10">
      <h1 className="sm:hidden text-3xl font-bold text-blue-500 cursor-pointer z-10">
        LOGO
      </h1>
      <div className="hidden w-[1037px] h-[84px] bg-white m-auto mt-4 p-5 sm:flex justify-between items-center text-center rounded-3xl border-2">
      <h1 className="text-3xl font-bold text-blue-500 cursor-pointer z-10">
        LOGO2-D
      </h1>
        <ul className="flex justify-between items-center gap-5 text-xl text-gray-500 font-semibold">
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Home
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            About Us
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Plans
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            FAQ
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Blog
          </li>
        </ul>
        <div className="text-xl text-gray-500 font-semibold space-x-5 ">
          <button className="p-2 hover:bg-blue-500 hover:text-white rounded-xl cursor-pointer">
            Login
          </button>
          <button className="p-2 hover:bg-blue-500 hover:text-white rounded-xl cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div
        onClick={handleNav}
        className="md:hidden cursor-pointer hover:bg-blue-100 rounded left-100 top-0 z-10"
      >
        {!nav ? <HiMenuAlt3 size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute sm:hidden h-screen w-full flex flex-col items-center text-accent left-0 top-0 px-4 py-7 gap-10 overflow-y-hidden ease-in duration-300 bg-blue-100/95"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="flex flex-col items-center gap-5 pt-16 text-xl text-gray-500 font-semibold">
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Home
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            About Us
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Plans
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            FAQ
          </li>
          <li className="p-2 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Blog
          </li>
        </ul>
        <div className="text-xl text-gray-500 font-semibold space-x-5 ">
          <button className="p-2 hover:bg-blue-500 hover:text-white rounded-xl cursor-pointer">
            Login
          </button>
          <button className="p-2 hover:bg-blue-500 hover:text-white rounded-xl cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

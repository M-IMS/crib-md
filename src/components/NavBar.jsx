import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="hidden w-[1037px] h-[84px] mx-auto mt-2 p-5 sm:flex justify-between items-center text-center rounded-3xl border-2">
        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          LOGO
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
      <div onClick={handleNav} className="sm:hidden z-10">
        <h1 className="m-2 cursor-pointer text-blue-500 text-xl font-bold">X</h1>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "sm:hidden w-full h-screen p-5 flex flex-col gap-10 bg-blue-100/50 items-center text-center ease-in duration-300"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          LOGO
        </h1>
        <ul className="flex flex-col items-center gap-5 text-xl text-gray-500 font-semibold">
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

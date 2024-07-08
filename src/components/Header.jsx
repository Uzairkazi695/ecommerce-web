import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 bg-[#FDF8EB]  flex justify-between fixed shadow-md">
        <div className="border-5 border-black flex">
          <img src={logo} alt="" className="absolute h-full ml-10 mr-[5rem] " />
        </div>
        <div className="text-[#5d5048] text-lg font-medium flex mr-28">
          <ul className="hidden md:flex gap-7 items-center ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <div className="text-3xl relative flex items-center justify-center mt-5 ml-3 h-10 sm:-mr-11">
            <a href="#">
              <IoBagHandleSharp />
            </a>
            <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              0
            </div>
          </div>
          <div className="flex justify-center items-center ml-16 mt-1 text-2xl md:hidden"><CiMenuBurger /></div>
        </div>
      </header>
    </>
  );
}

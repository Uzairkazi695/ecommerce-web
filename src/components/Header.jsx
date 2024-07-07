import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 bg-[#FDF8EB]  flex justify-between sticky shadow-md">
        <div className="border-5 border-black flex">
          <img src={logo} alt="" className="absolute h-full ml-10 mr-[5rem] " />
        </div>
        <div className="text-[#5d5048] text-lg font-medium flex mr-28">
          <ul className="flex gap-7 items-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <div className="text-3xl relative"><a href="#"><IoBagHandleSharp/></a><div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">0</div></div>
          </ul>
        </div>
      </header>
    </>
  );
}

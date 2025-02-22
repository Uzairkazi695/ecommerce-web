import React, { useState } from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    state: { cart },
  } = cartState();

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.qty, 0);
  return (
    <>
      <header className="w-full h-20 bg-[#FDF8EB]  flex justify-between sticky top-0 shadow-md z-20">
        <Link to={""} className="flex">
          <img src={logo} alt="" className="absolute h-full ml-10 mr-[5rem] " />
        </Link>
        <div className="text-[#5d5048] text-lg font-medium flex md:mr-28">
          <ul className="hidden md:flex gap-7 items-center ">
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={"products"}>Products</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
          </ul>
          <div className="text-3xl relative flex items-center justify-center mt-5 ml-3 h-10 sm:-mr-11">
            <Link to={"cart"}>
              <IoBagHandleSharp />
            </Link>
            <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {totalQuantity}
            </div>
          </div>
          <div
            className="flex justify-center items-center mx-5 mt-1 text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CiMenuBurger />
          </div>
        </div>
      </header>
     {isOpen && (
      <div className="bg-[#FDF8EB] w-full flex flex-col items-center  pt-5 text-lg text-[#302620]  -mb-20 md:hidden" onClick={()=> setIsOpen(!isOpen)}>
        <ul className="flex flex-col gap-2">
          <li className="hover:text-[#5d5048]">
            <Link to={""}>Home</Link>
          </li>
          <li className="hover:text-[#5d5048]">
            <Link to={"products"}>Products</Link>
          </li>
          <li className="hover:text-[#5d5048]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#5d5048]">
            <a href="#service">Services</a>
          </li>
        </ul>
      </div>
     )}
    </>
  );
}

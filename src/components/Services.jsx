import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineReplay, MdSupportAgent } from "react-icons/md";

export default function Services() {
  return (
    <>
        <h2 className="text-4xl mt-7  ml-4 font-semibold text-[#3c2b20] text-center bg-[#FDF8EB]">
        OUR SERVICES
      </h2>
      <div className="flex justify-center items-center m-5 flex-wrap bg-[#FDF8EB]">
        <div className="w-48 m-5">
          <div className="text-orange-400 text-8xl">
            <FaTruckFast />
          </div>
          <div className="text-xl font-semibold text-[#3c2b20]">Fast Delivery</div>
          <div className="text-justify">
            Track your order every step of the way with our real-time tracking
            system.
          </div>
        </div>
        <div className="w-56 m-5">
          <div className="text-orange-400 text-8xl">
            <MdOutlineReplay />
          </div>
          <div className="text-xl font-semibold text-[#3c2b20]">Hassle-Free Returns</div>
          <div className="text-justify">
            Not satisfied? Our easy return policy ensures you can send it back
            with minimal effort.
          </div>
        </div>
        <div className="w-48 m-5">
          <div className="text-orange-400 text-8xl">
            <MdSupportAgent />
          </div>
          <div className="text-xl font-semibold text-[#3c2b20]">Customer Support </div>
          <div className="text-justify"> 
            Our dedicated support team is here to assist you every step of the
            way.
          </div>
        </div>
      </div>
    </>
  );
}

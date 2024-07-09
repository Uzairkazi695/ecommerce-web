import React from "react";
import person from "../assets/about.png";

export default function About() {
  return (
    <>
      <h2 className="text-4xl mt-7  ml-4 font-semibold text-[#3c2b20] text-center bg-[#FDF8EB]" id="about">
        ABOUT US
      </h2>
      <div className="bg-[#FDF8EB] w-full md:flex ">
        <div className="w-full flex justify-center items-center lg:w-1/2">
          <img src={person} alt="" />
        </div>
        <div className="w-full flex flex-col justify-center ml-3 lg:w-1/3 text-center">
          <h3 className="text-2xl text-[#3c2b20]
          font-semibold mt-5">Welcome to Trend Mart!</h3>
          <p className="text-left my-2 text-lg">
            At Trend Mart, we bring you the latest in fashion and beyond. Our
            mission is to provide high-quality, trendy products at affordable
            prices. From stylish clothing and accessories to everyday
            essentials, we have something for everyone.
          </p>
          <div className="text-xl text-[#3c2b20]
          font-medium mb-2">Why Shop with Us?</div>
          <ul className="text-left mb-2 text-lg">
            <li>
              <strong className="text-[#3c2b20]">Quality Products:</strong> Carefully selected for their durability and
              style.
            </li>
            <li><strong className="text-[#3c2b20]">Affordable Prices:</strong> Fashion should be accessible to all.</li>
            <li><strong className="text-[#3c2b20]">Customer Satisfaction:</strong> Your happiness is our priority.</li>
          </ul>
          <p className="text-lg text-left">
            Discover a seamless shopping experience with Trend Mart. Stay
            trendy, stay stylish, and happy shopping!
          </p>
        </div>
      </div>
    </>
  );
}

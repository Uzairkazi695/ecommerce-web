import React from "react";

export default function ProductDetailShimmer() {
  return (
    <>
      <div className="animate-pulse">
        <div className="flex flex-col items-center md:flex-row w-full">
          <div className="w-64 flex justify-center ml-10 h-96 mt-10 bg-gray-300 md:w-96"></div>
          <div className="mt-10 ml-20 md:w-1/2 bg-gray-100 ">
            <div className="text-2xl h-6 font-semibold bg-gray-300"></div>
            <div className="text-lg mt-2 h-5 bg-gray-300"></div>
            <div className="text-lg text-[#3c2b20] mt-2 bg-gray-300 h-5 w-14"></div>
            <div className="text-justify mt-2 bg-gray-300 h-20"></div>
            <button className="mt-2 bg-gray-300 text-white w-32 rounded-full h-10">
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

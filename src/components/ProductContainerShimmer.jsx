import React from "react";

export default function ProductContainerShimmer() {
  return (
    <>
      {Array.from({ length: 10 }).map((el, i) => {
        return (
          <div
          key={i}
            className="mt-10 bg-[#FDF8EB] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          >
            <div className=" h-1/2  flex justify-center items-center mt-7">
            </div>
            <div className="ml-3 mt-1">
              <div></div>
              <div className="text-xl font-semibold truncate"></div>
              <div className="mt-1"></div>
              <div>
                <button className="bg-[#3c2b20] text-white rounded-full w-28 h-9 my-2">
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

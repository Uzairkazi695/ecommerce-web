import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, useStateContext } from "../context/Context";

export default function ProductCard({ img, title, price, category, id, data }) {
  const {onAdd, } = useStateContext();
  return (
    <>
      <div className="border-2 border-gray-300 m-3 cursor-pointer h-96 flex flex-col justify-around shadow-md">
        <Link
          to={`/products/${id}`}
          state={data}
          
        >
          <div className=" h-1/2  flex justify-center items-center mt-7">
            <img
              src={img}
              className=" max-h-40 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="ml-3 mt-1">
            <div className="mt-8">{category}</div>
            <div className="text-xl font-semibold truncate">{title}</div>
            <div className="mt-1">${price}</div>
          </div>
        </Link>
        <div className="ml-2">
          <button
            className="bg-[#3c2b20] text-white rounded-full w-28 h-9 my-2"
            onClick={()=>onAdd(product, quantity)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

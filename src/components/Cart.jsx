import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import hero from "../assets/hero.png";
import { Context, useStateContext } from "../context/Context";
import { useContext } from "react";

export default function Cart() {
    const {cartQty,incrQty, decrQty} = useStateContext();
  return (
    <>
      <div className="h-[35rem] overflow-y-auto">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full flex justify-center">
            <h2 className="mt-5 text-3xl font-semibold font-serif text-[#5d5048]">
              Your Cart
            </h2>
          </div>
        </div>
        <button
          onClick={() => history.back()}
          className="flex justify-center items-center gap-2 ml-5 mt-5 shadow-md w-24 h-10"
        >
          <span>
            <FaArrowLeft />
          </span>
          Back
        </button>
        <div className="mt-5 ml-3 flex flex-col items-center sm:flex-row">
          <div>
            <img src={hero} alt="" className="max-w-48 h-auto" />
          </div>
          <div className="ml-5 mt-5">
            <h2 className="uppercase text-semibold">Men's casual Slim fit</h2>
            <div className="flex items-center mt-5 gap-5">
              <button onClick={decrQty}><FaMinus /></button>
              <div>{cartQty}</div>
              <button onClick={incrQty}><FaPlus /></button>
              <div className="text-gray-400">$15.99</div>
              <div>$47.99</div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col items-center mt-3">
        <div className="flex items-center gap-4 text-lg">
          <div className="font-semibold">Total: $47.99</div>
          <div>
            <RiDeleteBin6Line />
          </div>
        </div>
        <div className="bg-[#5d5048] text-white w-32 h-10 rounded-full flex justify-center items-center">Checkout</div>
      </div>
    </>
  );
}

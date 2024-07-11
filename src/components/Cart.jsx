import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cartState } from "../context/Context";
import { useEffect, useState } from "react";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = cartState();

  const incrementQty = (id, qty) => {
    dispatch({
      type: "Change_cart_qty",
      payload: { id, qty: qty + 1 },
    });
  };

  const decrementQty = (id, qty) => {
    dispatch({
      type: "Change_cart_qty",
      payload: { id, qty: qty - 1 },
    });
  };

  const clearCart = () => {
    dispatch({ type: "Clear_cart" });
  };
  const [total, setTotal] = useState();

  useEffect(() => {
    if (cart && cart.length > 0) {
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    } else {
      setTotal(0);
    }
  }, [cart]);
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
        {cart && cart.length > 0 ? (
          cart.map((prod) => (
            <>
              <div
                key={prod.id}
                className="mt-5 ml-3 flex flex-col items-center sm:flex-row"
              >
                <div>
                  <img src={prod.img} alt="" className="max-w-48 h-auto" />
                </div>
                <div className="ml-5 mt-5">
                  <h2 className="uppercase text-semibold">{prod.title}</h2>
                  <div className="flex items-center mt-5 gap-5">
                    <button onClick={() => decrementQty(prod.id, prod.qty)}>
                      <FaMinus />
                    </button>
                    <div>{prod.qty}</div>
                    <button onClick={() => incrementQty(prod.id, prod.qty)}>
                      <FaPlus />
                    </button>
                    <div className="text-gray-400">${prod.price}</div>
                    <div>${Math.round((prod.price * prod.qty) * 100) / 100}</div>
                    <div
                      onClick={() => {
                        dispatch({
                          type: "Remove_from_cart",
                          payload: prod,
                        });
                      }}
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
              </div>
              <hr key={crypto.randomUUID()}/>
            </>
          ))
        ) : (
          <div className="mt-5 ml-3 text-black text-2xl flex justify-center items-center">
            Your cart is empty.
          </div>
        )}
      </div>
      <div className="flex flex-col items-center mt-3">
        <div className="flex items-center gap-4 text-lg">
          <div className="font-semibold">
            Total: ${Math.round(total * 100) / 100}
          </div>
          {cart && cart.length > 0 && (
            <div onClick={clearCart}>
              <RiDeleteBin6Line />
            </div>
          )}
        </div>
        <div className="bg-[#5d5048] text-white w-32 h-10 rounded-full flex justify-center items-center">
          Checkout
        </div>
      </div>
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import ProductDetailShimmer from "./ProductDetailShimmer";
import { cartState } from "../context/Context";


export default function ProductDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const {state: {cart}, dispatch} = cartState()
  const { state } = useLocation();

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

  useEffect(() => {
    if (state) {
      setProductData({
        key: state.id,
        id: state.id,
        img: state.image,
        title: state.title,
        category: state.category,
        price: state.price,
        description: state.description,
      });
      return;
    }
    
    const fetchedData = fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setProductData({
          key: data.id,
          id: data.id,
          img: data.image,
          title: data.title,
          category: data.category,
          price: data.price,
          description: data.description,
        })
      );
  }, [id]);

  return (
    <main>
      {productData === null ? (
        <ProductDetailShimmer />
      ) : (
        <>
        <button
          onClick={() => history.back()}
          className="flex justify-center items-center gap-2 ml-5 mt-5 shadow-md w-24 h-10"
        >
          <span>
            <FaArrowLeft />
          </span>
          Back
        </button>
        <div className="flex flex-col items-center md:flex-row w-full">
        
        <div className="w-64 flex justify-center ml-10 max-h-96 mt-10 md:w-96">
          <img src={productData.img} className="w-full" />
        </div>
        <div className="mt-10 ml-20 md:w-1/2 ">
          <div className="text-2xl font-semibold">{productData.title}</div>
          <div className="text-lg mt-2">{productData.category}</div>
          <div className="text-lg text-[#3c2b20] mt-2">
            ${productData.price}
          </div>
          <div className="text-justify mt-2">{productData.description}</div>
          <div className="flex items-center mt-5 gap-5">
            {/* <button onClick={() => decrementQty(productData.id, productData.qty)}>
              <FaMinus />
            </button>
            <div>{productData.qty}</div>
            <button onClick={() => incrementQty(productData.id, productData.qty)}>
              <FaPlus />
            </button> */}
          </div>
          {
        cart.some(p=> p.id === productData.id) ? (
          <button onClick={()=> {
          return dispatch({
            type: 'Remove_from_cart',
            payload: productData
          })
        }} className="bg-[#3c2b20] text-white rounded-full w-40 h-9 my-2">
          Remove from Cart
        </button>
        ) : (<button onClick={()=> {
          return dispatch({
            type: 'Add_to_cart',
            payload: productData
          })
        }} className="bg-[#3c2b20] text-white rounded-full w-28 h-9 my-2">
          Add To Cart
        </button>)
      }
        </div>
      </div>
        </>
        
      )}
    </main>
  );
}

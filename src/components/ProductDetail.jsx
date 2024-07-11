import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import ProductDetailShimmer from "./ProductDetailShimmer";


export default function ProductDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const { state } = useLocation();


  function updateProductDetail(data) {
    setProductData({
      key: data.id,
      id: data.id,
      img: data.image,
      title: data.title,
      category: data.category,
      price: data.price,
    });
  }
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
              <button >
                <FaMinus />
              </button>
              <div>0</div>
              <button >
                <FaPlus />
              </button>
            </div>
            <button
              className="mt-2 bg-[#3c2b20] text-white w-32 rounded-full h-10"
              
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

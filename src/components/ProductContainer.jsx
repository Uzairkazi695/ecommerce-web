import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productData = fetch("https://fakestoreapi.com/products?limit=5&sort=cate")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);
  return (
    <>
    <h2 className="text-4xl mt-7 -mb-5 ml-4 font-semibold text-[#3c2b20] text-center">Products</h2>
      <div className="mt-10 bg-[#FDF8EB] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {product.map((product) => {
          return <ProductCard 
          key={product.id} 
          img={product.image}
          title={product.title}
          category={product.category}
          price={product.price} />;
        })}
      </div>
    </>
  );
}

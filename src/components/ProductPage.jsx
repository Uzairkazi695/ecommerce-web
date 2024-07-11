import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";



export default function ProductPage() {
  const params = useParams();
  const product = params.products;
 
  

  const [productDetail, setProductDetail] = useState([]);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const productData = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
      });
  }, []);

  return (
    <div className="bg-[#FDF8EB] pt-4">
      <div className="flex flex-col items-center  md:flex-row justify-around bg-[#FDF8EB]">
        <input
          type="text"
          placeholder="Search"
          className="shadow-md p-4 w-[300px] border-none mb-2"
          onChange={(e)=> setQuery(e.target.value.toLowerCase())}
        />
        <select className="shadow-md p-4 w-[300px]" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
          <option hidden>Filter By Category</option>
          <option>men's clothing</option>
          <option>jewelery</option>
          <option>electronics</option>
          <option>women's clothing</option>
        </select>
      </div>
      <div>
        <div className="mt-10 bg-[#FDF8EB] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {productDetail
          .filter((product)=>
          product.category.toLowerCase().includes(query)
           || product.title.toLowerCase().includes(query))
          .map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
                data={product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

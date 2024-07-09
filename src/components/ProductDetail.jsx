import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  console.log("state", state);
  const [productData, setProductData] = useState(null);

  function updateProductDetail(data) {
    return;
  }
  useEffect(() => {
    const fetchData = async () =>{

        const data = await state
        setProductData({
            key: state.id,
            id: state.id,
            img: state.image,
            title: state.title,
            category: state.category,
            price: state.price,
          });
        }
    },[id]);

  useEffect(() => {
    console.log("ProductData:", productData);
  }, [productData]);

  return (
    <main>
      <div>
        <div>
          <img src={productData.img} />
        </div>
        <div>{productData.title}</div>
      </div>
    </main>
  );
}

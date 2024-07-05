import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
const API = "https://dummyjson.com/products";
const ProductScreen = () => {
  const { products } = useSelector((e) => e.productReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchAllProducts = async () => {
    setLoading(true);
    const { data } = await axios.get(API);
    console.log("hitting the api");
    dispatch({ type: "addProducts", payload: data.products });
    setLoading(false);
  };

  useEffect(() => {
    if (!products) {
      fetchAllProducts();
    }
  }, []);



  return (
    <>
      {loading ? <Loader /> : null}
      <div className="flex flex-wrap gap-5 w-full h-fit">
        <div className="flex p-10 w-full"></div>

        {products?.map((e) => (
          <ProductCard
            title={e.brand}
            description={e.description}
            price={e.price}
          />
        ))}
      </div>
    </>
  );
};

const ProductCard = ({ title, description, price }) => {
  return (
    <>
      <div className="flex min-h-44 w-44 overflow-hidden  bg-blue-200 p-4 shadow-md flex-col">
        <span>{title}</span>
        <span className="text-gray-500 text-sm">{description}</span>
        <span>{price}</span>
      </div>
    </>
  );
};

export default ProductScreen;

import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="w-full fixed top-0 p-5 bg-gray-100 flex justify-between items-center">
      <span>Logo</span>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default NavigationBar;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import NavigationBar from "./components/NavigationBar";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>

<NavigationBar/>




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

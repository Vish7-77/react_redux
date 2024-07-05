import { configureStore } from "@reduxjs/toolkit";
import {productReducer } from "./reducers";

const Store = configureStore({
    reducer:{productReducer}
});



export default Store
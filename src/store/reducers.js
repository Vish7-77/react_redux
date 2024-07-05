import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer({ products: null }, (builder) => {
  builder.addCase("addProducts", (state, action) => {
    state.products = action.payload;
  });
});




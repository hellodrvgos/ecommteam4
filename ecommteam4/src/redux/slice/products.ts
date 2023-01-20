import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
  productList: Product[];
};

const initialState: InitialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.productList = action.payload;
    },
    addWish: (state, action: PayloadAction<Product>) => {
      state.productList.push(action.payload);
    },
    removeWish: (state, action) => {
      const result = state.productList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (result !== -1) {
        state.productList.splice(result, 1);
      }
    },
  },
});

export const productActions = productSlice.actions;

const reducer = productSlice.reducer;

export default reducer;

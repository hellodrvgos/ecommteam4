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
      const result = state.productList.filter(
        (product) => product.id !== action.payload
      );
      state.productList = result;
    },
  },
});

export const productActions = productSlice.actions;

const reducer = productSlice.reducer;

export default reducer;

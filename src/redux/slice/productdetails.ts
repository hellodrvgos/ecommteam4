import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
  productDetail: Product;
};
const initialState: InitialState = {
  productDetail: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
    },
  },
};
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getDetailData: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
export const detailActions = productDetailSlice.actions;
const detailReducer = productDetailSlice.reducer;
export default detailReducer;

import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
  relatedProducts: Product[];
};
const initialState: InitialState = {
    relatedProducts: []
}

const relatedProductsSlice = createSlice({
  name: "relatedProducts",
  initialState,
  reducers: {
    getRelatedProductsData: (state, action) => {
      state.relatedProducts = action.payload;
    },
  },
});
export const relatedProductsActions = relatedProductsSlice.actions;
const relatedProductsReducer = relatedProductsSlice.reducer;
export default relatedProductsReducer;

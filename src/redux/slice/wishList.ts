import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
  wishList: Product[];
};

const initialState: InitialState = {
  wishList: [],
};
const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<Product>) => {
      state.wishList.push(action.payload);
    },
    removeFav: (state, action) => {
      const result = state.wishList.findIndex(
        (product) => product.id === action.payload
      );
      if (result !== -1) {
        state.wishList.splice(result, 1);
      }
    },
  },
});

export const wishActions = wishSlice.actions;
const reducer = wishSlice.reducer;
export default reducer;

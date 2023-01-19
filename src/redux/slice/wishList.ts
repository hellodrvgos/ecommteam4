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
      localStorage.setItem("favoriteList", JSON.stringify(state.wishList));
    },
    removeFav: (state, action) => {
      let currentLocalStorage: Product[] = JSON.parse(localStorage.getItem("favoriteList") || "null");
      state.wishList = [...currentLocalStorage];
      
      const result = state.wishList.findIndex(
        (product) => product.id === action.payload
      );
      if (result !== -1) {
        state.wishList.splice(result, 1);
        localStorage.setItem("favoriteList", JSON.stringify(state.wishList));
      }
    },
  },
});

export const wishActions = wishSlice.actions;
const reducer = wishSlice.reducer;
export default reducer;

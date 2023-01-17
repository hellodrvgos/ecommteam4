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
    sortByTitle: (state) => {
      const sortTitle = state.productList.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      console.log(sortTitle, "sortTitle");
      state.productList = sortTitle;
    },
    sortByPrice: (state) => {
      const sortPrice = state.productList.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      state.productList = sortPrice;
    },
    sortByCategory: (state) => {
      const sortCategory = state.productList.sort(function (a, b) {
        if (a.caterogy > b.caterogy) {
          return 1;
        }
        if (a.caterogy < b.caterogy) {
          return -1;
        }
        return 0;
      });
      state.productList = sortCategory;
    },
  },
});

export const productActions = productSlice.actions;

const reducer = productSlice.reducer;

export default reducer;

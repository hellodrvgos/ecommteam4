import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
    productList: Product[];
}

const initialState: InitialState = {
    productList: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProductData: (state, action) => {
            state.productList = action.payload;
        }
     }
})

export const productActions = productSlice.actions;

const reducer = productSlice.reducer;

export default reducer;
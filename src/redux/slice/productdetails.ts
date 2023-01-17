import { createSlice } from "@reduxjs/toolkit";

import { Product} from "../../types/type";

type InitialState ={
    productDetail: Product[],
}
const initialState: InitialState = {
    productDetail:[],
}
const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
        getDetailData: (state, action) =>{
            state.productDetail = action.payload;
        }
    }
})
export const detailActions = productDetailSlice.actions;
const detailReducer = productDetailSlice.reducer;
export default detailReducer;
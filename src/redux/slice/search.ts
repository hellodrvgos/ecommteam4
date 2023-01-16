import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
    searchResultList: Product[];
}

const initialState: InitialState = {
    searchResultList: [],
}

const searchSlice = createSlice({
    name: "searchresults",
    initialState,
    reducers: {
        searchResults: (state, action) => {
            state.searchResultList = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;

const reducer = searchSlice.reducer;

export default reducer;
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import searchReducer from "./slice/search";
import detailReducer from "./slice/productdetails";

const store = configureStore({
    reducer: {
        products: productReducer,
        searchresults: searchReducer,
        productDetail: detailReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
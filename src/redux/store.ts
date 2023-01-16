import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import searchReducer from "./slice/search";

const store = configureStore({
    reducer: {
        products: productReducer,
        searchresults: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
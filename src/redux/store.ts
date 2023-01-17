import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import wishReducer from "./slice/wishList";

const store = configureStore({
  reducer: {
    products: productReducer,
    wish: wishReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import productsCartSlice from "./slices/productsCartSlice";

export const store = configureStore({
  reducer: {
    productsCart: productsCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

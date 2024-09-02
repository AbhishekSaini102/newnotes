// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth reducer to the store
  },
  //   devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export default store;

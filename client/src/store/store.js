// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import folderReducer from "./folderSlice.js";
import noteReducer from "./noteSlice.js";


const store = configureStore({
  reducer: {
    notes: noteReducer,
    folders: folderReducer,
    auth: authReducer, // Add the auth reducer to the store
  },
  //   devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export default store;

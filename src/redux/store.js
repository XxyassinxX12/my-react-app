import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countslice.js";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./cake/CakeSlice";

const store = configureStore({
  reducer: { cake: cakeSlice },
});

export default store;

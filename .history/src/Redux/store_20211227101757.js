import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CocktailSlice from "./CocktailSlice";
const store = configureStore({
  reducer: {
    data: CocktailSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

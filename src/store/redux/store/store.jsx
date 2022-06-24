import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slice/favorites";
export const store = configureStore({
    reducer: {
        favoriteMeal: favoriteReducer
    }
});
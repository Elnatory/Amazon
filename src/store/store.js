import { configureStore } from "@reduxjs/toolkit";
import allProductsReducr from "./slices/allProducts";
import amazonReducer from "./slices/amazonSlice";
import currentReducer from "./slices/users";
import brandsReducer from "./slices/brandsSlice";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore(
    {
        reducer: {
            allProducts: allProductsReducr,
            amazonReducer: amazonReducer,
            currentUser:currentReducer,
            brands: brandsReducer,
            categories: categoriesReducer,
        }
    }
)


export default store
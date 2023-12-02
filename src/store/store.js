import { configureStore } from "@reduxjs/toolkit";
import allProductsReducr from "./slices/allProducts";
import amazonReducer from "./slices/amazonSlice";
import brandsReducer from "./slices/brandsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import currentReducer from "./slices/users"

const store = configureStore(
    {
        reducer: {
            allProducts: allProductsReducr,
            amazonReducer: amazonReducer,
            brands: brandsReducer,
            categories: categoriesReducer,
            currentUser:currentReducer
        }
    }
)


export default store
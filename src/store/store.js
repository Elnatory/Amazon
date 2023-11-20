import { configureStore } from "@reduxjs/toolkit";
import allProductsReducr from "./slices/allProducts";
import amazonReducer from "./slices/amazonSlice";


const store = configureStore(
    {
        reducer: {
            allProducts: allProductsReducr,
            amazonReducer: amazonReducer,
        }
    }
)


export default store
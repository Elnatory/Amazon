import { configureStore } from "@reduxjs/toolkit";
import allProductsReducr from "./slices/allProducts";
import amazonReducer from "./slices/amazonSlice";
import currentReducer from "./slices/users"

const store = configureStore(
    {
        reducer: {
            allProducts: allProductsReducr,
            amazonReducer: amazonReducer,
            currentUser:currentReducer
        }
    }
)


export default store
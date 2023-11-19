import { configureStore } from "@reduxjs/toolkit";
import  allProductsReducr  from "./slices/allProducts";


const store = configureStore(
    {
        reducer:{
            allProducts : allProductsReducr,
        }
    }
)


export default store
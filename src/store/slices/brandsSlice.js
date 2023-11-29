import { createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
    name: "selectedBrands",
    initialState: [],
    reducers: {
        addBrand: (state, action) => {
            state.push(action.payload)
        },
        removeBrand: (state, action) => {
            return state.filter(brand => brand !== action.payload)
        }
    }
})
export const { addBrand, removeBrand } = brandsSlice.actions
export default brandsSlice.reducer


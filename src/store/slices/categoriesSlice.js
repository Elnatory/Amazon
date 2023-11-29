import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "selectedCategories",
    initialState: [],
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload)
        },
        removeCategory: (state, action) => {
            return state.filter(category => category!== action.payload)
        }
    }
})
export const { addCategory, removeCategory } = categoriesSlice.actions
export default categoriesSlice.reducer


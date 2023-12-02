// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userFromLocalStorage = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const userSlice = createSlice({
  name: "users",
  initialState: { currentUser: userFromLocalStorage||null  },
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

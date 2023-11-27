import { createSlice } from "@reduxjs/toolkit";

// Get cart items from local storage if available
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// Get the saved counter value from local storage
const savedCounter = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;

const initialState = {
  products: cartFromLocalStorage, // Initialize cart items from local storage
  counter: savedCounter, // Initialize counter from local storage
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.products)); // Save updated cart to local storage
    },
  
    increaseQuantity: (state, action) => {
                    const item = state.products.find((item) => item.id === action.payload);
                    if (item) {
                        item.quantity++;
                    }
                    localStorage.setItem("cart", JSON.stringify(state.products)); // Save updated cart to local storage
                },

                decreaseQuantity: (state, action) => {
                    const item = state.products.find((item) => item.id === action.payload);
                    if (item.quantity === 1) {
                      item.quantity = 1;
                    } else {
                      item.quantity--;
                    }
                    localStorage.setItem("cart", JSON.stringify(state.products)); // Save updated cart to local storage
                  },


                  resetCart: (state) => {
                    state.products = [];
                    localStorage.removeItem("cart"); // Remove cart from local storage on reset
                  },

                  deleteItem: (state, action) => {
                    state.products = state.products.filter((item) => item.id !== action.payload);
                    localStorage.setItem("cart", JSON.stringify(state.products)); // Save updated cart to local storage
                  },


 } });



export const {
    addToCart,
    deleteItem,
    resetCart,
    increaseQuantity,
    decreaseQuantity,
} = amazonSlice.actions;
export default amazonSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     products: [],
//     userInfo: [],
// };

// export const amazonSlice = createSlice({
//     name: "amazon",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const item = state.products.find((item) => item.id === action.payload.id);
//             if (item) {
//                 item.quantity += action.payload.quantity;
//             } else {
//                 state.products.push(action.payload);
//             }
//         },
//         increaseQuantity: (state, action) => {
//             const item = state.products.find((item) => item.id === action.payload);
//             if (item) {
//                 item.quantity++;
//             }
//         },
//         decreaseQuantity: (state, action) => {
//             const item = state.products.find((item) => item.id === action.payload);
//             if (item.quantity === 1) {
//                 item.quantity = 1;
//             } else {
//                 item.quantity--;
//             }
//         },
//         deleteItem: (state, action) => {
//             state.products = state.products.filter(
//                 (item) => item.id !== action.payload
//             );
//         },
//         resetCart: (state) => {
//             state.products = [];
//         },
        
//     },
// });

// export const {
//     addToCart,
//     deleteItem,
//     resetCart,
//     increaseQuantity,
//     decreaseQuantity,
// } = amazonSlice.actions;
// export default amazonSlice.reducer;



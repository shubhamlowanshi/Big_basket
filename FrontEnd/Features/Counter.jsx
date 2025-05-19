import { createSlice } from "@reduxjs/toolkit";
import apple from "../assets/apple.jpeg";
import banana from "../assets/banana.jpeg";

const initialState = {
  value: 0,
  items: [
    { id: 1, image: apple, name: "Potato", price: 100, qty: 1 },

  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // In your Redux slice (e.g., counterSlice.js)
    updateProduct: (state, action) => {
      const { id, name, price, qty, description } = action.payload;
      const existingProduct = state.items.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
        existingProduct.qty = qty;
        existingProduct.description = description;
      }
    },



    updateItemQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.qty = Math.max(1, item.qty + delta);
      }
    },
    updateProducts: (state, action) => {
      const { id, name, price, qty, description } = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        state.items[productIndex] = { ...state.items[productIndex], name, price, qty, description };
      }
    },


    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount, updateItemQuantity, removeItem, updateProduct, updateProducts } = counterSlice.actions;

// Selector to access items array in components
export const selectItems = (state) => state.counter.items;

export default counterSlice.reducer;

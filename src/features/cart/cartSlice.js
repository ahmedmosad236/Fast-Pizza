import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // {
  //   pizzaId: 12,
  //   name: "ahmedPizza",
  //   quantity: 2,
  //   unitPrice: 16,
  //   totalPrice: 32,
  // },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.cart.push(action.payload);
    },
    deleteItems(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItems(state, action);
    },
    clearItems(state, action) {
      state.cart = [];
    },
  },
});
export const {
  addItems,
  deleteItems,
  increaseQuantity,
  decreaseQuantity,
  clearItems,
} = cartSlice.actions;
export const gerCart = (state) => state.cart.cart;
export default cartSlice.reducer;
export const getcurrentQuantityId = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += price * quantity;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity,
          totalPrice: price * quantity
        });
      }

      state.total += price * quantity;
    },
    removeFromCart: (state, action) => {
        const id = action.payload;
        const existingItemIndex = state.items.findIndex(item => item.id === id);
  
        if (existingItemIndex !== -1) {
          const itemToRemove = state.items[existingItemIndex];
          state.total -= itemToRemove.totalPrice;
          state.items.splice(existingItemIndex, 1);
        }
      }
  }
});

export const { addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

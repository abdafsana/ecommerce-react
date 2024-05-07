import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    productsLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    productsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Diğer gerekli reducers eklenebilir
  }
});

export const { setProducts, productsLoading, productsError } = productsSlice.actions;

export default productsSlice.reducer;

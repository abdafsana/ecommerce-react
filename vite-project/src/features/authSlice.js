import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: []
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            addProduct: (state, action) => {
              state.auth.push(action.payload);
    },
}
});

export const { addProduct } = authSlice.actions;
export default authSlice.reducer;

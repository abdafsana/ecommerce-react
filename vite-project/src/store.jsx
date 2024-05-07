import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import api from './services/api';

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});


export default store;
import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../features/products/ProductSlice'
import cartReducer from '../features/cart/CartSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        products:productReducer,
    },
});

export default store;
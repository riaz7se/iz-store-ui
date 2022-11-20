import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import myStoreReducer from "./features/items/myStoreSlice";


const store = configureStore({
    reducer: {
        storeItems: myStoreReducer,
        cart: cartReducer
    }
});

export default store;
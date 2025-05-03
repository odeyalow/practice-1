import { configureStore } from "@reduxjs/toolkit";

import wishlistSlice from "@/features/wishlist/wishlistSlice";
import cartSlice from "@/features/cart/cartSlice";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
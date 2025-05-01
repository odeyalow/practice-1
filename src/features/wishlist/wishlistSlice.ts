import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWishlist, WishlistItem } from './IWishlist';

const initialState: IWishlist= {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        'ADD': (state, action: PayloadAction<WishlistItem>) => {
            state.wishlist.push(action.payload);
        },
        'REMOVE': (state, action: PayloadAction<number>) => {
            state.wishlist = state.wishlist.filter((product: WishlistItem) => action.payload !== product.id);
        },
    }
})

export const { ADD, REMOVE } = wishlistSlice.actions;
export default wishlistSlice.reducer;
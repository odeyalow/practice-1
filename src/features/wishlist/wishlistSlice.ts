import { IProduct } from '@/entities/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
    wishlist: IProduct[];
}

const initialState: WishlistState = {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        ADD: (state, action: PayloadAction<IProduct>) => {
            state.wishlist.push(action.payload);
        },
        REMOVE: (state, action: PayloadAction<number>) => {
            state.wishlist = state.wishlist.filter((product: IProduct) => action.payload !== product.id);
        },
    }
})

export const { ADD, REMOVE } = wishlistSlice.actions;
export default wishlistSlice.reducer;
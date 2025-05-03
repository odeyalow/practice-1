import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/entities/IProduct";

interface CartState {
    cart: IProduct[];
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD: (state, action: PayloadAction<IProduct>) => {
            state.cart.push(action.payload);
        },
        REMOVE: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((product: IProduct) => action.payload !== product.id);
        },
        CLEAR: (state) => {
            state.cart.length = 0;
        },
        ToggleCheckout: (state, action: PayloadAction<number>) => {
            const product = state.cart.find((product: IProduct) => product.id === action.payload);
            if (product) {
              product.isInCheckout = !product.isInCheckout;
            }
        },
        SetCheckoutAll: (state) => {
            state.cart.map((product: IProduct) => product.isInCheckout = true)
        },
        RemoveCheckoutAll: (state) => {
            state.cart.map((product: IProduct) => product.isInCheckout = false)
        }
    }
})

export const { ADD, REMOVE, CLEAR, ToggleCheckout, SetCheckoutAll, RemoveCheckoutAll } = cartSlice.actions;
export default cartSlice.reducer;
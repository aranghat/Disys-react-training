import { createSlice } from "@reduxjs/toolkit";

export const cartStore = createSlice({
    name: "cartStore",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let product = action.payload;
            this.state.cartItems.push(product);    
        },
        removeFromCart: (state, action) => {
            let productId = action.payload;
            this.state.cartItems = this.state.cartItems.filter(
                (item) => item.id != productId
            );
        }
    }
});

export const { addToCart, removeFromCart } = cartStore.actions;
export default cartStore.reducer;
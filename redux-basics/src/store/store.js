import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        products : productStore,
        cart : cartStore,
    }
});
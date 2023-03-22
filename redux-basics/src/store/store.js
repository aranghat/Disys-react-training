import { configureStore } from "@reduxjs/toolkit";
import productStore from "./productStore"
import cartStore from "./cartStore"

export default configureStore({
    reducer: {
        products : productStore,
        cart : cartStore,
    }
});
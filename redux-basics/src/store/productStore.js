import { createSlice } from "@reduxjs/toolkit";

export const productStore = createSlice({
    name: "productStore",
    initialState: {
        products: [
            { id: 1, name: "Product 1", price: 100 
            ,image : "https://picsum.photos/200/300"},
            { id: 2, name: "Product 2", price: 90  ,image : "https://picsum.photos/200/300"},
            { id: 3, name: "Product 3", price: 80  ,image : "https://picsum.photos/200/300"},
            { id: 4, name: "Product 4", price: 50  ,image : "https://picsum.photos/200/300"},
            { id: 5, name: "Product 5", price: 40  ,image : "https://picsum.photos/200/300"},
            { id: 6, name: "Product 6", price: 200 ,image : "https://picsum.photos/200/300"}
        ],
    }
});

export default productStore.reducer;
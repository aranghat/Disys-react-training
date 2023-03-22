import { createSlice } from "@reduxjs/toolkit";

export const mystate = createSlice({
    name: "mystate",
    initialState: {
        numberGuessed : 0,
    },
    reducers :{
        setNumberGuessed : (state, action) => {
            state.numberGuessed = action.payload;
        },
        setRandomNumber : (state, action) => {
            state.randomNumber = Math.floor(Math.random() * 100);
        }
    }
})

export const { setNumberGuessed, setRandomNumber } = mystate.actions;
export default mystate.reducer;
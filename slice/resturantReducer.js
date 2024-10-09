import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const resturantSlice = createSlice({
    name:"resturant",
    initialState:initialState,
    reducers:{
        addResturant(state,action){
            return [...action.payload];            
        }
    }
})

export default resturantSlice.reducer;
export const {addResturant} = resturantSlice.actions;
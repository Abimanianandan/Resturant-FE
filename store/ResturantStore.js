import { configureStore } from "@reduxjs/toolkit";
import resturantReducer from "../slice/resturantReducer"

export const store = configureStore({
    devTools:true,
    reducer:{
        resturants:resturantReducer
    }
})
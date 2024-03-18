import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// there are slices present in our appStore
// we can add the slices to our appStore using configureStore()
const appStore = configureStore({
    reducer: { // this is the app reducer, it contains all the reducers from different slices
        cart: cartReducer
    }
});
// we have to provide this store to our application

export default appStore;

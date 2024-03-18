import { createSlice } from "@reduxjs/toolkit";

// giving the configuration of the slice to the createSlice
// here addItem is an action
// ()=>{} is the reducer function
// the reducer function will modify the state according to the action
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			// mutating the state
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

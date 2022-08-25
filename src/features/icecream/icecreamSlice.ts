import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type initialState = {
	numberOfIceCreams: number;
};

const initialState: initialState = {
	numberOfIceCreams: 20,
};

const icecreamSlice = createSlice({
	name: "icecream",
	initialState,
	reducers: {
		ordered: (state) => {
			state.numberOfIceCreams--;
		},
		restocked: (state, action: PayloadAction<number>) => {
			state.numberOfIceCreams += action.payload;
		},
	},
	// extraReducers: {
	//     ['cake/ordered']: (state) => {
	//         state.numberOfIceCreams--;
	//     }
	// }
	extraReducers: (builder) => {
		builder.addCase(cakeOrdered, (state) => {
			state.numberOfIceCreams--;
		});
	},
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;

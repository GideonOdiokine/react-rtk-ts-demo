import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
	const [value, setValue] = React.useState(1);
	const numberOfIcecream = useAppSelector(
		(state) => state.icecream.numberOfIceCreams
	);
	const dispatch = useAppDispatch();
	return (
		<div>
			<h2>Number of creams - {numberOfIcecream} </h2>
			<button onClick={() => dispatch(ordered())}>Order cream</button>
			<input
				type='number'
				value={value}
				onChange={(e) => setValue(parseInt(e.target.value))}
			/>
			<button onClick={() => dispatch(restocked(value))}>Restock creams</button>
		</div>
	);
};

export default IcecreamView;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency, ICurrencyState } from "../../utils/interfaces";

const initialState: ICurrencyState = {
	currency: {
		id: "",
		countryCode: "",
		currencyCode: "",
		symbol: "",
		rate: 0,
	},
	loading: false,
	error: "",
};

export const currencySlice = createSlice({
	name: "currency",
	initialState,
	reducers: {
		currencyPending: (state) => {
			state.loading = true;
			state.error = "";
			state.currency = {
				id: "",
				countryCode: "",
				currencyCode: "",
				symbol: "",
				rate: 0,
			};
		},
		currencySuccess: (state, { payload }: PayloadAction<ICurrency>) => {
			state.currency = payload;
			state.loading = false;
			state.error = "";
		},
		currencyError: (state, { payload }: PayloadAction<string>) => {
			state.loading = false;
			state.error = payload;
			state.currency = {
				id: "",
				countryCode: "",
				currencyCode: "",
				symbol: "",
				rate: 0,
			};
		},
	},
});

export const { currencyPending, currencySuccess, currencyError } = currencySlice.actions;
export default currencySlice.reducer;

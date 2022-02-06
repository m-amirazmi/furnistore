export interface ICurrency {
	id: string;
	countryCode: string;
	currencyCode: string;
	symbol: string;
	rate: number;
}

export interface ICurrencyState {
	loading: boolean;
	error: string;
	currency: ICurrency;
}

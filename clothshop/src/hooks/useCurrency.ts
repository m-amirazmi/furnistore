import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { currencyPending, currencySuccess } from "../redux/features/currencySlice";
import { RootState } from "../redux/store";
import axios from "axios";
import currencies from "../data/currencies.json";

export const useCurrency = () => {
	const dispatch = useDispatch();
	const [cookies, setCookie, removeCookie] = useCookies();
	const { currency, loading, error } = useSelector((state: RootState) => state.currency);

	const changeCurrency = (cc: string) => {
		dispatch(currencyPending());
		saveToState(cc);
	};

	const saveToState = (cc: string) => {
		const findCurrency = currencies.find((item) => item.countryCode === cc);
		if (findCurrency) {
			setCookie("country", cc);
			setCookie("currency", findCurrency.currencyCode);
			dispatch(currencySuccess(findCurrency));
		}
	};

	useEffect(() => {
		if (!loading) {
			if (!currency.countryCode) {
				if (!cookies.country) {
					const getCurrency = async () => {
						dispatch(currencyPending());
						let fetchedCc;
						try {
							const { data } = await axios.get("https://geolocation-db.com/json/");
							fetchedCc = data.country_code;
						} catch (error) {
							fetchedCc = "MY";
						}
						saveToState(fetchedCc);
					};
					getCurrency();
				} else {
					saveToState(cookies.country);
				}
			}
		}
	}, []);

	return { currency, loading, changeCurrency };
};

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { numberWithCommas } from "../utils/helpers";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const { currency } = useSelector((state: RootState) => state.currency);

	const price = 5 * currency.rate;

	return (
		<div>
			This is homepage 2 {currency.symbol}
			{numberWithCommas(price.toFixed(2))}
		</div>
	);
};

export default Home;

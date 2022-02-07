import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import styles from "../assets/scss/modules/currency-selection.module.scss";
import { ICurrency, ICurrencySelectionProps } from "../utils/interfaces";
import currencies from "../data/currencies.json";
import { useCurrency } from "../hooks/useCurrency";
import { useState } from "react";

const CurrencySelection: React.FunctionComponent<ICurrencySelectionProps> = ({ color, resetState }) => {
	const { currency, changeCurrency } = useCurrency();
	const [openCurrency, setOpenCurrency] = useState(false);

	const handleSelectCurrency = (cc: string) => {
		changeCurrency(cc);
		resetState && resetState();
	};

	return (
		<div className={color === "black" ? `${styles.linkBlack} border border-black px-2 py-1 rounded-2` : styles.linkWhite}>
			<Dropdown isOpen={openCurrency} toggle={() => setOpenCurrency(!openCurrency)}>
				<DropdownToggle data-toggle="dropdown" tag="span" style={{ cursor: "pointer" }} className="d-flex align-items-center">
					<img width={20} src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${currency.countryCode}.svg`} />
					<span className="ms-2">
						{currency.currencyCode}({currency.symbol})
					</span>
				</DropdownToggle>
				<DropdownMenu className={`${color === "black" ? "border-accent-3" : "border-accent-3-light"}  dropdown-menu-end`}>
					{currencies.map((item: ICurrency) => {
						return (
							<DropdownItem key={item.id} className={item.countryCode === currency.countryCode ? " bg-accent-3-light" : ""} onClick={() => handleSelectCurrency(item.countryCode)}>
								<div className="d-flex gap-2 align-items-center py-2">
									<div style={{ width: "24px" }}>
										<img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${item.countryCode}.svg`} />
									</div>
									<p className="mb-0">
										{item.currencyCode} ({item.symbol})
									</p>
								</div>
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default CurrencySelection;

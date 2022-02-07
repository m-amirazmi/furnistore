import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import { FiGlobe, FiLogIn } from "react-icons/fi";
import currencies from "../data/currencies.json";
import announcements from "../data/announcements.json";
import styles from "../assets/scss/modules/announcement-bar.module.scss";
import { ICurrency } from "../utils/interfaces";
import { useCurrency } from "../hooks/useCurrency";

const AnnouncementBar: React.FunctionComponent = () => {
	const { currency, changeCurrency } = useCurrency();

	const [count, setCount] = useState(1);
	const [openCurrency, setOpenCurrency] = useState(false);

	useEffect(() => {
		const maxCount = announcements.length;
		setTimeout(() => {
			if (count < maxCount) {
				const countUp = count + 1;
				setCount(countUp);
			} else {
				const resetCount = 1;
				setCount(resetCount);
			}
		}, 3000);
	}, [count]);

	return (
		<div className="bg-accent-3 text-white py-2" style={{ fontSize: "14px", fontWeight: "300" }}>
			<Container>
				<Row>
					<Col className="d-none d-md-block" md="4">
						Call: +60 1119821105
					</Col>
					<Col sm="6" md="4" className="text-center">
						{announcements.map(
							(item) =>
								+item.id === count && (
									<Link className={styles.announcement} key={item.id} to={item.link}>
										{item.text}
									</Link>
								)
						)}
					</Col>
					<Col className="d-none d-md-block" md="4">
						<div className="d-flex justify-content-end">
							<Link to="/signin" className={styles.link}>
								<FiLogIn />
								<span className="ms-2">Login</span>
							</Link>
							<span className="mx-2">|</span>
							<div className={styles.link}>
								<Dropdown isOpen={openCurrency} toggle={() => setOpenCurrency(!openCurrency)}>
									<DropdownToggle data-toggle="dropdown" tag="span" style={{ cursor: "pointer" }} className="d-flex align-items-center">
										<img width={20} src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${currency.countryCode}.svg`} />
										<span className="ms-2">
											{currency.currencyCode}({currency.symbol})
										</span>
									</DropdownToggle>
									<DropdownMenu className="border-accent-3-light dropdown-menu-end">
										{currencies.map((item: ICurrency) => {
											return (
												<DropdownItem
													key={item.id}
													className={item.countryCode === currency.countryCode ? " bg-accent-3-light" : ""}
													onClick={() => changeCurrency(item.countryCode)}
												>
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
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AnnouncementBar;

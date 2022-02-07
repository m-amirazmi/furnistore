import { useState } from "react";
import { FiHeart, FiLogIn, FiMenu, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Navbar, Row } from "reactstrap";
import logo from "../assets/images/logo.svg";
import styles from "../assets/scss/modules/topnav.module.scss";
import menu from "../data/menu.json";
import CurrencySelection from "./CurrencySelection";

const TopNav: React.FunctionComponent = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { pathname, search } = useLocation();

	const resetState = () => setOpenMenu(false);

	return (
		<div>
			<Navbar color="white" expand="md" light className="border border-bottom border-accent-3-light">
				<Container>
					<Row className="align-items-center">
						<Col xs="1" className="d-md-none" onClick={() => setOpenMenu(!openMenu)}>
							<div>{!openMenu ? <FiMenu className={styles.drawer} size={20} /> : <FiX className={styles.drawer} size={20} />}</div>
						</Col>

						<Col xs="6" md="3">
							<img src={logo} alt="Logo" width={"100%"} />
						</Col>

						<Col md="6" className="d-none d-md-block text-center">
							<div className="d-flex gap-3 justify-content-center">
								{menu.topnav.map((m) => (
									<Link key={m.id} to={`${m.pathname}${m.search}`} className={`${pathname === m.pathname && search === m.search && styles.active} ${styles.link}`}>
										{m.name}
									</Link>
								))}
							</div>
						</Col>

						<Col xs="5" md="3">
							<div className="d-flex gap-3 justify-content-end">
								<div className={styles.link}>
									<FiSearch size={20} />
								</div>
								<div className={styles.link}>
									<FiHeart size={20} />
								</div>
								<div className={styles.link}>
									<FiShoppingCart size={20} />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Navbar>

			{openMenu && (
				<div className={`${styles.menuitemsIn} ${styles.menuitems}`}>
					<Container className="p-3 h-100">
						<div className="d-flex flex-column align-items-center justify-content-center h-100">
							{menu.topnav.map((m) => (
								<Link
									key={m.id}
									to={`${m.pathname}${m.search}`}
									className={`${pathname === m.pathname && search === m.search && styles.active} ${styles.link} py-2`}
									onClick={resetState}
								>
									{m.name}
								</Link>
							))}
							<div className={styles.border}></div>
							<div className="mt-3 d-flex gap-2">
								<Link to="/signin" className={`${styles.link} border border-black px-2 py-1 rounded-2`}>
									<FiLogIn />
									<span className="ms-2">Login</span>
								</Link>
								<CurrencySelection color="black" resetState={resetState} />
							</div>
						</div>
					</Container>
				</div>
			)}
		</div>
	);
};

export default TopNav;

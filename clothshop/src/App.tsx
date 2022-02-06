import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import Error404 from "./pages/404";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PDP from "./pages/PDP";
import PLP from "./pages/PLP";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

interface IAppProps {}

const App: FunctionComponent<IAppProps> = (props) => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<PLP />} />
				<Route path="/shop/:id" element={<PDP />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/about" element={<About />} />
			</Route>
			<Route element={<AuthLayout />}>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
};

export default App;

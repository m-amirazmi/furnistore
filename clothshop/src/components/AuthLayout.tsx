import { Outlet } from "react-router-dom";

interface IAuthLayoutProps {}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = (props) => {
	return (
		<div>
			This is auth layout
			<div>{<Outlet />}</div>
		</div>
	);
};

export default AuthLayout;

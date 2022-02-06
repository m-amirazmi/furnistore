import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
	return (
		<div>
			<AnnouncementBar />
			<div className="container">{<Outlet />}</div>
		</div>
	);
};

export default MainLayout;

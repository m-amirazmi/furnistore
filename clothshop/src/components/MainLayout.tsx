import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import TopNav from "./TopNav";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
	return (
		<div>
			<AnnouncementBar />
			<TopNav />
			<div className="container">{<Outlet />}</div>
		</div>
	);
};

export default MainLayout;

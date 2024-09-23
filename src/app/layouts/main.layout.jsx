import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { LayoutWrapper } from "../../shared/ui/technical";

export const MainLayout = ({ children }) => {
	return (
		<LayoutWrapper>
			<Header />
			{children || <Outlet />}
			<Footer />
		</LayoutWrapper>
	);
};
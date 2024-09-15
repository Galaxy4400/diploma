import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";

export const MainLayout = () => {
	return (
		<div style={{display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh', padding: '20px'}}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
};
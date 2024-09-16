import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px'}}>
			<Outlet />
		</div>
	);
};
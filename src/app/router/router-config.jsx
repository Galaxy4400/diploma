import { createBrowserRouter, Outlet } from "react-router-dom";
import { AuthenticateRoute, ProtectedRoute } from "./utils";
import { MainPage } from "../../pages/main";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { MainLayout } from "../../layouts/main-layout";

export const routerConfig = createBrowserRouter([
	{
		path: '/',
		element: <ProtectedRoute element={<MainLayout />} />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			// {
			// 	path: 'history',
			// 	element: <HistoryPage />,
			// },
			// {
			// 	path: 'settings',
			// 	element: <SettingsPage />,
			// },
			// {
			// 	path: 'account',
			// 	element: <AccountCreatePage />,
			// },
			// {
			// 	path: 'account/:id',
			// 	element: <AccountDetailsPage />,
			// },
			// {
			// 	path: 'category',
			// 	element: <CategoryCreatePage />,
			// },
			// {
			// 	path: 'category/:id',
			// 	element: <CategoryDetailsPage />,
			// },
			// {
			// 	path: 'operation',
			// 	element: <OperationCreatePage />,
			// },
			// {
			// 	path: 'operation/:id',
			// 	element: <OperationDetailsPage />,
			// },
		],
	},
	{
		path: '/',
		element: <AuthenticateRoute element={<Outlet />}/>,
		children: [
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
		],
	},
]);

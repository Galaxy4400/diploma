import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainPage } from "../../pages/main";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { AccountPage } from "../../pages/account";
import { AccountCreatePage } from "../../pages/account-create";
import { UserEditPage } from "../../pages/user-edit";
import { AccountEditPage } from "../../pages/account-edit";
import { AuthLayout, MainLayout } from "../layouts";
import { AuthenticateRoute, ProtectedRoute } from "./router.hocs";

export const routerConfig = createBrowserRouter([
	{
		path: '/',
		element: <ProtectedRoute element={<MainLayout />} />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: 'user/edit',
				element: <UserEditPage />
			},
			// {
			// 	path: 'history',
			// 	element: <HistoryPage />,
			// },
			{
				path: 'account',
				element: <Navigate to="/account/create" replace />,
			},
			{
				path: 'account/:id',
				element: <AccountPage />,
			},
			{
				path: 'account/create',
				element: <AccountCreatePage />,
			},
			{
				path: 'account/:id/edit',
				element: <AccountEditPage />,
			},
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
		element: <AuthenticateRoute element={<AuthLayout />}/>,
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

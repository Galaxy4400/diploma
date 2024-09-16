import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, MainLayout } from "../layouts";
import { AuthenticateRoute, ProtectedRoute } from "./router.hocs";
import { MainPage } from "../../pages/main";
import { UserEditPage } from "../../pages/user-edit";
import { AccountPage } from "../../pages/account";
import { AccountCreatePage } from "../../pages/account-create";
import { AccountEditPage } from "../../pages/account-edit";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";


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
			// {
			// 	path: 'history',
			// 	element: <HistoryPage />,
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

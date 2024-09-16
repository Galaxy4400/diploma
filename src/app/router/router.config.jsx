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
import { pathKey } from "../../shared/lib/router";


export const routerConfig = createBrowserRouter([
	{
		path: pathKey.home(),
		element: <ProtectedRoute element={<MainLayout />} />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: pathKey.settings(),
				element: <UserEditPage />
			},
			{
				path: pathKey.account.root(),
				element: <Navigate to={pathKey.account.create()} replace />,
			},
			{
				path: pathKey.account.id(),
				element: <AccountPage />,
			},
			{
				path: pathKey.account.create(),
				element: <AccountCreatePage />,
			},
			{
				path: pathKey.account.edit(),
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
		path: pathKey.home(),
		element: <AuthenticateRoute element={<AuthLayout />}/>,
		children: [
			{
				path: pathKey.login(),
				element: <LoginPage />,
			},
			{
				path: pathKey.register(),
				element: <RegisterPage />,
			},
		],
	},
]);

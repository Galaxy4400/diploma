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
import { path } from "../../shared/lib/router";
import { OperationPage } from "../../pages/operation";
import { HistoryPage } from "../../pages/history";
import { OperationCreatePage } from "../../pages/operation-create";


export const routerConfig = createBrowserRouter([
	{
		path: path.home(),
		element: <ProtectedRoute element={<MainLayout />} />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: path.settings(),
				element: <UserEditPage />
			},
			{
				path: path.history(),
				element: <HistoryPage />
			},
			{
				path: path.account.root(),
				element: <Navigate to={path.account.create()} replace />,
			},
			{
				path: path.account.id(),
				element: <AccountPage />,
			},
			{
				path: path.account.create(),
				element: <AccountCreatePage />,
			},
			{
				path: path.account.edit(),
				element: <AccountEditPage />,
			},
			{
				path: path.operation.root(),
				element: <Navigate to={path.operation.create()} replace />,
			},
			{
				path: path.operation.id(),
				element: <OperationPage />,
			},
			{
				path: path.operation.create(),
				element: <OperationCreatePage />,
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
			// 	path: 'history',
			// 	element: <HistoryPage />,
			// },
		],
	},
	{
		path: path.home(),
		element: <AuthenticateRoute element={<AuthLayout />}/>,
		children: [
			{
				path: path.login(),
				element: <LoginPage />,
			},
			{
				path: path.register(),
				element: <RegisterPage />,
			},
		],
	},
]);

import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, MainLayout } from "../layouts";
import { AuthenticateRoute, ProtectedRoute } from "./router.hocs";
import { MainPage, mainPageLoader } from "../../pages/main";
import { UserEditPage } from "../../pages/user-edit";
import { AccountPage, accountPageLoader } from "../../pages/account";
import { AccountCreatePage } from "../../pages/account-create";
import { AccountEditPage } from "../../pages/account-edit";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { path } from "../../shared/lib/router";
import { OperationPage } from "../../pages/operation";
import { HistoryPage, historyPageLoader } from "../../pages/history";
import { OperationCreatePage } from "../../pages/operation-create";
import { CategoryPage } from "../../pages/category";
import { CategoryCreatePage } from "../../pages/category-create";
import { CategoryEditPage } from "../../pages/category-edit";


export const routerConfig = createBrowserRouter([
	{
		path: path.home(),
		element: <ProtectedRoute element={<MainLayout />} />,
		children: [
			{
				index: true,
				element: <MainPage />,
				loader: mainPageLoader,
			},
			{
				path: path.settings(),
				element: <UserEditPage />
			},
			{
				path: path.history(),
				element: <HistoryPage />,
				loader: historyPageLoader,
			},
			{
				path: path.account.root(),
				element: <Navigate to={path.account.create()} replace />,
			},
			{
				path: path.account.id(),
				element: <AccountPage />,
				loader: accountPageLoader,
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
			{
				path: path.category.root(),
				element: <Navigate to={path.category.create()} replace />,
			},
			{
				path: path.category.id(),
				element: <CategoryPage />,
			},
			{
				path: path.category.create(),
				element: <CategoryCreatePage />,
			},
			{
				path: path.category.edit(),
				element: <CategoryEditPage />,
			},
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

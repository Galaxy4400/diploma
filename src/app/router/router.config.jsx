import { path } from "../../shared/lib/router";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, MainLayout } from "../layouts";
import { AuthenticateRoute, ProtectedRoute } from "./router.hocs";
import { MainPage, mainPageLoader } from "../../pages/main";
import { UserEditPage } from "../../pages/user-edit";
import { AccountPage, accountPageLoader } from "../../pages/account";
import { AccountCreatePage } from "../../pages/account-create";
import { AccountEditPage, accountEditPageLoader } from "../../pages/account-edit";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { OperationPage, operationPageLoader } from "../../pages/operation";
import { HistoryPage, historyPageLoader } from "../../pages/history";
import { OperationCreatePage, operationCreatePageLoader } from "../../pages/operation-create";
import { CategoryPage, categoryPageLoader } from "../../pages/category";
import { CategoryCreatePage } from "../../pages/category-create";
import { CategoryEditPage, categoryEditPageLoader } from "../../pages/category-edit";


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
				loader: accountEditPageLoader,
			},
			{
				path: path.operation.root(),
				element: <Navigate to={path.operation.create()} replace />,
			},
			{
				path: path.operation.id(),
				element: <OperationPage />,
				loader: operationPageLoader,
			},
			{
				path: path.operation.create(),
				element: <OperationCreatePage />,
				loader: operationCreatePageLoader,
			},
			{
				path: path.category.root(),
				element: <Navigate to={path.category.create()} replace />,
			},
			{
				path: path.category.id(),
				element: <CategoryPage />,
				loader: categoryPageLoader,
			},
			{
				path: path.category.create(),
				element: <CategoryCreatePage />,
			},
			{
				path: path.category.edit(),
				element: <CategoryEditPage />,
				loader: categoryEditPageLoader,
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

import { path } from 'shared/lib/router';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthenticationRoute, ProtectedRoute } from './router.hocs';
import { AuthLayout, MainLayout } from '../layouts';
import { ErrorPage } from 'pages/error';
import { MainPage } from 'pages/main';
import { UserEditPage } from 'pages/user-edit';
import { HistoryPage } from 'pages/history';
import { AnalyticsPage } from 'pages/analytics';
import { AccountCreatePage } from 'pages/account-create';
import { AccountEditPage } from 'pages/account-edit';
import { OperationCreatePage } from 'pages/operation-create';
import { CategoryPage } from 'pages/category';
import { CategoryCreatePage } from 'pages/category-create';
import { Page404 } from 'pages/page-404';
import { LoginPage } from 'pages/login';
import { RegisterPage } from 'pages/register';
import { AccountPage } from 'pages/account';
import { OperationPage } from 'pages/operation';
import { CategoryEditPage } from 'pages/category-edit';

export const routerConfig = createBrowserRouter([
	{
		path: path.home(),
		element: <ProtectedRoute element={<MainLayout />} />,
		errorElement: (
			<MainLayout>
				<ErrorPage />
			</MainLayout>
		),
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: path.settings(),
				element: <UserEditPage />,
			},
			{
				path: path.history(),
				element: <HistoryPage />,
			},
			{
				path: path.analytics(),
				element: <AnalyticsPage />,
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
			{
				path: path.others(),
				element: <Page404 />,
			},
		],
	},
	{
		path: path.home(),
		element: <AuthenticationRoute element={<AuthLayout />} />,
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

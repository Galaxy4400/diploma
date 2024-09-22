import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { OperationCreateForm } from "../../../features/operation";

export const OperationCreatePage = () => {
	const { authUser } = useAuth();

	const { accounts, categories } = useLoaderData();

	const accountOptions = [
		{ value: "", label: "Счет операции..." },
		...(accounts ? accounts.map(account => ({ value: account.id, label: account.name })) : [])
	];

	const categoryOptions = [
		{ value: "", label: "Категория операции..." },
		...(categories ? categories.map(category => ({ value: category.id, label: category.name })) : [])
	];

	return (
		<div>
			<h1>СТРАНИЦА СОЗДАНИЯ ОПЕРАЦИИ</h1>
			<OperationCreateForm 
				userId={authUser.id} 
				accountOptions={accountOptions} 
				categoryOptions={categoryOptions} 
			/>
		</div>
	)
};
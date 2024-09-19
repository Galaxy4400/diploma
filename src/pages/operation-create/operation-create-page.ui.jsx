import { useLoadAccounts } from "../../entities/accounts";
import { OperationCreateForm } from "../../features/operation";

export const OperationCreatePage = () => {
	const accounts = useLoadAccounts();

	return (
		<div>
			<h1>СТРАНИЦА СОЗДАНИЯ ОПЕРАЦИИ</h1>
			<OperationCreateForm accounts={accounts} />
		</div>
	)
};
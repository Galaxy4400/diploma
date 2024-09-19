import { useAuth } from "../../app/providers/auth";
import { useLoadAccounts } from "../../entities/accounts";
import { OperationCreateForm } from "../../features/operation";

export const OperationCreatePage = () => {
	const { authUser } = useAuth();
	const accounts = useLoadAccounts();

	return (
		<div>
			<h1>СТРАНИЦА СОЗДАНИЯ ОПЕРАЦИИ</h1>
			<OperationCreateForm userId={authUser.id} accounts={accounts} />
		</div>
	)
};
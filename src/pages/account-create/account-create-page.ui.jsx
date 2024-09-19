import { useAuth } from "../../app/providers/auth";
import { AccountCreateForm } from "../../features/account";

export const AccountCreatePage = () => {
	const { authUser } = useAuth();

	return (
		<div>
			<h1>СТРАНИЦА СОЗДАНИЯ СЧЕТА</h1>
			<AccountCreateForm userId={authUser.id} />
		</div>
	)
};
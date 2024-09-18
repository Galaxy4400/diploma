import { useLoadAccount } from "../../entities/account";
import { AccountEditForm } from "../../features/account";

export const AccountEditPage = () => {
	const account = useLoadAccount();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<AccountEditForm accountData={account} />
		</div>
	)
};
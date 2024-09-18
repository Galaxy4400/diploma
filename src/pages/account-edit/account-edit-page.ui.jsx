import { useLoadAccount } from "../../entities/account";
import { EditAccountForm } from "../../features/account";

export const AccountEditPage = () => {
	const account = useLoadAccount();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<EditAccountForm accountData={account} />
		</div>
	)
};
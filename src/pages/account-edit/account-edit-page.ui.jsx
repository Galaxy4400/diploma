import { useParams } from "react-router-dom";
import { useLoadAccount } from "../../entities/account";
import { AccountEditForm } from "../../features/account";

export const AccountEditPage = () => {
	const { id: accountId } = useParams();

	const account = useLoadAccount(accountId);

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<AccountEditForm accountData={account} />
		</div>
	)
};
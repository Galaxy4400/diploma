import { useParams } from "react-router-dom";
import { AccountEditForm } from "../../../features/account";
import { useAccountEditPageNeededData } from "../lib";

export const AccountEditPage = () => {
	const { id: accountId } = useParams();

	const { account } = useAccountEditPageNeededData(accountId)

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<AccountEditForm accountData={account} />
		</div>
	)
};
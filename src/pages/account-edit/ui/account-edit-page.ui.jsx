import { useLoaderData } from "react-router-dom";
import { AccountEditForm } from "../../../features/account";

export const AccountEditPage = () => {
	const account = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<AccountEditForm accountData={account} />
		</div>
	)
};
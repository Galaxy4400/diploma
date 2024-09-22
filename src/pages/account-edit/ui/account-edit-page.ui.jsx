import { useLoaderData } from "react-router-dom";
import { AccountEditForm } from "../../../features/account";
import { AsyncComponent } from "../../../shared/ui";

export const AccountEditPage = () => {
	const { account } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<AsyncComponent resolve={account} element={<AccountEditForm />} fallback={<div>Загрузка данных...</div>} />
		</div>
	)
};
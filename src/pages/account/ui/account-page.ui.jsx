import { useLoaderData } from "react-router-dom";
import { AsyncComponent } from "../../../shared/ui";
import { Account } from "../../../widgets/account";


export const AccountPage = () => {
	const { account } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			<AsyncComponent resolve={account} element={<Account />} fallback={<div>Загрузка данных...</div>} />
		</div>
	)
};
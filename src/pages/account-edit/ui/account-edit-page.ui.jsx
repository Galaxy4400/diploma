import { useLoaderData } from "react-router-dom";
import { AccountEditForm } from "../../../features/account";
import { AsyncComponent, Loading } from "../../../shared/ui/components";

export const AccountEditPage = () => {
	const { account } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<AsyncComponent resolve={account} element={<AccountEditForm />} fallback={<Loading />} />
		</div>
	)
};
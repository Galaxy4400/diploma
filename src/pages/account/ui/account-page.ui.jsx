import { useLoaderData } from "react-router-dom";
import { Account } from "../../../widgets/account";
import { AsyncComponent, Loading } from "../../../shared/ui/components";


export const AccountPage = () => {
	const { account } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			<AsyncComponent resolve={account} element={<Account />} fallback={<Loading />} />
		</div>
	)
};
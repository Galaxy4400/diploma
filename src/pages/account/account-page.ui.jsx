import { useLoadAccount } from "../../entities/account";
import { Account } from "../../widgets/account";


export const AccountPage = () => {
	const account = useLoadAccount();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>

			<Account accountData={account} />
		</div>
	)
};
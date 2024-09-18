import { Account, useLoadAccount } from "../../entities/account";


export const AccountPage = () => {
	const account = useLoadAccount();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
	
			<Account accountData={account} />
		</div>
	)
};
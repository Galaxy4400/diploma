import { useLoadAccount } from "../../entities/account";
import { ErrorHandler } from "../../shared/ui";
import { Account } from "../../widgets/account";


export const AccountPage = () => {
	const account = useLoadAccount();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			{account ? (
				<Account accountData={account} />
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)}
		</div>
	)
};
import { useLoadAccount } from "../../entities/account";
import { ErrorHandler } from "../../shared/ui";
import { Account } from "../../widgets/account";


export const HistoryPage = () => {
	// const account = useLoadAccount();

	return (
		<div>
			<h1>СТРАНИЦА ИСТОРИИ</h1>
			{/* {account ? (
				<Account accountData={account} />
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)} */}
		</div>
	)
};
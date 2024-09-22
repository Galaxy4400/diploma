import { useParams } from "react-router-dom";
import { ErrorHandler } from "../../../shared/ui";
import { Account } from "../../../widgets/account";
import { OperationsList } from "../../../widgets/operations-list";
import { useAccountPageNeededData } from "../lib/use-account-page-needed-data";


export const AccountPage = () => {
	const { id: accountId } = useParams();
	
	const { account, operations } = useAccountPageNeededData(accountId);

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			{account ? (
				<div>
					<Account accountData={account} />
					<OperationsList operations={operations} accountId={accountId} />
				</div>
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)}
		</div>
	)
};
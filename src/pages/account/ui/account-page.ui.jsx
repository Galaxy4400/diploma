import { useLoaderData, useParams } from "react-router-dom";
import { ErrorHandler } from "../../../shared/ui";
import { Account } from "../../../widgets/account";
import { OperationsList } from "../../../widgets/operations-list";


export const AccountPage = () => {
	const { id, account, operations } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			{account ? (
				<div>
					<Account accountData={account} />
					<OperationsList operations={operations} accountId={id} />
				</div>
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)}
		</div>
	)
};
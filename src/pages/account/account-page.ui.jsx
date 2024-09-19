import { useParams } from "react-router-dom";
import { useLoadAccount } from "../../entities/account";
import { ErrorHandler } from "../../shared/ui";
import { Account } from "../../widgets/account";
import { OperationsList } from "../../widgets/operations-list";
import { useLoadOperations } from "../../entities/operations";


export const AccountPage = () => {
	const { id } = useParams();

	const account = useLoadAccount(id);
	const operations = useLoadOperations(id);

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			{account ? (
				<div>
					<Account accountData={account} />
					<OperationsList operations={operations} />
				</div>
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)}
		</div>
	)
};
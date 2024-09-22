import { useLoaderData } from "react-router-dom";
import { AsyncComponent, ErrorHandler } from "../../../shared/ui";
import { Account } from "../../../widgets/account";
import { OperationsList } from "../../../widgets/operations-list";


export const AccountPage = () => {
	const { id, account, operations } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
			{account ? (
				<div>
					<AsyncComponent resolve={account} element={<Account />} fallback={<div>Загрузка данных...</div>} />
					<AsyncComponent resolve={operations} element={<OperationsList accountId={id} />} fallback={<div>Загрузка данных...</div>} />
				</div>
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)}
		</div>
	)
};
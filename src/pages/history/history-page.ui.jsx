import { useLoadOperations } from "../../entities/operations";
import { ErrorHandler } from "../../shared/ui";
import { OperationsList } from "../../widgets/operations-list";


export const HistoryPage = () => {
	const operations = useLoadOperations();

	return (
		<div>
			<h1>СТРАНИЦА ИСТОРИИ</h1>
			{operations?.length ? (
				<OperationsList operations={operations} />
			) : (
				<ErrorHandler message="Вы не совершили ни одной операции" />
			)}
		</div>
	)
};
import { useLoaderData } from "react-router-dom";
import { ErrorHandler, WithLoader } from "../../../shared/ui";
import { OperationsList } from "../../../widgets/operations-list";


export const HistoryPage = () => {
	const operations = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА ИСТОРИИ</h1>
			<WithLoader isLoading={!operations}>
				{operations?.length ? (
					<OperationsList operations={operations} />
				) : (
					<ErrorHandler message="Вы не совершили ни одной операции" />
				)}
			</WithLoader>
		</div>
	)
};
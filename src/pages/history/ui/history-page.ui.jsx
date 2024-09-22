import { ErrorHandler, WithLoader } from "../../../shared/ui";
import { OperationsList } from "../../../widgets/operations-list";
import { useHistoryPageNeededData } from "../lib/use-history-page-needed-data";


export const HistoryPage = () => {
	const { operations } = useHistoryPageNeededData();

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
import { useLoaderData } from "react-router-dom";
import { AsyncComponent, ErrorHandler, Loader } from "../../../shared/ui";
import { OperationsList } from "../../../widgets/operations-list";


export const HistoryPage = () => {
	const { operations } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА ИСТОРИИ</h1>
				<AsyncComponent resolve={operations} fallback={<div>Загрузка данных...</div>}>
					{(operations) => operations?.length ? (
						<OperationsList operations={operations} />
					) : (
						<ErrorHandler message="Вы не совершили ни одной операции" />
					)}
				</AsyncComponent>
		</div>
	)
};
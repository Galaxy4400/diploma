import { useLoadOperation } from "../../entities/operation";
import { ErrorHandler } from "../../shared/ui";
import { Operation } from "../../widgets/operation";


export const OperationPage = () => {
	const operation = useLoadOperation();
	
	return (
		<div>
			<h1>СТРАНИЦА ОПЕРАЦИИ</h1>
			{operation ? (
				<Operation operationData={operation} />
			) : (
				<ErrorHandler message="Такой счет не найден" />
			)}
		</div>
	)
};
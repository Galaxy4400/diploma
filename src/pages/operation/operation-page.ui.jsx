import { useParams } from "react-router-dom";
import { useLoadOperation } from "../../entities/operation";
import { ErrorHandler } from "../../shared/ui";
import { Operation } from "../../widgets/operation";


export const OperationPage = () => {
	const { id: operationId } = useParams();

	const operation = useLoadOperation(operationId);
	
	return (
		<div>
			<h1>СТРАНИЦА ОПЕРАЦИИ</h1>
			{operation ? (
				<Operation operationData={operation} />
			) : (
				<ErrorHandler message="Такая операция не найдена" />
			)}
		</div>
	)
};
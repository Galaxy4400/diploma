import { useLoaderData } from "react-router-dom";
import { ErrorHandler } from "../../../shared/ui";
import { Operation } from "../../../widgets/operation/ui";


export const OperationPage = () => {
	const operation = useLoaderData();
	
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
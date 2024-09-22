import { useLoaderData } from "react-router-dom";
import { AsyncComponent } from "../../../shared/ui";
import { Operation } from "../../../widgets/operation/ui";


export const OperationPage = () => {
	const { operation } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА ОПЕРАЦИИ</h1>
			<AsyncComponent resolve={operation} element={<Operation />} fallback={<Loading />} />
		</div>
	)
};
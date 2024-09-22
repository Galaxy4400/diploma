import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { OperationCreateForm } from "../../../features/operation";
import { AsyncComponent } from "../../../shared/ui";

export const OperationCreatePage = () => {
	const { authUser } = useAuth();

	const { selectorsData } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА СОЗДАНИЯ ОПЕРАЦИИ</h1>
			<AsyncComponent resolve={selectorsData} element={<OperationCreateForm userId={authUser.id} />} fallback={<div>Загрузка данных...</div>} />
		</div>
	)
};
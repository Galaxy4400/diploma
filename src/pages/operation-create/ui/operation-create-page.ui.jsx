import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { OperationCreateForm } from "../../../features/operation";
import { AsyncComponent, Loading } from "../../../shared/ui/components";
import { Container } from "../../../shared/ui/technical";
import { PageHeader } from "../../../widgets/page-header";

export const OperationCreatePage = () => {
	const { authUser } = useAuth();

	const { selectorsData } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Создание операции" />
			<AsyncComponent resolve={selectorsData} element={<OperationCreateForm userId={authUser.id} />} fallback={<Loading />} />
		</Container>
	)
};
import { useAuth } from "../../app/providers/auth";
import { CategoryCreateForm } from "../../features/category";
import { Container } from "../../shared/ui/technical";
import { PageHeader } from "../../widgets/page-header";


export const CategoryCreatePage = () => {
	const { authUser } = useAuth();

	return (
		<Container>
			<PageHeader title="Создание категории" />
			<CategoryCreateForm userId={authUser.id} />
		</Container>
	)
};
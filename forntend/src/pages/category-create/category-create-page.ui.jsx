import { CategoryCreateForm } from '../../features/category';
import { Container } from '../../shared/ui/components';
import { PageHeader } from '../../widgets/page-header';

export const CategoryCreatePage = () => {
	return (
		<Container>
			<PageHeader title="Создание категории" />
			<CategoryCreateForm />
		</Container>
	);
};

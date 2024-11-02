import { CategoryEditForm } from 'features/category';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';

export const CategoryEditPage = () => {
	return (
		<Container>
			<PageHeader title="Редактирование категории" />
			<CategoryEditForm />
		</Container>
	);
};

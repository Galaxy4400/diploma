import { Category } from 'widgets/category';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';

export const CategoryPage = () => {
	return (
		<Container>
			<PageHeader title="Информация о категории" />
			<Category />
		</Container>
	);
};

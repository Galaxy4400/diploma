import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Loading } from 'shared/ui/components';
import { Category } from 'widgets/category';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { ID } from 'shared/types';
import { CategoryType } from 'shared/api/category';

interface CategoryPageLoaderData {
	id: ID;
	category: Promise<CategoryType>;
}

export const CategoryPage = () => {
	const { category } = useLoaderData() as CategoryPageLoaderData;

	return (
		<Container>
			<PageHeader title="Информация о категории" />
			<AsyncComponent resolve={category} element={<Category />} fallback={<Loading />} />
		</Container>
	);
};

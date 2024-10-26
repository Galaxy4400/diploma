import { useLoaderData } from 'react-router-dom';
import { CategoryEditForm } from 'features/category';
import { AsyncComponent, Loading } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { ID } from 'shared/types';
import { CategoryType } from 'entities/category';

interface CategoryEditPageLoaderData {
	id: ID;
	category: Promise<CategoryType>;
}

export const CategoryEditPage = () => {
	const { category } = useLoaderData() as CategoryEditPageLoaderData;

	return (
		<Container>
			<PageHeader title="Редактирование категории" />
			<AsyncComponent resolve={category} element={<CategoryEditForm />} fallback={<Loading />} />
		</Container>
	);
};

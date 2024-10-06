import { useLoaderData } from 'react-router-dom';
import { CategoryEditForm } from '../../../features/category';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';

export const CategoryEditPage = () => {
	const { category } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Редактирование категории" />
			<AsyncComponent resolve={category} element={<CategoryEditForm />} fallback={<Loading />} />
		</Container>
	);
};

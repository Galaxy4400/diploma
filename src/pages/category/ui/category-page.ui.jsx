import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Category } from '../../../widgets/category';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';

export const CategoryPage = () => {
	const { category } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Информация о категории" />
			<AsyncComponent resolve={category} element={<Category />} fallback={<Loading />} />
		</Container>
	);
};

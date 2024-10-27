import { useParams } from 'react-router-dom';
import { CategoryEditForm } from 'features/category';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import {
	getCategoryData,
	selectCategoryDataId,
	selectCategoryDataLoading,
} from 'entities/category/category-data';
import { useEffect } from 'react';

export const CategoryEditPage = () => {
	const { id } = useParams();
	const currentCategoryId = useAppSelector(selectCategoryDataId);
	const dispatch = useAppDispatch();
	const loading = useAppSelector(selectCategoryDataLoading);

	useEffect(() => {
		if (id && id !== currentCategoryId) dispatch(getCategoryData(id));
	}, [currentCategoryId, dispatch, id]);

	return (
		<Container>
			<PageHeader title="Редактирование категории" />
			<LoadingComponent element={<CategoryEditForm />} fallback={<Loading />} loading={loading} />
		</Container>
	);
};

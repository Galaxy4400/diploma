import { useLoaderData, useParams } from 'react-router-dom';
import { AsyncComponent, Loading, LoadingComponent } from 'shared/ui/components';
import { Operation } from 'widgets/operation';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchOperationData, selectOperationDataLoading } from 'shared/constants';
import { useEffect } from 'react';

export const OperationPage = () => {
	const { id } = useParams();
	const loading = useAppSelector(selectOperationDataLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) dispatch(fetchOperationData(id));
	}, [dispatch, id]);

	return (
		<Container>
			<PageHeader title="Информация об операции" />
			<LoadingComponent element={<Operation />} fallback={<Loading />} loading={loading} />
		</Container>
	);
};

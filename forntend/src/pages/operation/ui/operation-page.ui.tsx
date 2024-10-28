import { useParams } from 'react-router-dom';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Operation } from 'widgets/operation';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { useEffect } from 'react';
import { fetchGetOperationData, selectOperationDataLoading } from 'entities/operation/operation-data';

export const OperationPage = () => {
	const { id } = useParams();
	const loading = useAppSelector(selectOperationDataLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) dispatch(fetchGetOperationData(id));
	}, [dispatch, id]);

	return (
		<Container>
			<PageHeader title="Информация об операции" />
			<LoadingComponent element={<Operation />} fallback={<Loading />} loading={loading} />
		</Container>
	);
};

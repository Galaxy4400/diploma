import { useParams } from 'react-router-dom';
import { AccountEditForm } from 'features/account';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import {
	fetchGetAccount,
	selectAccountDataId,
	selectAccountDataLoading,
} from 'entities/account/account-data';
import { useEffect } from 'react';

export const AccountEditPage = () => {
	const { id } = useParams();
	const currentAccountId = useAppSelector(selectAccountDataId);
	const loading = useAppSelector(selectAccountDataLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id && id !== currentAccountId) dispatch(fetchGetAccount(id));
	}, [dispatch, id, currentAccountId]);

	return (
		<Container>
			<PageHeader title="Редактирование счета" />
			<LoadingComponent element={<AccountEditForm />} fallback={<Loading />} loading={loading} />
		</Container>
	);
};

import css from './account-page.module.scss';
import { Account } from 'widgets/account';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchAccountView, selectAccountLoading } from 'entities/account/account-view';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const AccountPage = () => {
	const { id } = useParams();
	const loading = useAppSelector(selectAccountLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) dispatch(fetchAccountView(id));
	}, [dispatch, id]);

	return (
		<Container>
			<PageHeader title="Информация о счете" />
			<div className={css['main']}>
				<LoadingComponent element={<Account />} fallback={<Loading />} loading={loading} />
				{/* <AsyncComponent resolve={account} element={<OperationsSection />} fallback={<Loading />} /> */}
			</div>
		</Container>
	);
};

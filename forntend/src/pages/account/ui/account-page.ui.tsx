import css from './account-page.module.scss';
import { Account } from 'widgets/account';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import {
	fetchGetAccountData,
	selectAccountDataId,
	selectAccountDataLoading,
} from 'entities/account/account-data';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetOperationList, selectOperationListLoading } from 'entities/operation/operation-list';
import { OPERATIONS_PER_LOAD } from 'shared/constants';
import { AccountOperationsSection } from './components';

export const AccountPage = () => {
	const { id } = useParams();
	const currentAccountId = useAppSelector(selectAccountDataId);
	const accountLoading = useAppSelector(selectAccountDataLoading);
	const operationListLoading = useAppSelector(selectOperationListLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id && id !== currentAccountId) {
			dispatch(fetchGetAccountData(id));
			dispatch(fetchGetOperationList({ account: id, limit: OPERATIONS_PER_LOAD }));
		}
	}, [currentAccountId, dispatch, id]);

	return (
		<Container>
			<PageHeader title="Информация о счете" />
			<div className={css['main']}>
				<LoadingComponent element={<Account />} fallback={<Loading />} loading={accountLoading} />
				<LoadingComponent
					element={<AccountOperationsSection />}
					fallback={<Loading />}
					loading={operationListLoading}
				/>
			</div>
		</Container>
	);
};

import css from './main-page.module.scss';
import { useEffect } from 'react';
import { path } from 'shared/lib/router';
import { AccountsMain } from 'widgets/accounts-main';
import { CategoriesMain } from 'widgets/categories-main';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { Action } from './components';
import { OperationsMain } from 'widgets/operations-main';
import { OperationsList } from 'widgets/operations-list';
import { Icons } from 'shared/types';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchGetAccountList, selectAccountListLoading } from 'entities/account/account-list';
import { fetchGetOperationList, selectOperationListLoading } from 'entities/operation/operation-list';
import { fetchGetCategoryList, selectCategoryListLoading } from 'entities/category/category-list';
import { OPERATIONS_PER_LOAD } from 'shared/constants';

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const accountListLoading = useAppSelector(selectAccountListLoading);
	const operationListLoading = useAppSelector(selectOperationListLoading);
	const categoryListLoading = useAppSelector(selectCategoryListLoading);

	useEffect(() => {
		dispatch(fetchGetAccountList());
		dispatch(fetchGetOperationList({ limit: OPERATIONS_PER_LOAD }));
		dispatch(fetchGetCategoryList());
	}, [dispatch]);

	return (
		<Container className={css['main']}>
			<header className={css['actions']}>
				<Action to={path.account.create()} title="Создать счет" icon={Icons.dock} />
				<Action to={path.operation.create()} title="Добавить операцию" icon={Icons.wallet} />
				<Action to={path.category.create()} title="Добавить категорию" icon={Icons.dock2} />
			</header>
			<div className={css['content']}>
				<LoadingComponent element={<AccountsMain />} fallback={<Loading />} loading={accountListLoading} />
				<LoadingComponent
					element={<OperationsMain operationsListSlot={<OperationsList />} />}
					fallback={<Loading />}
					loading={operationListLoading}
				/>
				<LoadingComponent element={<CategoriesMain />} fallback={<Loading />} loading={categoryListLoading} />
			</div>
		</Container>
	);
};

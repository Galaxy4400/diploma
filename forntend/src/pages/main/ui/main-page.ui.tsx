import css from './main-page.module.scss';
import { AccountsMain } from 'widgets/accounts-main';
import { useLoaderData } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { CategoriesMain } from 'widgets/categories-main';
import { AsyncComponent, Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { Action } from './components';
import { OperationsMain } from 'widgets/operations-main';
import { OperationsList } from 'widgets/operations-list';
import { Icons } from 'shared/types';
import { AccountType } from 'shared/api/account';
import { CategoryType } from 'shared/api/category';
import { OperationType } from 'shared/api/operation';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchAccountList, selectAccountListLoading } from 'entities/account/account-list';
import { useEffect } from 'react';

interface MainPageLoaderData {
	accounts: Promise<AccountType[]>;
	operations: Promise<OperationType[]>;
	categories: Promise<CategoryType[]>;
}

export const MainPage = () => {
	const { operations, categories } = useLoaderData() as MainPageLoaderData;

	const dispatch = useAppDispatch();
	const accountsLoading = useAppSelector(selectAccountListLoading);

	useEffect(() => {
		dispatch(fetchAccountList());
	}, [dispatch]);

	return (
		<Container className={css['main']}>
			<header className={css['actions']}>
				<Action to={path.account.create()} title="Создать счет" icon={Icons.dock} />
				<Action to={path.operation.create()} title="Добавить операцию" icon={Icons.wallet} />
				<Action to={path.category.create()} title="Добавить категорию" icon={Icons.dock2} />
			</header>
			<div className={css['content']}>
				<LoadingComponent element={<AccountsMain />} fallback={<Loading />} loading={accountsLoading} />
				{/* <AsyncComponent resolve={accounts} element={<AccountsMain />} fallback={<Loading />} /> */}
				<AsyncComponent
					resolve={operations}
					element={<OperationsMain operationsListSlot={<OperationsList />} />}
					fallback={<Loading />}
				/>
				<AsyncComponent resolve={categories} element={<CategoriesMain />} fallback={<Loading />} />
			</div>
		</Container>
	);
};

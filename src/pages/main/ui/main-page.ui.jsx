import css from './main-page.module.scss';
import { AccountsBlock } from '../../../widgets/accounts-block';
import { useLoaderData } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { CategoriesBlock } from '../../../widgets/categories-block';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { ICON } from '../../../shared/lib/icons';
import { Action } from './components';
import { OperationsBlock } from '../../../widgets/operations-block';

export const MainPage = () => {
	const { accounts, operations, categories } = useLoaderData();

	return (
		<Container className={css['main']}>
			<header className={css['actions']}>
				<Action to={path.account.create()} title="Создать счет" icon={ICON.DOCK} />
				<Action to={path.operation.create()} title="Добавить операцию" icon={ICON.WALLET} />
				<Action to={path.category.create()} title="Добавить категорию" icon={ICON.DOCK2} />
			</header>
			<div className={css['content']}>
				<AsyncComponent resolve={accounts} element={<AccountsBlock />} fallback={<Loading />} />
				<AsyncComponent resolve={operations} element={<OperationsBlock />} fallback={<Loading />} />
				<AsyncComponent resolve={categories} element={<CategoriesBlock />} fallback={<Loading />} />
			</div>
		</Container>
	);
};

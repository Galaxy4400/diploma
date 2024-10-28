import css from './main-page.module.scss';
import { path } from 'shared/lib/router';
import { AccountsMain } from 'widgets/accounts-main';
import { CategoriesMain } from 'widgets/categories-main';
import { Container } from 'shared/ui/components';
import { Action } from './components';
import { OperationsMain } from 'widgets/operations-main';
import { Icons } from 'shared/types';
import { OperationsList } from 'widgets/operations';

export const MainPage = () => {
	return (
		<Container className={css['main']}>
			<header className={css['actions']}>
				<Action to={path.account.create()} title="Создать счет" icon={Icons.dock} />
				<Action to={path.operation.create()} title="Добавить операцию" icon={Icons.wallet} />
				<Action to={path.category.create()} title="Добавить категорию" icon={Icons.dock2} />
			</header>
			<div className={css['content']}>
				<AccountsMain />
				<OperationsMain renderOperationList={(operations) => <OperationsList operations={operations} />} />
				<CategoriesMain />
			</div>
		</Container>
	);
};

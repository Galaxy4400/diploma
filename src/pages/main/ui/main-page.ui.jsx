import css from './main-page.module.scss';
import { Accounts } from '../../../widgets/accounts';
import { useLoaderData } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { Categories } from '../../../widgets/categories';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { ICON } from '../../../shared/lib/icons';
import { Action } from './components';
import { Operations } from '../../../widgets/operations';
import { OperationsList } from '../../../widgets/operations-list';

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
				<AsyncComponent resolve={accounts} element={<Accounts />} fallback={<Loading />} />
				<AsyncComponent
					resolve={operations}
					element={
						<Operations renderOperationsList={(operations) => <OperationsList operations={operations} />} />
					}
					fallback={<Loading />}
				/>
				<AsyncComponent resolve={categories} element={<Categories />} fallback={<Loading />} />
			</div>
		</Container>
	);
};

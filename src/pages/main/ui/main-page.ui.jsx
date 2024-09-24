import css from './main-page.module.scss';
import { AccountsList } from "../../../widgets/accounts-list"
import { Link, useLoaderData } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { CategoriesList } from "../../../widgets/categories-list";
import { AsyncComponent, Loading } from "../../../shared/ui/components";
import { Container } from '../../../shared/ui/technical';
import { Action } from './action.ui';
import { ICON_NAME } from '../../../shared/lib/icons';


export const MainPage = () => {
	const { accounts, categories } = useLoaderData();

	return (
		<Container>
			<div className={css['main']}>
				<header className={css['actions']}>
					<Action to={path.account.create()} title="Создать счет" icon={ICON_NAME.DOCK} />
					<Action to={path.operation.create()} title="Добавить операцию" icon={ICON_NAME.WALLET2} />
					<Action to={path.category.create()} title="Добавить категорию" icon={ICON_NAME.DOCK2} />
				</header>
				<div>
					<AsyncComponent resolve={accounts} element={<AccountsList/>} fallback={<Loading />} />
					<AsyncComponent resolve={categories} element={<CategoriesList/>} fallback={<Loading />} />
					<div>Возможность открыть страницу добавления/редактирования счета или категории;</div>
					<Link to={path.operation.create()}>Добавить операцию</Link>
					<div>Аналитика (графики);</div>
				</div>
			</div>
		</Container>
	)
}
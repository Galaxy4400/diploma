import css from './main-page.module.scss';
import { AccountsBlock } from "../../../widgets/accounts-block"
import { useLoaderData } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { CategoriesList } from "../../../widgets/categories-list";
import { AsyncComponent, Block, Loading } from "../../../shared/ui/components";
import { Container } from '../../../shared/ui/technical';
import { ICON_NAME } from '../../../shared/lib/icons';
import { Action } from './components';


export const MainPage = () => {
	const { accounts, categories } = useLoaderData();

	return (
		<Container className={css['main']}>
			<header className={css['actions']}>
				<Action to={path.account.create()} title="Создать счет" icon={ICON_NAME.DOCK} />
				<Action to={path.operation.create()} title="Добавить операцию" icon={ICON_NAME.WALLET2} />
				<Action to={path.category.create()} title="Добавить категорию" icon={ICON_NAME.DOCK2} />
			</header>
			<div className={css['content']}>
				<AsyncComponent resolve={accounts} element={<AccountsBlock/>} fallback={<Loading />} />
				<Block>Недавние операции</Block>
				<AsyncComponent resolve={categories} element={<CategoriesList/>} fallback={<Loading />} />
			</div>
		</Container>
	)
}

import { AccountsList } from "../../../widgets/accounts-list"
import { Link, useLoaderData } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { CategoriesList } from "../../../widgets/categories-list";
import { AsyncComponent, Loading } from "../../../shared/ui/components";


export const MainPage = () => {
	const { accounts, categories } = useLoaderData();

	return (
		<div>
			<h1>ГЛАВНАЯ СТРАНИЦА</h1>
			<div>
				<AsyncComponent resolve={accounts} element={<AccountsList/>} fallback={<Loading />} />
				<AsyncComponent resolve={categories} element={<CategoriesList/>} fallback={<Loading />} />
				<div>Возможность открыть страницу добавления/редактирования счета или категории;</div>
				<Link to={path.operation.create()}>Добавить операцию</Link>
				<div>Аналитика (графики);</div>
			</div>
		</div>
	)
}
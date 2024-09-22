import { AccountsList } from "../../../widgets/accounts-list"
import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { CategoriesList } from "../../../widgets/categories-list";
import { useMainPageNeededData } from "../lib/use-main-page-needed-data";


export const MainPage = () => {
	const { accounts, categories } = useMainPageNeededData();

	return (
		<div>
			<h1>ГЛАВНАЯ СТРАНИЦА</h1>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
				<AccountsList accounts={accounts} />
				<CategoriesList categories={categories} />
				<div>Возможность открыть страницу добавления/редактирования счета или категории;</div>
				<Link to={path.operation.create()}>Добавить операцию</Link>
				<div>Аналитика (графики);</div>
			</div>
		</div>
	)
}
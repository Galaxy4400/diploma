import { AccountsList } from "../../widgets/accounts-list"
import { useLoadAccounts } from "../../entities/accounts"


export const MainPage = () => {
	const accounts = useLoadAccounts();

	return (
		<div>
			<h1>ГЛАВНАЯ СТРАНИЦА</h1>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
				<AccountsList accounts={accounts} />
				<div>Отображение категорий расходов/доходов;</div>
				<div>Возможность открыть страницу добавления/редактирования счета или категории;</div>
				<div>Возможность открыть страницу добавления операции.</div>
				<div>Аналитика (графики);</div>
			</div>
		</div>
	)
}

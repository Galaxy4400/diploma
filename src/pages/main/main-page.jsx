import { useAuth } from "../../app/providers/auth-provider"
import { useServer } from "../../app/providers/server-provider";

export const MainPage = () => {
	const { logout } = useAuth();
	const { requestServer } = useServer();

	const onLogout = () => {
		requestServer.logout()
			.then(() => logout());
	};

	return (
		<>
			<h1>MainPage</h1>

			<div>Аналитика (графики);</div>
			<div>Отображение счетов;</div>
			<div>Отображение категорий расходов/доходов;</div>
			<div>Возможность открыть страницу добавления/редактирования счета или категории;</div>
			<div>Возможность открыть страницу добавления операции.</div>

			<button onClick={() => onLogout()}>Выйти</button>
		</>
	)
}

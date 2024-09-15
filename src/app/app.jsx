import './assets/styles.scss';
import { AppRouter } from "./router/app-router";
import { Providers } from './providers/providers';

export const App = () => {
	return (
		<Providers>
			<AppRouter />
		</Providers>
	)
}

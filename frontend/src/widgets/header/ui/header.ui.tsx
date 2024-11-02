import css from './header.module.scss';
import { Container } from 'shared/ui/components';
import { Actions, Logo, Menu } from './components';

export const Header = () => {
	return (
		<header className={css['header']}>
			<Container>
				<div className={css['body']}>
					<Logo />
					<Menu />
					<Actions />
				</div>
			</Container>
		</header>
	);
};

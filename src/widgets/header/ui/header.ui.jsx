import css from "./header.module.scss";
import { Container } from "../../../shared/ui/technical";
import { Logo } from "./logo.ui";
import { Menu } from "./menu.ui";
import { Actions } from "./actions.ui";


export const Header = () => {
	return (
		<header className={css['header']}>
			<Container>
				<div className={css['body']}>
					<div className={css['column-logo']}>
						<Logo />
					</div>
					<div className={css['column-menu']}>
						<Menu />
					</div>
					<div className={css['column-actions']}>
						<Actions />
					</div>
				</div>
			</Container>
		</header>
	)
};
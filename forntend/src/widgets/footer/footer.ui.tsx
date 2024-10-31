import css from './footer.module.scss';
import { Container } from 'shared/ui/components';

export const Footer = () => {
	return (
		<footer className={css['footer']}>
			<Container className={css['container']}>
				<span>Дипломный проект</span> <span>Моисеев Евгений</span>
			</Container>
		</footer>
	);
};

import css from './footer.module.scss';
import { Container } from '../../shared/ui/technical';

export const Footer = () => {
	return (
		<footer className={css['footer']}>
			<Container>Footer</Container>
		</footer>
	);
};

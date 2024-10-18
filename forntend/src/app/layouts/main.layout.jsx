import css from './layouts.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';
import { LayoutWrapper } from '../../shared/ui/components';

export const MainLayout = ({ children }) => {
	return (
		<LayoutWrapper>
			<Header />
			<main className={css['main']}>{children || <Outlet />}</main>
			<Footer />
		</LayoutWrapper>
	);
};

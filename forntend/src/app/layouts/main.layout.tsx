import css from './layouts.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';
import { LayoutWrapper } from '../../shared/ui/components';

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<LayoutWrapper>
			<Header />
			<main className={css['main']}>{children || <Outlet />}</main>
			<Footer />
		</LayoutWrapper>
	);
};

import css from './layouts.module.scss';
import { Outlet } from 'react-router-dom';
import { WithChildren } from '@/shared/types';
import { LayoutWrapper } from '@/shared/ui/components';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const MainLayout = ({ children }: WithChildren) => {
	return (
		<LayoutWrapper>
			<Header />
			<main className={css['main']}>{children || <Outlet />}</main>
			<Footer />
		</LayoutWrapper>
	);
};

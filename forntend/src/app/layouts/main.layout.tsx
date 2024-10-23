import css from './layouts.module.scss';
import { Outlet } from 'react-router-dom';
import { WithChildrenProp } from '@/shared/types';
import { LayoutWrapper } from '@/shared/ui/components';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const MainLayout = ({ children }: WithChildrenProp) => {
	return (
		<LayoutWrapper>
			<Header />
			<main className={css['main']}>{children || <Outlet />}</main>
			<Footer />
		</LayoutWrapper>
	);
};

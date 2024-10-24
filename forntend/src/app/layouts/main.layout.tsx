import css from './layouts.module.scss';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from '@/shared/ui/components';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<LayoutWrapper>
			<Header />
			<main className={css['main']}>{children || <Outlet />}</main>
			<Footer />
		</LayoutWrapper>
	);
};

import { PropsWithElement } from '@/shared/types';
import { PropsWithChildren, ReactNode, Suspense } from 'react';
import { Await } from 'react-router-dom';

interface AsyncComponentProps<T> extends PropsWithChildren, PropsWithElement {
	resolve: Promise<T>;
	fallback: ReactNode;
}

export const AsyncComponent = <T,>({ resolve, element, fallback, children }: AsyncComponentProps<T>) => {
	return (
		<Suspense fallback={fallback}>
			<Await resolve={resolve}>{element || children}</Await>
		</Suspense>
	);
};

import css from './operations-pagination.module.scss';
import { Button } from 'shared/ui/components';
import { useOperationsPagination } from '../model';
import { ID } from 'shared/types';

interface OperationsPaginationProps {
	accountId: ID | null;
}

export const OperationsPagination = ({ accountId }: OperationsPaginationProps) => {
	const { loadHandler, isLoading, isLoadedAll } = useOperationsPagination(accountId);

	return (
		<div className={css['block']}>
			{!isLoadedAll ? (
				<Button className={css['button']} onClick={loadHandler} disabled={isLoading} loading={isLoading}>
					Загрузить ещё
				</Button>
			) : (
				<h5>Загружены все операции</h5>
			)}
		</div>
	);
};

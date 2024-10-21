import css from './operations-pagination.module.scss';
import { Button } from '../../../../shared/ui/components';
import { useOperationsPagination } from '../model';

export const OperationsPagination = ({ accountId = null }) => {
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

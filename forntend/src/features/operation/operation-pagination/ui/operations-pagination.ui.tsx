import css from './operations-pagination.module.scss';
import { Button } from 'shared/ui/components';
import { ID } from 'shared/types';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { calcPage } from 'shared/utils';
import { OPERATIONS_PER_LOAD } from 'shared/constants';
import { useToast } from 'app/providers/toast';
import {
	fetchGetOperationList,
	selectOperationList,
	selectOperationListError,
	selectOperationListIsAll,
	selectOperationListLoading,
} from 'entities/operation/operation-list';

interface OperationsPaginationProps {
	accountId: ID;
}

export const OperationsPagination = ({ accountId }: OperationsPaginationProps) => {
	const dispatch = useAppDispatch();
	const operations = useAppSelector(selectOperationList);
	const isLoading = useAppSelector(selectOperationListLoading);
	const isAll = useAppSelector(selectOperationListIsAll);
	const error = useAppSelector(selectOperationListError);
	const { showToast } = useToast();

	const loadHandler = async () => {
		await dispatch(
			fetchGetOperationList({ account: accountId, page: calcPage(operations.length, OPERATIONS_PER_LOAD) }),
		).unwrap();
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

	return (
		<div className={css['block']}>
			{!isAll ? (
				<Button className={css['button']} onClick={loadHandler} disabled={isLoading} loading={isLoading}>
					Загрузить ещё
				</Button>
			) : (
				<h5>Загружены все операции</h5>
			)}
		</div>
	);
};

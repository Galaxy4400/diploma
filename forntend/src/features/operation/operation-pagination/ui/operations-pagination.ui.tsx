import css from './operations-pagination.module.scss';
import { Button } from 'shared/ui/components';
import { ID } from 'shared/types';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { calcPage } from 'shared/utils';
import { OPERATIONS_PER_LOAD } from 'shared/constants';
import { useToast } from 'app/providers/toast';
import {
	fetchGetOperationListAdd,
	selectOperationList,
	selectOperationListAdding,
	selectOperationListError,
	selectOperationListIsAll,
	selectOperationListLimit,
} from 'entities/operation/operation-list';

interface OperationsPaginationProps {
	accountId: ID;
}

export const OperationsPagination = ({ accountId }: OperationsPaginationProps) => {
	const dispatch = useAppDispatch();
	const operations = useAppSelector(selectOperationList);
	const limit = useAppSelector(selectOperationListLimit);
	const isAdding = useAppSelector(selectOperationListAdding);
	const isAll = useAppSelector(selectOperationListIsAll);
	const error = useAppSelector(selectOperationListError);
	const { showToast } = useToast();

	const loadHandler = async () => {
		await dispatch(
			fetchGetOperationListAdd({
				account: accountId,
				page: calcPage(operations.length, limit),
				limit: limit,
			}),
		).unwrap();
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

	return (
		<div className={css['block']}>
			{!isAll ? (
				<Button className={css['button']} onClick={loadHandler} disabled={isAdding} loading={isAdding}>
					Загрузить ещё
				</Button>
			) : (
				<h5>Загружены все операции</h5>
			)}
		</div>
	);
};

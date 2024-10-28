/* eslint-disable no-unused-vars */
import css from './operations-section.module.scss';
import { Link } from 'react-router-dom';
import { Block, Loading } from 'shared/ui/components';
import { path } from 'shared/lib/router';
import { OperationsPagination } from 'features/operations';
import { AccountType } from 'shared/api/account';
import { useEffect } from 'react';
import { OperationsList } from './operations-list.ui';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { OPERATIONS_PER_LOAD } from 'shared/constants';
import {
	fetchGetOperationList,
	selectOperationList,
	selectOperationListLoading,
} from 'entities/operation/operation-list';

interface OperationsSectionProps {
	account?: AccountType;
}

export const OperationsSection = ({ account }: OperationsSectionProps) => {
	const dispatch = useAppDispatch();
	const operations = useAppSelector(selectOperationList);
	const isLoading = useAppSelector(selectOperationListLoading);

	useEffect(() => {
		dispatch(
			fetchGetOperationList({
				...(account ? { account: account.id } : {}),
				limit: OPERATIONS_PER_LOAD,
			}),
		);
	}, [account, dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Block className={css['block']}>
			<header className={css['header']}>
				<h4>Список операций</h4>
				<Link
					className={css['link']}
					to={path.operation.create()}
					state={{ from: { accountId: account?.id } }}
				>
					Создать операцию
				</Link>
			</header>
			<OperationsList operations={operations} />
			<OperationsPagination accountId={account?.id ?? null} />
		</Block>
	);
};

import css from './operation-item.module.scss';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { Icon, IconCategory } from '../../../shared/ui/icons';
import { priceFormat } from '../../../shared/utils';
import { CATEGORY_TYPE } from '../../category';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '../../../shared/constants/datetime-format';
import { Icons } from 'shared/types';
import { OperationType } from '../model';
import { ReactNode } from 'react';

interface OperationItemProps {
	operation: OperationType;
	deleteSlot: ReactNode;
}

export const OperationItem = ({ operation, deleteSlot }: OperationItemProps) => {
	const location = useLocation();

	const amountTypeClass = operation?.category.type === CATEGORY_TYPE.INCOME ? 'income' : 'expense';

	return (
		<div className={css['operation']}>
			<Link className={css['main']} to={path.operation.id(operation.id)} state={{ from: location }}>
				<figure className={css['figure']}>
					{operation.status ? (
						<IconCategory className={css['icon']} name={operation?.category.icon} />
					) : (
						<Icon className={css['abort-icon']} name={Icons.abort} />
					)}
				</figure>
				<div className={css['info']}>
					<span>{operation?.category.name}</span>
					<span className={css['datetime']}>{format(operation.createdAt, DATETIME_FORMAT)}</span>
					<span className={cn(css['amount'], amountTypeClass)}>{priceFormat(operation.amount)}</span>
					<span>Счет: {operation?.account.name}</span>
				</div>
			</Link>
			<div className={css['delete']}>{deleteSlot}</div>
		</div>
	);
};

import css from './operation-view.module.scss';
import cn from 'classnames';
import { Block } from '../../../shared/ui/components';
import { priceFormat } from '../../../shared/lib/utils';
import { Icon, IconCategory } from '../../../shared/ui/icons';
import { CATEGORY_TYPE } from '../../category/lib/category-type';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '../../../shared/constants/datetime-format';
import { Icons } from '@/shared/types';
import { OperationType } from '../model';
import { ReactNode } from 'react';

interface OperationViewProps {
	operation: OperationType;
	deleteSlot: ReactNode;
}

export const OperationView = ({ operation, deleteSlot }: OperationViewProps) => {
	const amountTypeClass = operation?.category.type === CATEGORY_TYPE.INCOME ? 'income' : 'expense';

	return (
		<Block className={css['view']}>
			<h4>Операция №{operation.id}</h4>
			{operation.status ? (
				<IconCategory className={css['icon']} name={operation?.category.icon} />
			) : (
				<Icon className={css['abort-icon']} name={Icons.abort} />
			)}
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{format(operation.createdAt, DATETIME_FORMAT)}</dd>
				</div>
				<div>
					<dt>Тип:</dt>
					<dd>{operation.category.name}</dd>
				</div>
				<div>
					<dt>Сумма:</dt>
					<dd>
						<span className={cn(css['amount'], amountTypeClass)}>{priceFormat(operation.amount)}</span>
					</dd>
				</div>
				<div>
					<dt>Счет:</dt>
					<dd>{operation.account.name}</dd>
				</div>
				<div>
					<dt>Комментарий:</dt>
					<dd>{operation.comment}</dd>
				</div>
			</dl>
			<div className={css['actions']}>{deleteSlot}</div>
		</Block>
	);
};
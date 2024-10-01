import css from './operation-view.module.scss';
import cn from 'classnames';
import { Block } from '../../../shared/ui/components';
import { priceFormat } from '../../../shared/lib/utils';
import { Icon, IconCategory } from '../../../shared/ui/icons';
import { CATEGORY_TYPE } from '../../category/lib/category-type';
import { ICON } from '../../../shared/lib/icons';

export const OperationView = ({ operation, deleteSlot }) => {
	const ammountTypeClass = operation?.category.typeId === CATEGORY_TYPE.INCOME ? 'income' : 'expense';

	return (
		<Block className={css['view']}>
			<h4>Операция №{operation.id}</h4>
			{operation.status ? (
				<IconCategory className={css['icon']} name={operation?.category.icon} />
			) : (
				<Icon className={css['abort-icon']} name={ICON.ABORT} />
			)}
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{operation.createdAt}</dd>
				</div>
				<div>
					<dt>Тип:</dt>
					<dd>{operation.category.name}</dd>
				</div>
				<div>
					<dt>Сумма:</dt>
					<dd>
						<span className={cn(css['amount'], ammountTypeClass)}>{priceFormat(operation.amount)}</span>
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

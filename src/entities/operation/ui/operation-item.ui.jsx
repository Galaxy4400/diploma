import css from './operation-item.module.scss';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { Icon, IconCategory } from '../../../shared/ui/icons';
import { priceFormat } from '../../../shared/lib/utils';
import { CATEGORY_TYPE } from '../../category';
import { ICON } from '../../../shared/lib/icons';

export const OperationItem = ({ operation, deleteSlot }) => {
	const location = useLocation();

	const ammountTypeClass = operation?.category.typeId === CATEGORY_TYPE.INCOME ? 'income' : 'expense';

	return (
		<div className={css['operation']}>
			<Link className={css['main']} to={path.operation.id(operation.id)} state={{ from: location }}>
				<figure className={css['figure']}>
					{operation.status ? (
						<IconCategory className={css['icon']} name={operation?.category.icon} />
					) : (
						<Icon className={css['abort-icon']} name={ICON.ABORT} />
					)}
				</figure>
				<div className={css['info']}>
					<span>{operation?.category.name}</span>
					<span className={css['comment']}>{operation.comment}</span>
					<span className={cn(css['amount'], ammountTypeClass)}>{priceFormat(operation.amount)}</span>
					<span>Счет: {operation?.account.name}</span>
				</div>
			</Link>
			<div className={css['delete']}>{deleteSlot}</div>
		</div>
	);
};

import css from './operation-item.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { IconCategory } from '../../../shared/ui/icons';
import { priceFormat } from '../../../shared/lib/utils';
import { CATEGORY_TYPE } from '../../category';

export const OperationItem = ({ operation, deleteSlot }) => {
	const location = useLocation();

	const ammountTypeClass =
		operation?.category.typeId === CATEGORY_TYPE.INCOME ? 'income' : 'expense';

	return (
		<div className={css['operation']}>
			<Link className={css['main']} to={path.operation.id(operation.id)} state={{ from: location }}>
				<figure className={css['figure']}>
					<IconCategory className={css['icon']} name={operation?.category.icon} />
				</figure>
				<div className={css['info']}>
					<span>{operation?.category.name}</span>
					<span className={css['comment']}>{operation.comment}</span>
					<span className={`${css['amount']} ${ammountTypeClass}`}>
						{priceFormat(operation.amount)}
					</span>
					<span>Счет: {operation?.account.name}</span>
				</div>
			</Link>
			<div className={css['delete']}>{deleteSlot}</div>
		</div>
	);
};

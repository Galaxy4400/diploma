import css from './account-view.module.scss';
import { Link } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { getAccountType } from '../lib/get-account-type';
import { Block } from '../../../shared/ui/components';
import { Icon } from '../../../shared/ui/icons';
import { priceFormat } from '../../../shared/lib/utils';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '../../../shared/constants/datetime-format';
import { Icons } from '@/shared/types';

export const AccountView = ({ account, deleteSlot }) => {
	return (
		<Block className={css['view']}>
			<h4>Счет №{account.id}</h4>
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{format(account.createdAt, DATETIME_FORMAT)}</dd>
				</div>
				<div>
					<dt>Название:</dt>
					<dd>{account.name}</dd>
				</div>
				<div>
					<dt>Сумма:</dt>
					<dd>{priceFormat(account.amount)}</dd>
				</div>
				<div>
					<dt>Тип:</dt>
					<dd>{getAccountType(account.type)?.name}</dd>
				</div>
				<div>
					<dt>Комментарий:</dt>
					<dd>{account.comment}</dd>
				</div>
			</dl>
			<div className={css['actions']}>
				<Link className={css['edit-link']} to={path.account.edit(account.id)}>
					<Icon className={css['edit-icon']} name={Icons.edit} />
				</Link>
				{deleteSlot}
			</div>
		</Block>
	);
};

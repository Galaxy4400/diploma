import css from './account-view.module.scss';
import { Link } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { getAccountType } from '../lib/get-account-type';
import { Block } from '../../../shared/ui/components';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { priceFormat } from '../../../shared/lib/utils';

export const AccountView = ({ accountData, deleteSlot }) => {
	return (
		<Block className={css['view']}>
			<h4>Счет №{accountData.id}</h4>
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{accountData.createdAt}</dd>
				</div>
				<div>
					<dt>Название:</dt>
					<dd>{accountData.name}</dd>
				</div>
				<div>
					<dt>Сумма:</dt>
					<dd>{priceFormat(accountData.amount)}</dd>
				</div>
				<div>
					<dt>Тип:</dt>
					<dd>{getAccountType(accountData.typeId)?.name}</dd>
				</div>
				<div>
					<dt>Комментарий:</dt>
					<dd>{accountData.comment}</dd>
				</div>
			</dl>
			<div className={css['actions']}>
				<Link className={css['edit-link']} to={path.account.edit(accountData.id)}>
					<Icon className={css['edit-icon']} name={ICON.EDIT} />
				</Link>
				{deleteSlot}
			</div>
		</Block>
	);
};

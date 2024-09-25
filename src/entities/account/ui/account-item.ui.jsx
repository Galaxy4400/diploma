import css from './account-item.module.scss';
import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Icon } from '../../../shared/ui/icons';
import { priceFormat } from '../../../shared/lib/utils';
import { getAccountTypeImage, getAccountTypeName } from '../lib';

export const AccountItem = ({ account, deleteSlot }) => {
	const location = useLocation();

	return (
		<div className={css['account']}>
			<Link className={css['main']} to={path.account.id(account.id)} state={{from: location}}>
				<figure className={css['figure']}>
					<Icon className={css['icon']} name={getAccountTypeImage(account.typeId)} />
				</figure>
				<div className={css['info']}>
					<span className={css['amount']}>{priceFormat(account.amount)}</span>
					<span className={css['name']}>{getAccountTypeName(account.typeId)}</span>
				</div>
			</Link>
			<div className={css['delete']}>
				{deleteSlot}
			</div>
		</div>
	)
};

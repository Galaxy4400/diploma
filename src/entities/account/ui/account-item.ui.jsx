import css from './account-item.module.scss';
import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Icon } from '../../../shared/ui/icon';
import { getAccountImageName, getAccountTypeName, priceFormat } from '../../../shared/lib/utils';

export const AccountItem = ({ account, deleteSlot }) => {
	const location = useLocation();

	return (
		<Link className={css['account']} to={path.account.id(account.id)} state={{from: location}}>
			<figure className={css['figure']}>
				<Icon className={css['icon']} name={getAccountImageName(account.typeId)} />
			</figure>
			<div className={css['main']}>
				<span className={css['amount']}>{priceFormat(account.amount)}</span>
				<span className={css['name']}>{getAccountTypeName(account.typeId)}</span>
			</div>
			{/* {deleteSlot} */}
		</Link>
	)
};

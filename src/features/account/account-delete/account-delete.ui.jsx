import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { useState } from 'react';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';

export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const [isDeleted, setIsDeleted] = useState(false);

	const deleteHandler = async (id) => {
		setIsDeleted(true);

		const response = await server.deleteAccount(id);

		if (!response.ok) setIsDeleted(false);

		navigate(from?.pathname || false, { replace: true });
	};

	return (
		<button className={css['button']} type="button" onClick={() => deleteHandler(accountId)} disabled={isDeleted}>
			<Icon className={css['icon']} name={ICON.CART}></Icon>
		</button>
	);
};

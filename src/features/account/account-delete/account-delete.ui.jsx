import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { useState } from 'react';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';

export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const [isDeleted, setIsDeleted] = useState(false);
	const { openModal, closeModal } = useModal();
	console.log('AccountDelete render');
	const deleteAccount = async () => {
		setIsDeleted(true);

		const response = await server.deleteAccount(accountId);

		if (!response.ok) setIsDeleted(false);

		navigate(from?.pathname || false, { replace: true });
	};

	const deleteHandler = () => {
		openModal(
			<Confirm
				question="Вы точно хотите удалить счет?"
				onConfirm={() => deleteAccount()}
				onReject={() => closeModal()}
			/>,
		);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler} disabled={isDeleted}>
			<Icon className={css['icon']} name={ICON.CART}></Icon>
		</button>
	);
};

import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';

export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { openModal, closeModal } = useModal();

	const deleteAccount = async () => {
		await server.deleteAccount(accountId);

		navigate(from?.pathname || false, { replace: true });

		closeModal();
	};

	const deleteHandler = () => {
		openModal(<Confirm question="Хотите удалить счет?" onConfirm={deleteAccount} onReject={closeModal} />);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler}>
			<Icon className={css['icon']} name={ICON.CART}></Icon>
		</button>
	);
};

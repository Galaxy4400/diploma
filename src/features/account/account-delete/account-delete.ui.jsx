import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../shared/hooks';
import { Confirm } from '../../../shared/ui/components';

export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { ModalPortal, openModal, closeModal } = useModal();

	const deleteHandler = async () => {
		await server.deleteAccount(accountId);

		navigate(from?.pathname || false, { replace: true });

		closeModal();
	};

	return (
		<>
			<button className={css['button']} type="button" onClick={openModal}>
				<Icon className={css['icon']} name={ICON.CART}></Icon>
			</button>

			<ModalPortal>
				<Confirm question="Вы точно хотите удалить счет?" onConfirm={deleteHandler} onReject={closeModal} />
			</ModalPortal>
		</>
	);
};

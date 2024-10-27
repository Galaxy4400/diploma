import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'shared/ui/icons';
import { useModal } from 'app/providers/modal';
import { Confirm } from 'shared/ui/components';
import { useToast } from 'app/providers/toast';
import { request } from 'shared/api/request';
import { path } from 'shared/lib/router';
import { Icons, ID } from 'shared/types';

interface AccountDeleteProps {
	accountId: ID;
}

export const AccountDelete = ({ accountId }: AccountDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();

	const deleteAccount = async () => {
		await request({ url: `/accounts/${accountId}`, method: 'DELETE' });

		navigate(path.home(), { replace: true });

		closeModal();

		showToast({ message: 'Счет удален', type: 'success' });
	};

	const deleteHandler = () => {
		openModal(
			<Confirm
				title="Хотите удалить счет?"
				text="Все операции счета так же будут удалены!"
				onConfirm={deleteAccount}
				onReject={closeModal}
			/>,
		);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler}>
			<Icon className={css['icon']} name={Icons.cart}></Icon>
		</button>
	);
};

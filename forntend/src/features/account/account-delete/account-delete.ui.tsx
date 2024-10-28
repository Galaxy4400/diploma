import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'shared/ui/icons';
import { useModal } from 'app/providers/modal';
import { Confirm } from 'shared/ui/components';
import { useToast } from 'app/providers/toast';
import { path } from 'shared/lib/router';
import { Icons, ID } from 'shared/types';
import { deleteAccount } from 'shared/api/account';
import { useAppDispatch } from 'shared/lib/store';
import { fetchDeleteAccount } from 'entities/account/account-data';
import { getAccountList } from 'entities/account/account-list';

interface AccountDeleteProps {
	accountId: ID;
}

export const AccountDelete = ({ accountId }: AccountDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();
	const dispatch = useAppDispatch();

	const processDeleteAccount = async () => {
		try {
			await dispatch(fetchDeleteAccount(accountId));

			showToast({ message: 'Счет удален', type: 'success' });

			navigate(path.home(), { replace: true });
		} catch (error: unknown) {
			const errorMessage = error as string;

			showToast({ message: errorMessage, type: 'error' });
		}

		closeModal();
	};

	const deleteHandler = () => {
		openModal(
			<Confirm
				title="Хотите удалить счет?"
				text="Все операции счета так же будут удалены!"
				onConfirm={processDeleteAccount}
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

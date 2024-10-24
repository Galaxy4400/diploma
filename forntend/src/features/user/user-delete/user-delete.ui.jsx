import css from './user-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../app/providers/modal';
import { Button, Confirm } from '../../../shared/ui/components';
import { useToast } from '../../../app/providers/toast';
import { TOAST_TYPE } from '../../../shared/lib/toast';
import { request } from '../../../shared/api';
import { path } from '../../../shared/lib/router';
import { useAuth } from '../../../app/providers/auth';

export const UserDelete = ({ userId }) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { logout } = useAuth();
	const { openModal, closeModal } = useModal();

	const deleteUser = async () => {
		const { error } = await request({ url: `/users/${userId}`, method: 'DELETE' });

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: TOAST_TYPE.ERROR });
			return;
		}

		logout();

		navigate(path.home(), { replace: true });

		closeModal();

		showToast({ message: 'Вы удалены из системы', type: TOAST_TYPE.SUCCESS });
	};

	const deleteHandler = () => {
		openModal(
			<Confirm
				title="Хотите удалить свой аккаунт?"
				text="Все данные будут безвозвратно удалены!"
				onConfirm={deleteUser}
				onReject={closeModal}
			/>,
		);
	};

	return (
		<Button className={css['button']} type="button" onClick={deleteHandler}>
			Удалить пользователя
		</Button>
	);
};

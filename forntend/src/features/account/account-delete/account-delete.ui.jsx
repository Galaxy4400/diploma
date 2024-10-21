import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';
import { useToast } from '../../../app/providers/toast';
import { TOAST_TYPE } from '../../../shared/lib/toast';
import { request } from '../../../shared/api';

export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();

	const deleteAccount = async () => {
		const { error } = await request({ url: `/accounts/${accountId}`, method: 'DELETE' });

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: TOAST_TYPE.ERROR });
			return;
		}

		navigate(from?.pathname || false, { replace: true });

		closeModal();

		showToast({ message: 'Счет удален', type: TOAST_TYPE.SUCCESS });
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

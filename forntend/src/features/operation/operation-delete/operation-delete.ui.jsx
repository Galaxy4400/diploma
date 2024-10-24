import css from './operation-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';
import { request } from '../../../shared/api';
import { useToast } from '../../../app/providers/toast';

export const OperationDelete = ({ operationId }) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const from = useFrom();
	const { openModal, closeModal } = useModal();

	const deleteOperation = async () => {
		const { error } = await request({ url: `/operations/${operationId}`, method: 'DELETE' });

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: 'error' });
			return;
		}

		navigate(from?.pathname || false, { replace: true });

		closeModal();

		showToast({ message: 'Операция удалена', type: 'success' });
	};

	const deleteHandler = () => {
		openModal(<Confirm title="Хотите удалить операцию?" onConfirm={deleteOperation} onReject={closeModal} />);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler}>
			<Icon className={css['icon']} name={ICON.CART}></Icon>
		</button>
	);
};

import css from './operation-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from 'shared/lib/location';
import { Icon } from 'shared/ui/icons';
import { useModal } from 'app/providers/modal';
import { Confirm } from 'shared/ui/components';
import { request } from 'shared/api/request';
import { useToast } from 'app/providers/toast';
import { Icons, ID } from 'shared/types';

interface OperationDeleteProps {
	operationId: ID;
}

export const OperationDelete = ({ operationId }: OperationDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const from = useFrom();
	const { openModal, closeModal } = useModal();

	const deleteOperation = async () => {
		await request({ url: `/operations/${operationId}`, method: 'DELETE' });

		navigate(from?.pathname || false, { replace: true });

		closeModal();

		showToast({ message: 'Операция удалена', type: 'success' });
	};

	const deleteHandler = () => {
		openModal(<Confirm title="Хотите удалить операцию?" onConfirm={deleteOperation} onReject={closeModal} />);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler}>
			<Icon className={css['icon']} name={Icons.cart}></Icon>
		</button>
	);
};

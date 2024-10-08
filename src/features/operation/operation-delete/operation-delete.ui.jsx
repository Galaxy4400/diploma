import css from './operation-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';

export const OperationDelete = ({ operationId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { openModal, closeModal } = useModal();

	const deleteOperation = async () => {
		await server.deleteOperation(operationId);

		navigate(from?.pathname || false, { replace: true });

		closeModal();
	};

	const deleteHandler = () => {
		openModal(
			<Confirm question="Хотите удалить операцию?" onConfirm={deleteOperation} onReject={closeModal} />,
		);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler}>
			<Icon className={css['icon']} name={ICON.CART}></Icon>
		</button>
	);
};

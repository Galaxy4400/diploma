import css from './category-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/providers/auth';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { useState } from 'react';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../shared/hooks';
import { Confirm } from '../../../shared/ui/components';

export const CategoryDelete = ({ categoryId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const [isDeleted, setIsDeleted] = useState(false);
	const { ModalPortal, openModal, closeModal } = useModal();

	const deleteHandler = async () => {
		setIsDeleted(true);

		const response = await server.deleteCategory(categoryId);

		if (!response.ok) setIsDeleted(false);

		navigate(from?.pathname || false, { replace: true });

		closeModal();
	};

	return (
		<>
			<button className={css['button']} type="button" onClick={openModal} disabled={isDeleted}>
				<Icon className={css['icon']} name={ICON.CART}></Icon>
			</button>

			<ModalPortal>
				<Confirm
					question="Вы точно хотите удалить категорию?"
					onConfirm={deleteHandler}
					onReject={closeModal}
				/>
			</ModalPortal>
		</>
	);
};

import css from './category-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';
import { request } from '../../../shared/api';

export const CategoryDelete = ({ categoryId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { openModal, closeModal } = useModal();

	const deleteCategory = async () => {
		const { error } = await request({ url: `/categories/${categoryId}`, method: 'DELETE' });

		if (error) return;

		navigate(from?.pathname || false, { replace: true });

		closeModal();
	};

	const deleteHandler = () => {
		openModal(
			<Confirm question="Хотите удалить категорию?" onConfirm={deleteCategory} onReject={closeModal} />,
		);
	};

	return (
		<button className={css['button']} type="button" onClick={deleteHandler}>
			<Icon className={css['icon']} name={ICON.CART}></Icon>
		</button>
	);
};

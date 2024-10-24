import css from './category-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { Icon } from '../../../shared/ui/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';
import { request } from '../../../shared/api';
import { useToast } from '../../../app/providers/toast';
import { Icons } from '@/shared/types';

export const CategoryDelete = ({ categoryId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();

	const deleteCategory = async () => {
		const { error } = await request({ url: `/categories/${categoryId}`, method: 'DELETE' });

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: 'error' });
			return;
		}

		navigate(from?.pathname || false, { replace: true });

		closeModal();

		showToast({ message: 'Категория удалена', type: 'success' });
	};

	const deleteHandler = () => {
		openModal(
			<Confirm
				title="Хотите удалить категорию?"
				text="Все операции категории так же будут удалены!"
				onConfirm={deleteCategory}
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

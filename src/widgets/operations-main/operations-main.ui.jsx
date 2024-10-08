import css from './operations-main.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { Block, Button } from '../../shared/ui/components';
import { path } from '../../shared/lib/router';
import { useDispatch } from 'react-redux';
import { setOperations } from '../../entities/operations';
import { useEffect, useState } from 'react';
import { Modal } from '../../shared/ui/components/modal';

export const OperationsMain = ({ operationsListSlot }) => {
	const dispatch = useDispatch();
	const operations = useAsyncValue();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		dispatch(setOperations(operations));
	}, [dispatch, operations]);

	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Недавние операции</h4>
			{operationsListSlot}
			<Link className={css['more']} to={path.history()}>
				Просмотреть больше операций
			</Link>

			<Button onClick={handleOpenModal}>Открыть модалку</Button>

			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
				<h2>Modal Content</h2>
				<p>This is a modal window implemented using a portal.</p>
			</Modal>
		</Block>
	);
};

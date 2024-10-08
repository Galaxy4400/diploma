import css from './operations-main.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { Block, Button } from '../../shared/ui/components';
import { path } from '../../shared/lib/router';
import { useDispatch } from 'react-redux';
import { setOperations } from '../../entities/operations';
import { useEffect } from 'react';
import { useModal } from '../../app/providers/modal';

export const OperationsMain = ({ operationsListSlot }) => {
	const dispatch = useDispatch();
	const operations = useAsyncValue();

	const { openModal } = useModal();

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
			<Button onClick={() => openModal('test')}>Открыть модалку</Button>
		</Block>
	);
};

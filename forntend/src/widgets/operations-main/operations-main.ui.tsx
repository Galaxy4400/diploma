import css from './operations-main.module.scss';
import { Link } from 'react-router-dom';
import { Block } from 'shared/ui/components';
import { path } from 'shared/lib/router';
import { ReactNode } from 'react';

interface OperationsMainProps {
	operationsListSlot: ReactNode;
}

export const OperationsMain = ({ operationsListSlot }: OperationsMainProps) => {
	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Недавние операции</h4>
			{operationsListSlot}
			<Link className={css['more']} to={path.history()}>
				Просмотреть больше операций
			</Link>
		</Block>
	);
};

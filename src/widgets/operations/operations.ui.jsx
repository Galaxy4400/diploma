import css from './operations.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { Block } from '../../shared/ui/components';
import { path } from '../../shared/lib/router';

export const Operations = ({ renderOperationsList }) => {
	const operations = useAsyncValue();

	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Недавние операции</h4>
			{renderOperationsList(operations)}
			<Link className={css['more']} to={path.history()}>
				Просмотреть больше операций
			</Link>
		</Block>
	);
};

import { Button } from '../button';
import css from './confirm.module.scss';

export const Confirm = ({ question, onConfirm, onReject }) => {
	return (
		<div className={css['container']}>
			<h3 className={css['title']}>{question}</h3>
			<div className={css['actions']}>
				<Button onClick={() => onReject()}>Отмена</Button>
				<Button onClick={() => onConfirm()}>Подтвердить</Button>
			</div>
		</div>
	);
};

import css from './confirm.module.scss';
import { Button } from '../button';

export const Confirm = ({ question, onConfirm, onReject }) => {
	return (
		<div className={css['container']}>
			<h3 className={css['title']}>{question}</h3>
			<div className={css['actions']}>
				<Button className={css['reject']} onClick={() => onReject()}>
					Отмена
				</Button>
				<Button className={css['confirm']} onClick={() => onConfirm()}>
					Подтвердить
				</Button>
			</div>
		</div>
	);
};

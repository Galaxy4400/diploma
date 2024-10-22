import css from './confirm.module.scss';
import { Button } from '../button';

export const Confirm = ({ title, text, onConfirm, onReject }) => {
	return (
		<div className={css['container']}>
			<h3 className={css['title']}>{title}</h3>
			{!!text && <p>{text}</p>}
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

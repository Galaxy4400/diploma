import css from './confirm.module.scss';
import { Button } from '../button';

interface ConfirmProps {
	title: string;
	text?: string;
	onConfirm: () => void;
	onReject: () => void;
}

export const Confirm = ({ title, text, onConfirm, onReject }: ConfirmProps) => {
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

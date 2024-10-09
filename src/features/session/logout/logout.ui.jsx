import css from './logout.module.scss';
import { useAuth } from '../../../app/providers/auth';
import { ICON } from '../../../shared/lib/icons';
import { Icon } from '../../../shared/ui/icons';
import { useModal } from '../../../app/providers/modal';
import { Confirm } from '../../../shared/ui/components';

export const LogoutButton = () => {
	const { logout } = useAuth();
	const { openModal, closeModal } = useModal();

	const logoutHandler = () => {
		openModal(
			<Confirm
				question="Хотите выйти?"
				onConfirm={() => {
					logout();
					closeModal();
				}}
				onReject={closeModal}
			/>,
		);
	};

	return (
		<button className={css['button']} onClick={logoutHandler}>
			<Icon className={css['icon']} name={ICON.EXIT} />
		</button>
	);
};

import css from './logout.module.scss';
import { useAuth } from '../../../app/providers/auth';
import { ICON } from '../../../shared/lib/icons';
import { Icon } from '../../../shared/ui/icons';
import { useModal } from '../../../shared/hooks';
import { Confirm } from '../../../shared/ui/components';

export const LogoutButton = () => {
	const { logout } = useAuth();
	const { ModalPortal, openModal, closeModal } = useModal();

	return (
		<>
			<button className={css['button']} onClick={openModal}>
				<Icon className={css['icon']} name={ICON.EXIT} />
			</button>

			<ModalPortal>
				<Confirm question="Вы точно хотите выйти?" onConfirm={logout} onReject={closeModal} />
			</ModalPortal>
		</>
	);
};

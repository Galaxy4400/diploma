import css from './logout.module.scss';
import { useAuth } from "../../../app/providers/auth";
import { ICON } from "../../../shared/lib/icons";
import { Icon } from "../../../shared/ui/icons";

export const LogoutButton = () => {
	const { logout } = useAuth();
	
	return (
		<button className={css['button']} onClick={() => logout()}>
			<Icon className={css['icon']} name={ICON.EXIT} />
		</button>
	)
};
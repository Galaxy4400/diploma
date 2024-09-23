import css from './logout.module.scss';
import { useAuth } from "../../../app/providers/auth";
import { ICON_NAME } from "../../../shared/lib/icons";
import { Icon } from "../../../shared/ui/icon";

export const LogoutButton = () => {
	const { logout } = useAuth();
	
	return (
		<button className={css['button']} onClick={() => logout()}>
			<Icon className={css['icon']} name={ICON_NAME.EXIT} />
		</button>
	)
};
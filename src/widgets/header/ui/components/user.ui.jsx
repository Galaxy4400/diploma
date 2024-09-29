import css from './user.module.scss';
import { useAuth } from '../../../../app/providers/auth';
import { path } from '../../../../shared/lib/router';
import { getAvatarPlug } from '../../../../shared/lib/utils';
import { Link } from 'react-router-dom';

export const User = () => {
	const { authUser } = useAuth();

	return (
		<Link className={css['user']} to={path.settings()}>
			<img className={css['avatar']} src={getAvatarPlug(authUser.login)} alt="avatar" />
			<span className={css['login']}>{authUser.login}</span>
		</Link>
	);
};

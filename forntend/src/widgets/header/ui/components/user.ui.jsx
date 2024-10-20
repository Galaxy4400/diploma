import css from './user.module.scss';
import { path } from '../../../../shared/lib/router';
import { getAvatarPlug } from '../../../../shared/lib/utils';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../../../entities/auth';
import { useSelector } from 'react-redux';

export const User = () => {
	const authUser = useSelector(selectAuth);

	return (
		<Link className={css['user']} to={path.settings()}>
			<img className={css['avatar']} src={getAvatarPlug(authUser.login)} alt="avatar" />
			<span className={css['login']}>{authUser.login}</span>
		</Link>
	);
};

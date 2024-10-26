import css from './user.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAvatarPlug } from 'shared/utils';
import { path } from 'shared/lib/router';
import { selectAuth } from 'entities/auth';

export const User = () => {
	const authUser = useSelector(selectAuth);

	return (
		<Link className={css['user']} to={path.settings()}>
			<img className={css['avatar']} src={getAvatarPlug(authUser.login)} alt="avatar" />
			<span className={css['login']}>{authUser.login}</span>
		</Link>
	);
};

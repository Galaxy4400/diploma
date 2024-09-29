import { useContext } from 'react';
import { AuthContext } from './auth.context';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../entities/auth';

export const useAuth = () => {
	const { ...contextData } = useContext(AuthContext);

	const user = useSelector(selectAuth);

	const authUser = user?.session ? user : null;

	return { ...contextData, authUser };
};

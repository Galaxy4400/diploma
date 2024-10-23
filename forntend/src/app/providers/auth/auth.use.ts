import { useContext } from 'react';
import { AuthContext } from './auth.context';
import { AuthContextType } from './auth.types';

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (context === null) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
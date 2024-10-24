import { Provider } from 'react-redux';
import { store } from '../../store';
import { WithChildren } from '@/shared/types';

export const StoreProvider = ({ children }: WithChildren) => {
	return <Provider store={store}>{children}</Provider>;
};

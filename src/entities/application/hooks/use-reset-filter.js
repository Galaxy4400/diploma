import { useLayoutEffect } from 'react';
import { setFilter } from '../model';
import { useDispatch } from 'react-redux';

export const useResetFilter = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(setFilter({}));
	}, [dispatch]);
};

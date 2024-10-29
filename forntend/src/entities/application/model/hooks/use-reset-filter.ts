import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../application.slice';
// TODO удалить
export const useResetFilter = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(setFilter({}));
	}, [dispatch]);
};

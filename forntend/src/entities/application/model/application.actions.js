import { ACTION_TYPE } from '../../../shared/lib/store';

export const setFilter = (filterParams) => {
	return { type: ACTION_TYPE.SET_FILTER, payload: filterParams };
};

import { CATEGORY_TYPES } from './category-types';

export const getCategoryType = (id) => CATEGORY_TYPES.find((type) => type.id === id);

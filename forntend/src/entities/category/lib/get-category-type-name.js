import { CATEGORY_TYPES } from './category-types';

export const getCategoryTypeName = (id) => CATEGORY_TYPES.find((type) => type.id === id).name;

export const removeEmptyValues = (obj) => {
	return Object.fromEntries(
		Object.entries(obj).filter(([key, value]) => value.length)
	);
};
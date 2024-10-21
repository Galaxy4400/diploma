const buildPagination = ({ query }) => {
	return {
		page: +query.page || 1,
		limit: +query.limit || null,
	};
};

module.exports = { buildPagination };
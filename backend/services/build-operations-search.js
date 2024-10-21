const buildOperationsSearch = ({ user, query }) => {
	const search = {};

	search.user = user.id;
	
	if (query.account) search.account = query.account;

	if (query.category) search.category = query.category;

	if (query.daterange) {
		const [startDate, endDate] = query.daterange.split(',');

		search.createdAt = {};

		if (startDate) search.createdAt.$gte = startDate;
		if (endDate) search.createdAt.$lte = endDate;
	}

	if (query.amountrange) {
		const [minAmount, maxAmount] = query.amountrange.split(',');

		search.amount = {};

		if (minAmount) search.amount.$gte = +minAmount;
		if (maxAmount) search.amount.$lte = +maxAmount;
	}

	return search;
}

module.exports = buildOperationsSearch;
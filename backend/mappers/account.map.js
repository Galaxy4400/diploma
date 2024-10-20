module.exports = (account) => {
	return {
		id: account.id,
		name: account.name,
		amount: account.amount,
		type: account.type,
		user: account.user.login,
		createdAt: account.createdAt,
	}
}






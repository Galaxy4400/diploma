module.exports = (account) => {
	return {
		id: account.id,
		name: account.name,
		amount: account.amount,
		type: account.type,
		comment: account.comment,
		user: account.user.login,
		createdAt: account.createdAt,
	}
}






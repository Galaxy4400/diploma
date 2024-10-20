module.exports = (operation) => {
	return {
		id: operation.id,
		comment: operation.comment,
		amount: operation.amount,
		status: operation.status,
		user: operation.user.login,
		account: operation.account,
		category: operation.category,
		createdAt: operation.createdAt,
	}
}






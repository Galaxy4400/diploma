module.exports = (account) => {
	return {
		id: account.id,
		name: account.name,
		ammount: account.ammount,
		type: account.type,
		user: account.user.login,
		createdAt: account.createdAt,
	}
}






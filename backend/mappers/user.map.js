module.exports = (user) => {
	return {
		id: user.id,
		login: user.login,
		email: user.email,
		name: user.name,
		surname: user.surname,
		address: user.address,
		registeredAt: user.createdAt,
	}
}






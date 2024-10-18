module.exports = (user) => {
	return {
		id: user.id,
		login: user.login,
		registeredAt: user.createdAt,
	}
}
module.exports = (category) => {
	return {
		id: category.id,
		name: category.name,
		icon: category.icon,
		type: category.type,
		user: category.user.login,
		createdAt: category.createdAt,
	}
}
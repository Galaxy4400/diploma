const { verify } = require("../helpers/token");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
	if (!req.cookies.token) {
		res.send({ error: true, message: 'You are not authenticated' });

		return;
	}

	const tokenData = verify(req.cookies.token);

	const user = await User.findOne({ _id: tokenData.id });

	if (!user) {
		res.send({ error: true, message: 'Authenticated user not found' });

		return;
	}

	req.user = user;

	next();
};
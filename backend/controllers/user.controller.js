const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { generate } = require('../utils/token');

const register = async (login, password) => {
	if (!password) {
		throw new Error('Password is empty');
	}

	const passwordHash = await bcrypt.hash(password, 10);

	const user = await User.create({ login, password: passwordHash });

	const token = generate({ id: user.id });

	return { token, user };
};

const login = async (login, password) => {
 const user = await User.findOne({ login });

	if (!user) {
		throw new Error('User not found');
	}
	
	const isPasswordMatch = await bcrypt.compare(password, user.password);

	if (!isPasswordMatch) {
		throw new Error('Wrong password');
	}

	const token = generate({ id: user.id });

	return { token, user };
};

const updateUser = async (id, userData) => {
	if (userData?.password) {
		userData.password = await bcrypt.hash(userData.password, 10);
	}

	const user = await User.findByIdAndUpdate(id, userData, { returnDocument: 'after' });

	if (!user) {
		throw new Error('User not found');
	}

	return user;
};

module.exports = { register, login, updateUser };
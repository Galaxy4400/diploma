const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
	login: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	},
	name: {
		type: String,
	},
	surname: {
		type: String,
	},
	address: {
		type: String,
	},
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

User.createIndexes();

module.exports = User;
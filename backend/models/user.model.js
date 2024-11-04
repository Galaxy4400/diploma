const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Operation = require('./operation.model');
const Category = require('./category.model');
const Account = require('./account.model');

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
		unique: true,
		sparse: true,
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

// UserSchema.index({ login: 1 });
// UserSchema.index({ email: 1 }, { unique: true, sparse: true });

UserSchema.pre('findOneAndDelete', async function (next) {
	const { _id: id } = this.getQuery();
	
	try {
		await Operation.deleteMany({ user: id });
		await Category.deleteMany({ user: id });
		await Account.deleteMany({ user: id });
		next();
	} catch (error) {
		next(error);
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
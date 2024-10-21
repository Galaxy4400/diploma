const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const AccountSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	type: {
		type: Number,
		required: true,
	},
	comment: {
		type: String,
	},
}, { timestamps: true });

AccountSchema.index({ name: 1 });
AccountSchema.index({ user: 1 });

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
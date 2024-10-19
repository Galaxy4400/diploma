const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const AccountSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	ammount: {
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
	}
}, { timestamps: true });

const Account = mongoose.model('Account', AccountSchema);

Account.createIndexes();

module.exports = Account;
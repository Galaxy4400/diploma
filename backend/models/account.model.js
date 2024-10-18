const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const AccountSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	ammount: {
		type: Number,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	type: {
		type: Number,
	}
}, { timestamps: true });

const Account = mongoose.model('Account', AccountSchema);

Account.createIndexes();

module.exports = Account;
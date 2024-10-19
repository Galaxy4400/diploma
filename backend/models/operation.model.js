const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const OperationSchema = new Schema({
	comment: {
		type: String,
	},
	account: {
		type: Schema.Types.ObjectId,
		ref: 'Account',
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	ammount: {
		type: Number,
	},
}, { timestamps: true });

const Operation = mongoose.model('Operation', OperationSchema);

Operation.createIndexes();

module.exports = Operation;
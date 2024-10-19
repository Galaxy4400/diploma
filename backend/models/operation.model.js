const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const OperationSchema = new Schema({
	account: {
		type: Schema.Types.ObjectId,
		ref: 'Account',
		required: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	comment: {
		type: String,
	},
	ammount: {
		type: Number,
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
	},
}, { timestamps: true });

const Operation = mongoose.model('Operation', OperationSchema);

Operation.createIndexes();

module.exports = Operation;
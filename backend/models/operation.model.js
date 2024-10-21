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
	amount: {
		type: Number,
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
	},
}, { timestamps: true });

OperationSchema.index({ account: 1 });
OperationSchema.index({ category: 1 });
OperationSchema.index({ user: 1 });

const Operation = mongoose.model('Operation', OperationSchema);

module.exports = Operation;
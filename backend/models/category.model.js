const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	icon: {
		type: String,
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
}, { timestamps: true });

CategorySchema.index({ user: 1 });
CategorySchema.index({ name: 1 });

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
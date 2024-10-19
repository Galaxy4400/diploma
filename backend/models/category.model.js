const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
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

const Category = mongoose.model('Category', CategorySchema);

Category.createIndexes();

module.exports = Category;
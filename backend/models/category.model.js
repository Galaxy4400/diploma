const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	type: {
		type: Number,
	},
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);

Category.createIndexes();

module.exports = Category;
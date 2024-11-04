const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Operation = require('./operation.model');

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

// CategorySchema.index({ user: 1 });

CategorySchema.pre('findOneAndDelete', async function (next) {
	const { _id: id } = this.getQuery();
	
	try {
		await Operation.deleteMany({ category: id });
		next();
	} catch (error) {
		next(error);
	}
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
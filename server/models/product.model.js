import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, //createdAt, updatedAt
	}
);

const Product = mongoose.model("Product", productSchema);
// translate it to products, so it has to be Singular and Capitalized

export default Product;

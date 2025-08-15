// PRODUCT CONTROLLER

export const getProducts = async (req, res) => {
	try {
		// find() returns [], +.lean() 읽기전용일때 속도 up(mongoose doc이 아닌 순수 JS Object)
		const products = await Product.find({}).lean();
		res.status(200).json({ success: true, data: products });
	} catch (error) {
		console.error("Error in Fetching products: ", e.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createProduct = async (req, res) => {
	const product = req.body; //user will send this data

	if (!product.name || !product.price || !product.image) {
		// js 리터럴에서는 따옴표 생략가능 JSON이더라도
		return res.status(404).json({ success: false, message: "Please provide all fields" });
	}
	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (e) {
		console.error("Error in Create product: ", e.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: "Product not found",
		});
	}

	try {
		// 업데이트전 객체 반환, {new: true}랑은 업데이트 후 객체 반환
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		console.error("Error in Create product: ", e.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.error("Error in Delete product: ", e.message);
		res.status(404).json({ success: false, message: "Product not found" });
	}
};

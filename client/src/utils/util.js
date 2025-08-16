export const formatPrice = (input) => {
	if (typeof input !== "number") return;

	return input.toLocaleString("en-US");
};

import { Box, Button, Container, Heading, Input, Toast, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "@store/product.store.js";

const CreatePage = () => {
	const toast = useToast();
	const initialInputs = {
		name: "",
		price: "",
		image: "",
	};
	const [inputs, setInputs] = useState(initialInputs);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setInputs({ ...inputs, [name]: value });
	};

	const { createProduct } = useProductStore();
	const handleSubmit = async () => {
		const { success, message } = await createProduct(inputs);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({ title: "Success", description: message, status: "success", isClosable: true });
		}

		setInputs(initialInputs);
	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input placeholder="Price" name="name" value={inputs.name} onChange={handleChange} />
						<Input
							type="number"
							placeholder="Product Price"
							name="price"
							value={inputs.price}
							onChange={handleChange}
						/>
						<Input placeholder="Image URL" name="image" value={inputs.image} onChange={handleChange} />

						<Button colorScheme="blue" w="full" onClick={handleSubmit}>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreatePage;

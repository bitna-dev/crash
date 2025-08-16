import {
	Card,
	CardBody,
	Heading,
	Stack,
	Text,
	Image,
	HStack,
	IconButton,
	useToast,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	FormLabel,
	Input,
	FormControl,
} from "@chakra-ui/react";
import { formatPrice } from "../utils/util";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product.store";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
	const [updated, setUpdated] = useState(product);
	const { deleteProduct, updateProduct } = useProductStore();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const toast = useToast();

	// Change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdated({ ...updated, [name]: value });
	};

	// Submit
	const handleUpdate = (id) => {
		updateProduct(id, updated);
		onClose();
	};

	// Modal
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Delete
	const handleDelete = async (id) => {
		const { success, message } = await deleteProduct(id);
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
	};

	return (
		<Card key={product.name} maxW={"sm"}>
			<CardBody>
				<Image src={product.image} />

				<Stack mt="6" spacing="3">
					<Heading size="md">{product.name}</Heading>
					<Text>{formatPrice(product.price)}</Text>
				</Stack>

				<HStack mt="6" spacing="3">
					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => {
							handleDelete(product._id);
						}}
						colorScheme="red"
					/>
				</HStack>
			</CardBody>
			<Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input
								ref={initialRef}
								placeholder="Product Name"
								value={updated.name}
								name="name"
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Price</FormLabel>
							<Input placeholder="Price" value={updated.price} name="price" onChange={handleChange} />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Image</FormLabel>
							<Input placeholder="Image" value={updated.image} name="image" onChange={handleChange} />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={() => {
								handleUpdate(product._id);
							}}
						>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Card>
	);
};

export default ProductCard;

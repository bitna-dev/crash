import { Card, CardBody, Container, Heading, Stack, VStack, Text, Image } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.store";
import ProductCard from "@components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts, products]);

	return (
		<Container maxW={"container.xl"} py={12}>
			<VStack spacing={8} display={"flex"} flexDir={"column"} alignItems={"center"}>
				<Heading as="h2" size="xl" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
					Current Products 🚀
				</Heading>
				{products.length > 0 ? (
					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 3 }}
						spacing={10}
						w="full"
						justifyItems="center"
						alignItems="center"
					>
						{products?.map((product) => (
							<ProductCard product={product} key={product._id} />
						))}
					</SimpleGrid>
				) : (
					<Text fontSize="lg" textAlign={"center"} fontWeight={"bold"} color="gray.500">
						No products found 😢
						<br />
						<Link to="/create">
							<Text as="span" color="blue.500" fontSize={"md"} _hover={{ textDecoration: "underline" }}>
								Create a product →
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};

export default HomePage;

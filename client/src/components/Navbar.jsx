import { Button, Container, Flex, Heading, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} p={10}>
			<Flex h={16} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
				<Link to="/">
					<Heading
						as="h1"
						size="2xl"
						textTransform={"uppercase"}
						bgGradient="linear(to-l, #7928CA, #FF0080)"
						bgClip="text"
					>
						crash
					</Heading>
				</Link>
				<HStack spacing={2} alignItems={"center"}>
					<Link to="/create">
						<Button fontSize={25}>
							<CiCirclePlus />
						</Button>
					</Link>
					<Button fontSize={25} onClick={toggleColorMode}>
						{colorMode == "light" ? <BsMoonStars /> : <BsSun />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;

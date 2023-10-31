import { Button, Container, Flex, Image } from "@mantine/core";
import Logo from "../../assets/Origem-02-cropped.png";

const Header = () => {
	return (
		<div style={{ backgroundColor: "#1A1A1A" }}>
			<Container
				p={0}
				size={"85%"}
			>
				<Flex
					justify={"space-between"}
					h={80}
					align={"center"}
				>
					<Image
						src={Logo}
						alt="logo"
						h={"35px"}
					/>

					<Button>Let&lsquo;s Talk</Button>
				</Flex>
			</Container>
		</div>
	);
};

export default Header;

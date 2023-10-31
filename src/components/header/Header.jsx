import {  Container, Flex, Image } from "@mantine/core";
import Logo from "../../assets/Origem-02-cropped.png";
import { ContactModal } from "../modal/ContactModal";

const Header = () => {
	return (
		<div style={{ backgroundColor: "#1A1A1A" }}>
			<Container
				p={0}
				size={"responsive"}
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

					<ContactModal>Let&lsquo;s Talk</ContactModal>
				</Flex>
			</Container>
		</div>
	);
};

export default Header;

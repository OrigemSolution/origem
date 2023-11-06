import { Center, Container, Image, Paper, Stack, Text, Title } from "@mantine/core";
import { ContactModal } from "../../modal/ContactModal";
import classes from "./SectionOne.module.css";
import MainBanner from '../../../assets/mainBanner.png'

const SectionOne = () => {
	return (
		<Container
			fluid
			style={{ borderRadius: 0 }}
			bg={"#1a1a1a"}
			p={"80px 20px 0 20px"}
		>
			<Paper
				bg={"#1a1a1a"}
			>
				<Stack
					align="center"
					gap={20}
				>
					<div className={classes.title}>
						<Title c={"white"} className="headers" fw={600}>
							Grow your business with {" "}	
							<span style={{color: "#f7a73a"}}>Technology Solutions</span>
						</Title>
					</div>
					<Center
						w={"100%"}
						className={classes.text}
					>
						<Text
							c={"white"}
						>
							Providing the right technology solutions that help businesses
							achieve their goals is what we do at OriGem.
						</Text>
					</Center>
					<ContactModal
						mobile={true}
						width={230}
					>
						Get started
					</ContactModal>
				</Stack>

				<Center mt={50} pb={50}>
					<Image src={MainBanner} alt="origem" maw={1000} />
				</Center>
			</Paper>
		</Container>
	);
};

export default SectionOne;

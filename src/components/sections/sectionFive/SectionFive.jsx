import {
	Text,
	Title,
	Container,
	SimpleGrid,
	Image,
	Paper,
	Flex,
} from "@mantine/core";
import classes from "./SectionFive.module.css";
import iconOne from "../../../assets/icon1.png";
import iconTwo from "../../../assets/icon2.png";
import iconThree from "../../../assets/icon3.png";

import companyOne from "../../../assets/company1.png";
import companyTwo from "../../../assets/company2.png";
import companyThree from "../../../assets/company3.png";
import companyFour from "../../../assets/company4.png";
import companyFive from "../../../assets/company5.png";

export const DATA = [
	{
		icon: iconOne,
		title: (
			<Text
				className={classes.description}
				fw={700}
			>
				{" "}
				We <span style={{ color: "#f7a73a" }}>analyse </span>
				and prototype your challenges
			</Text>
		),
	},
	{
		icon: iconTwo,
		title: (
			<Text
				className={classes.description}
				fw={700}
			>
				{" "}
				We <span style={{ color: "#f7a73a" }}>develop </span>
				well-structured implementation plans
			</Text>
		),
	},
	{
		icon: iconThree,
		title: (
			<Text
				className={classes.description}
				fw={700}
			>
				{" "}
				We continuosly <span style={{ color: "#f7a73a" }}>improve </span>
				to ensure efficiency
			</Text>
		),
	},
];

export const LOGODATA = [
	{
		image: companyOne,
		title: "Qured",
	},
	{
		image: companyTwo,
		title: "Qured",
	},
	{
		image: companyThree,
		title: "Qured",
	},
	{
		image: companyFour,
		title: "Qured",
	},
	{
		image: companyFive,
		title: "Qured",
	},
];

export function Feature({ icon, title }) {
	return (
		<div className={classes.feature}>
			<Image
				src={icon}
				alt={title}
				h={80}
				w={80}
			/>
			<Paper
				className={classes.mobile}
				p="md"
				mt={"xs"}
			>
				{title}
			</Paper>
		</div>
	);
}

export function Logo({ image, title }) {
	return (
		<div className={classes.feature}>
			<Image
				src={image}
				alt={title}
				h={80}
				w={80}
			/>
		</div>
	);
}

export default function SectionFive() {
	const features = DATA.map((feature, index) => (
		<Feature
			{...feature}
			key={index}
		/>
	));

	const logos = LOGODATA.map((feature, index) => (
		<Logo
			{...feature}
			key={index}
		/>
	));

	return (
		<Container className={classes.wrapper}>
			<Container
				size={560}
				p={0}
			>
				<Text
					size="xs"
					fw={600}
					className={classes.description}
				>
					OUR PROCESS
				</Text>
			</Container>
			<Container
				size={500}
				p={0}
				className="headers"
			>
				<Title
					className={classes.title}
					size={"24px"}
				>
					While developing we adopt an{" "}
					<span style={{ color: "#f7a73a" }}>Agile approach </span>
					which enables us build quickly, scale fast, deliver fast and
					seemlessly
				</Title>
			</Container>
			<SimpleGrid
				mt={60}
				cols={{ base: 1, sm: 2, md: 3 }}
				spacing={{ base: "xl", md: 40 }}
				verticalSpacing={{ base: "xl", md: 50 }}
			>
				{features}
			</SimpleGrid>

			<Paper mt={80} w={"100%"} radius={0} className="headers">
				<Title
					size="24px"
					className={classes.title}
				>
					Clients we have worked with
				</Title>

				<Flex w={"100%"} justify={"center"} align={"center"}>
					<SimpleGrid
						mt={60}
						cols={{ base: 2, sm: 3, md: 5 }}
						spacing={{ base: "xl", md: 50 }}
						verticalSpacing={{ base: "xl", md: 50 }}
						w={"100%"}
					>
						{logos}
					</SimpleGrid>
				</Flex>
			</Paper>
		</Container>
	);
}

import { Text, Title, Container, Paper } from "@mantine/core";
import classes from "./SectionThree.module.css";
import HeroBullets from "./HeroSection";

export const DATA = [
	{
		title: "Digital Marketing",
		color: "#f7a73a",
		description:
			"Social media, SEO, email, & content campaigns to boost brand awareness, engage customers, & generate leads",
	},
	{
		title: "Product Design and Development",
		color: "#804EF7",
		description:
			"Design, develop, & optimize user-friendly products with strategic data insights & compelling copywriting",
	},
	{
		title: "Business Strategy and Management",
		color: "#26474E",
		description:
			"Navigate market complexities, optimize operations, and achieve sustainable growth with expert guidance and tailored solutions",
	},
];

export function Feature({ title, color, description }) {
	return (
		<Paper
			className={classes.feature}
			bg={color}
			p={15}
			mt={15}
		>
			<Text
				mt="sm"
				mb={7}
				fw={700}
				c={"white"}
				className="headers"
			>
				{title}
			</Text>
			<Text
				size="sm"
				lh={1.6}
				c={"white"}
			>
				{description}
			</Text>
		</Paper>
	);
}

export default function SectionThree() {
	const features = DATA.map((feature, index) => (
		<Feature
			{...feature}
			key={index}
		/>
	));

	return (
		<Container
			className={classes.wrapper}
			fluid
		>
			<Container
				size={560}
				p={0}
			>
				<Text
					size="sm"
					fw={600}
					className={classes.description}
				>
					OUR SERVICES
				</Text>
			</Container>
			<Container
				size={590}
				p={0}
				className="headers"
			>
				<Title className={classes.title}>
					One Platform,{" "}
					<span style={{ color: "#f7a73a" }}>Multiple solutions </span>
					to Business Digitization challenges
				</Title>
			</Container>
			<Container
				size={560}
				p={0}
			>
				<Text
					size="sm"
					className={classes.description}
				>
					We are dedicated to see businesses thrive in any weather and people
					achieve extraordinary success. We do that by providing:
				</Text>
			</Container>

			<div className="feature-list">
				<HeroBullets content={features} />
			</div>
		</Container>
	);
}

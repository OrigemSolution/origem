import {
	ThemeIcon,
	Text,
	Title,
	Container,
	SimpleGrid,
	rem,
} from "@mantine/core";
import {
    IconCheck,
} from "@tabler/icons-react";
import classes from "./FeaturesGrid.module.css";

export const DATA = [
	{
		icon: IconCheck,
		title: "World class products",
		description:
			"Our appetite for adventure at Origem has led us in to different spaces where we have created a vast range of products for our very happy customers/clients ",
	},
	{
		icon: IconCheck,
		title: "Unique solutions",
		description:
			"We step into your shoes in order to see your vision clearly and give you a solution that is the perfect fit for you",
	},
	{
		icon: IconCheck,
		title: "24/7 Tech Support",
		description:
			"You can always count on us to be by your side every step of the way.",
	},
];

export function Feature({ icon: Icon, title, description }) {
	return (
		<div className={classes.feature}>
			<ThemeIcon
				variant="filled"
				size={30}
				radius={40}
			>
				<Icon
					style={{ width: rem(20), height: rem(20) }}
					stroke={2}

				/>
			</ThemeIcon>
			<Text
				mt="sm"
				mb={7}
                fw={700}
			>
				{title}
			</Text>
			<Text
				size="sm"
				lh={1.6}
			>
				{description}
			</Text>
		</div>
	);
}

export function FeaturesGrid() {
	const features = DATA.map((feature, index) => (
		<Feature
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
					size="sm"
                    fw={600}
					className={classes.description}
				>
					WHO WE ARE
				</Text>
			</Container>
			<Container
				size={560}
				p={0}
			>
				<Title className={classes.title}>
					We bring the <span style={{ color: "#f7a73a" }}>perfect </span>
					digital solution for your business.
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

			<SimpleGrid
				mt={60}
				cols={{ base: 1, sm: 2, md: 3 }}
				spacing={{ base: "xl", md: 50 }}
				verticalSpacing={{ base: "xl", md: 50 }}
			>
				{features}
			</SimpleGrid>
		</Container>
	);
}

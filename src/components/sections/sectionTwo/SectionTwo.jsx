import {  Container } from "@mantine/core";
import { FeaturesGrid } from "../../features/Features";

const SectionTwo = () => {
	return (
		<Container
			fluid
			size={"responsive"}
			p={"60px 0"}
		>
			<div>
				<FeaturesGrid />
			</div>
		</Container>
	);
};

export default SectionTwo;

import {
	Image,
	Container,
} from "@mantine/core";
import image from "../../../assets/heroImage.png";
import classes from "./HeroBullets.module.css";

export default function HeroBullets({ content }) {
	return (
		<Container size="md" pb={0} mb={0}>
			<div className={classes.inner}>
				<div className={classes.content}>{content}</div>
				<Image
					src={image}
					className={classes.image}
                    maw={500}
				/>
			</div>
		</Container>
	);
}

import {
	Group,
	ActionIcon,
	rem,
	Text,
	Image,
	Title,
	Container,
} from "@mantine/core";
import classes from "./Footer.module.css";
import { Instagram } from "iconsax-react";
import Logo from "../../assets/Origem-02-cropped.png";
import { ContactModal } from "../modal/ContactModal";
import { IconBrandTwitter } from "@tabler/icons-react";

const Footer = () => {
	return (
		<Container size={"responsive"}>
			<div className={classes.footer}>
				<div className={classes.upper}>
					<Title
						maw={559}
						mb={30}
						className="headers"
					>
						Ready to <span className={classes.sub}>revolutionize</span> your
						product?
					</Title>

					<ContactModal styled={true}>Schedule a Free Consultation</ContactModal>
				</div>
				<div className={classes.inner}>
					<Image
						src={Logo}
						alt="Logo"
						w={50}
						h={50}
					/>
					<Group className={classes.links}>
						<Text size="16px">2023 Origem Solutions. All rights reserved</Text>
					</Group>
					<Group
						gap="xs"
						justify="flex-end"
						wrap="nowrap"
					>
						<ActionIcon
							size="lg"
							variant="default"
							radius="xl"
							style={{ border: "none" }}
						>
							<Instagram style={{ width: rem(18), height: rem(18) }} />
						</ActionIcon>

						<ActionIcon
							size="lg"
							variant="default"
							radius="xl"
							style={{ border: "none" }}
						>
							<IconBrandTwitter
								style={{ width: rem(18), height: rem(18) }}
								stroke={1.5}
							/>
						</ActionIcon>
					</Group>
				</div>
			</div>
		</Container>
	);
};

export default Footer;

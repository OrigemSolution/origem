import { useDisclosure } from "@mantine/hooks";
import {
	Modal,
	Button,
	Fieldset,
	TextInput,
	SimpleGrid,
	Stack,
    Textarea,
} from "@mantine/core";
import classes from "./Modal.module.css";

export const ContactModal = ({ children }) => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title="Book a Session"
				size={"xl"}
			>
				<Fieldset
					legend="You would receive an email with date and time options for the meeting"
					variant="unstyled"
				>
					<SimpleGrid cols={2}>
						<Stack>
							<TextInput
								label="Company Name"
                                variant="filled"
								placeholder=""
                                withAsterisk
							/>
							<TextInput
								label="Industry"
                                variant="filled"
								placeholder=""
							/>
						</Stack>
						<Stack>
							<TextInput
								label="Company Email"
                                variant="filled"
								placeholder=""
                                withAsterisk
							/>
							<TextInput
								label="Phone number"
                                variant="filled"
								placeholder=""
							/>
						</Stack>
					</SimpleGrid>
					<Stack mt={"lg"}>
						<Textarea
							label="What can we do for you?"
                            variant="filled"
							placeholder=""
                            withAsterisk
						/>
					</Stack>
				</Fieldset>
			</Modal>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					position: "relative",
				}}
			>
				<div className={classes.modalButton}></div>
				<Button
					className={classes.button}
					radius={"md"}
					onClick={open}
				>
					{children}
				</Button>
			</div>
		</>
	);
};

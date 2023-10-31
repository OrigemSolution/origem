import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
	Modal,
	Button,
	Fieldset,
	TextInput,
	SimpleGrid,
	Stack,
	Textarea,
	Flex,
	NumberInput,
} from "@mantine/core";
import classes from "./Modal.module.css";

export const ContactModal = ({ children, styled }) => {
	const [opened, { open, close }] = useDisclosure(false);
    const matches = useMediaQuery('(max-width: 500px)');

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title="Book a Session"
				size={"500px"}
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3,
				}}
                fullScreen={matches}
			>
				<form>
					<Fieldset
						legend="You would receive an email with date and time options for the meeting"
						variant="unstyled"
					>
						<SimpleGrid
							cols={{
								base: 1,
								sm: 2,
							}}
						>
							<Stack>
								<TextInput
									label="Company Name"
									variant="filled"
									placeholder=""
									withAsterisk
									size="md"
									classNames={{ label: classes.label }}
									data-autofocus
								/>
								<TextInput
									label="Industry"
									variant="filled"
									placeholder=""
									size="md"
									classNames={{ label: classes.label }}
								/>
							</Stack>
							<Stack>
								<TextInput
									label="Company Email"
									variant="filled"
									placeholder=""
									withAsterisk
									size="md"
									classNames={{ label: classes.label }}
								/>
								<NumberInput
									label="Phone number"
									variant="filled"
									placeholder=""
									size="md"
									classNames={{ label: classes.label }}
									hideControls
								/>
							</Stack>
						</SimpleGrid>
						<Stack mt={"lg"}>
							<Textarea
								label="What can we do for you?"
								variant="filled"
								placeholder=""
								withAsterisk
								size="md"
								classNames={{ label: classes.label }}
							/>
						</Stack>
						<Flex
							mt={"xl"}
							align="center"
							justify={"center"}
						>
							<Button type="submit">Book Meeting</Button>
						</Flex>
					</Fieldset>
				</form>
			</Modal>

			{styled ? (
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
			) : (
				<Button onClick={open}>{children}</Button>
			)}
		</>
	);
};

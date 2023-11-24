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
	Select,
} from "@mantine/core";
import classes from "./Modal.module.css";
import industriesData from "./industries.json";
import servicesData from "./services.json";
import PropTypes from "prop-types";
import { useForm } from "@mantine/form";

export const ContactModal = ({ children, styled, width, mobile }) => {
	const [opened, { open, close }] = useDisclosure(false);
	const matches = useMediaQuery("(max-width: 500px)");

	const industryNames = industriesData.map((industry) => industry.name);

	const form = useForm({
		initialValues: {
			name: "",
			company: "",
			email: "",
			phone: "",
			industry: "",
			otherIndustry: "",
			service: "",
			otherService: "",
			message: "",
		},
	});

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title="Book a Session"
				size={"550px"}
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3,
				}}
				fullScreen={matches}
			>
				<form onSubmit={form.onSubmit((values) => console.log(values))}>
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
									label="Name"
									variant="filled"
									placeholder=""
									withAsterisk
									size="md"
									classNames={{ label: classes.label }}
									data-autofocus
									{...form.getInputProps("name")}
								/>
								<TextInput
									label="Company Name"
									variant="filled"
									placeholder=""
									size="md"
									classNames={{ label: classes.label }}
									{...form.getInputProps("company")}
								/>
								<Select
									variant="filled"
									label="Industry"
									placeholder="Search for industry..."
									data={industryNames}
									searchable
									clearable
									limit={30}
									nothingFoundMessage="Nothing found..."
									{...form.getInputProps("industry")}
								/>
							</Stack>
							<Stack>
								<TextInput
									label="Email"
									variant="filled"
									placeholder=""
									withAsterisk
									size="md"
									classNames={{ label: classes.label }}
									{...form.getInputProps("email")}
								/>
								<NumberInput
									label="Phone number"
									variant="filled"
									placeholder=""
									size="md"
									classNames={{ label: classes.label }}
									{...form.getInputProps("phone")}
									hideControls
								/>
								<Select
									variant="filled"
									label="Select Service"
									placeholder="Search for service..."
									data={servicesData}
									searchable
									clearable
									limit={30}
									nothingFoundMessage="Nothing found..."
									{...form.getInputProps("service")}
								/>
							</Stack>
						</SimpleGrid>
						<Stack mt={"lg"}>
							{form.values.industry === "Other Industry" && (
								<TextInput
									label="Other Industry"
									variant="filled"
									placeholder=""
									withAsterisk
									size="md"
									classNames={{ label: classes.label }}
									{...form.getInputProps("otherIndustry")}
								/>
							)}
							{form.values.service === "Other Services" && (
								<TextInput
									label="Other Services"
									variant="filled"
									placeholder=""
									withAsterisk
									size="md"
									classNames={{ label: classes.label }}
									{...form.getInputProps("otherService")}
								/>
							)}
							<Textarea
								label="Anything else we should know?"
								variant="filled"
								placeholder=""
								withAsterisk
								size="md"
								classNames={{ label: classes.label }}
								{...form.getInputProps("message")}
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

			{styled && !mobile && (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						position: "relative",
					}}
				>
					<div
						className={classes.modalButton}
						style={{ width: width || 280 }}
					></div>
					<Button
						className={classes.button}
						radius={"md"}
						onClick={open}
						w={width || 280}
					>
						{children}
					</Button>
				</div>
			)}
			{!styled && !mobile && <Button onClick={open}>{children}</Button>}

			{mobile && (
				<div className={classes.MainDiv}>
					<div
						className={classes.MainModalButton}
						style={{ width: width || 280 }}
					></div>
					<Button
						className={classes.MainButton}
						radius={"md"}
						onClick={open}
						w={width || 280}
					>
						{children}
					</Button>
				</div>
			)}
		</>
	);
};

ContactModal.propTypes = {
	children: PropTypes.string,
	styled: PropTypes.bool,
	width: PropTypes.number,
	mobile: PropTypes.bool,
};

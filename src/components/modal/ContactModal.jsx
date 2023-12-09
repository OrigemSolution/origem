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
	useCombobox,
	Combobox,
	Input,
	Image,
	ScrollArea,
} from "@mantine/core";
import classes from "./Modal.module.css";
import industriesData from "./industries.json";
import servicesData from "./services.json";
import countriesData from "./countryList.json";
import PropTypes from "prop-types";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "mantine-form-zod-resolver";
import { MailtrapClient } from "mailtrap";

export const ContactModal = ({ children, styled, width, mobile }) => {
	const [opened, { open, close }] = useDisclosure(false);
	const matches = useMediaQuery("(max-width: 500px)");

	const industryNames = industriesData.map((industry) => industry.name);

	const countries = Object.keys(countriesData).map((countryCode) => {
		const country = countriesData[countryCode];
		return {
			name: country.name,
			image: country.image,
			phone: country.phone[0],
		};
	});

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const [value, setValue] = useState("+234");

	const TOKEN = import.meta.env.VITE_TOKEN;

	const sender = {
		email: "mailtrap@origemsolutions.com",
		name: "Mailtrap Test",
	};
	const recipients = [
		{
			email: "origemsolutions@gmail.com",
		},
	];

	const handleSend = async (values) => {
		const client = new MailtrapClient({ token: TOKEN });

		client
			.send({
				from: sender,
				to: recipients,
				subject: "Digital request from " + values.name + " - Origem Solutions",
				text: `
			Name: ${values.name} <br/>
			Company: ${values.company} <br/>
			Email: ${values.email} <br/>
			Country: ${values.country} <br/>
			Phone: ${values.phone} <br/>
			Industry: ${values.industry} <br/>
			OtherIndustry: ${values.otherIndustry} <br/>
			Services: ${values.services} <br/>
			OtherServices: ${values.otherServices} <br/>
			Message: ${values.message}
			
			`,
			})
			.then(console.log)
			.catch(console.error);
	};

	const options = countries.map((item) => (
		<Combobox.Option
			value={item.phone}
			key={item.name}
			w={"100%"}
		>
			<Flex
				justify={"space-between"}
				align={"center"}
				w={"100%"}
			>
				{item.phone}
				<Image
					src={item.image}
					alt={item.name}
					w={"15px"}
					h={"15px"}
				/>
			</Flex>
		</Combobox.Option>
	));

	const schema = z.object({
		name: z.string().min(1, { message: "Name is required" }),
		company: z.string(),
		email: z.string().email({ message: "Invalid email address" }),
		country: z.string().nullable(),
		phone: z
			.string()
			.min(7, { message: "Valid phone number is required" })
			.max(12, { message: "Valid phone number is required" }),
		industry: z.string().min(1, { message: "Industry is required" }),
		otherIndustry: z.string().nullable(),
		service: z.string().min(1, { message: "Service is required" }),
		otherService: z.string().nullable(),
		message: z.string().nullable(),
	});

	const form = useForm({
		validate: zodResolver(schema),
		initialValues: {
			name: "",
			company: "",
			email: "",
			country: value,
			phone: "",
			industry: "",
			otherIndustry: "",
			service: "",
			otherService: "",
			message: "",
		},
	});

	const handleClose = () => {
		close();
		form.reset();
	};

	return (
		<>
			<Modal
				opened={opened}
				onClose={handleClose}
				title="Book a Session"
				size={"550px"}
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3,
				}}
				fullScreen={matches}
			>
				<form onSubmit={form.onSubmit((values) => handleSend(values))}>
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
									min={0}
									size="md"
									className="custom-number-input"
									leftSection={
										<Combobox
											store={combobox}
											withinPortal={false}
											onOptionSubmit={(val) => {
												setValue(val);
												form.setValues({
													...form.values,
													country: val,
												});
												combobox.closeDropdown();
											}}
											width={"120px"}
										>
											<Combobox.Target>
												<Button
													variant="subtle"
													w={"fit-content"}
													color="black"
													onClick={() => combobox.toggleDropdown()}
													size="xs"
												>
													{value || (
														<Input.Placeholder>Select</Input.Placeholder>
													)}
												</Button>
											</Combobox.Target>

											<Combobox.Dropdown>
												<Combobox.Options w={"100px"}>
													<ScrollArea.Autosize
														type="scroll"
														mah={200}
													>
														{options}
													</ScrollArea.Autosize>
												</Combobox.Options>
											</Combobox.Dropdown>
										</Combobox>
									}
									clampBehavior="none"
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
									required
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
									required
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

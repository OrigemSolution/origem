import { useDisclosure, useMediaQuery, useToggle } from "@mantine/hooks";
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
	Title,
	Space,
} from "@mantine/core";
import classes from "./Modal.module.css";
import industriesData from "./industries.json";
import servicesData from "./services.json";
import countriesData from "./countryList.json";
import PropTypes from "prop-types";
import { useForm } from "@mantine/form";
import { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "mantine-form-zod-resolver";
import emailjs from "@emailjs/browser";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const ContactModal = ({ children, styled, width, mobile }) => {
	const [opened, { open, close }] = useDisclosure(false);
	const [state, toggle] = useToggle(["new", "sent"]);
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
	const [loading, setLoading] = useState(false);

	const formN = useRef();

	const handleClose = () => {
		close();
		form.reset();
	};

	const handleSend = async () => {
		setLoading(true);
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_KEY,
				import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
				formN.current,
				import.meta.env.VITE_EMAIL_API_KEY
			)
			.then(
				(result) => {
					console.log(result);
					setLoading(false);
					toggle("sent");
					setTimeout(() => {
						handleClose();
						toggle("new");
					}, 5000);
				},
				(error) => {
					console.log(error.text);
				}
			);
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
				{state === "new" && (
					<form
						ref={formN}
						onSubmit={form.onSubmit((values) => handleSend(values))}
					>
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
										name="name"
										{...form.getInputProps("name")}
									/>
									<TextInput
										label="Company Name"
										variant="filled"
										placeholder=""
										size="md"
										classNames={{ label: classes.label }}
										name="company"
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
										name="industry"
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
										name="email"
										{...form.getInputProps("email")}
									/>

									<TextInput
										label="Email"
										variant="filled"
										placeholder=""
										withAsterisk
										size="md"
										hiddenFrom="xxxl"
										classNames={{ label: classes.label }}
										name="country"
										value={value}
									/>

									<NumberInput
										label="Phone number"
										variant="filled"
										placeholder=""
										min={0}
										size="md"
										className="custom-number-input"
										name="phone"
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
														name="country"
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
										name="service"
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
										name="otherIndustry"
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
										name="otherService"
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
									name="message"
									classNames={{ label: classes.label }}
									{...form.getInputProps("message")}
								/>
							</Stack>
							<Flex
								mt={"xl"}
								align="center"
								justify={"center"}
							>
								<Button
									type="submit"
									loading={loading}
								>
									Book Meeting
								</Button>
							</Flex>
						</Fieldset>
					</form>
				)}
				{state === "sent" && (
					<>
						<Flex
							justify={"center"}
							align={"center"}
							mt={"xl"}
							direction={"column"}
						>
							<IconCircleCheckFilled color="green" size={32} />
							<Title
								order={3}
								mt={"md"}
							>
								Thank you for your interest.
							</Title>
							<Space h="40px" />
						</Flex>
					</>
				)}
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

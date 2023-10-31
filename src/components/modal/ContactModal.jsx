import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Fieldset, TextInput } from "@mantine/core";

export const ContactModal = ({ children }) => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title="Book a Session"
				centered
			>
				<Fieldset
					legend="Personal information"
					variant="unstyled"
				>
					<TextInput
						label="Your name"
						placeholder="Your name"
					/>
					<TextInput
						label="Email"
						placeholder="Email"
						mt="md"
					/>
				</Fieldset>
			</Modal>

			<children onClick={open}>Open centered Modal</children>
		</>
	);
};

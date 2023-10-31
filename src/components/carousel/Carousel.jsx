import {
	ActionIcon,
	Container,
	Flex,
	Image,
	Paper,
	Text,
	Title,
} from "@mantine/core";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";

const Carousel = ({ images }) => {
	const [current, setCurrent] = useState(0);

	const length = images.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(images) || images.length <= 0) {
		return null;
	}

	return (
		<Paper
			bg={"#1A1A1A"}
			w={"100%"}
		>
			<Container
				p={"60px 0"}
				size={"85%"}
			>
				<Paper bg={"transparent"}>
					<Flex
						align={"center"}
						direction={{ base: "column", sm: "row" }}
						gap={{ base: "sm", sm: "lg" }}
						justify={{ sm: "center" }}
					>
						<Paper
							w={{
								base: "100%",
								sm: "30%",
							}}
							bg={"#F7A73A"}
							h={"280px"}
						>
							<Text>TESTIMONIALS</Text>
							<Title>Feedback from our clients</Title>
						</Paper>
						<Paper
							bg={"#2C4B56"}
							style={{ padding: "20px", color: "white" }}
							w={{
								base: "100%",
								sm: "68%",
							}}
							h={"280px"}
						>
							{images.map((image, index) => {
								return (
									<div
										className={`slide ${index === current ? "active" : ""}`}
										key={index}
									>
										{index === current && (
											<>
												<Paper bg={"transparent"}>
													<Text>{image.text}</Text>

													<Flex
														justify="start"
														align="center"
													>
														<Image
															src={image.src}
															alt="avatar"
															w={50}
															h={50}
															radius={"xl"}
														/>
														<Paper
															ml={"lg"}
															bg={"transparent"}
														>
															<Title
																order={3}
																mb={"-5px"}
															>
																{image.name}
															</Title>
															<Text>{image.role}</Text>
														</Paper>
													</Flex>
												</Paper>
											</>
										)}
									</div>
								);
							})}
						</Paper>
					</Flex>
				</Paper>
				<Paper bg={"transparent"}>
					<Flex
						justify="end"
						align="center"
					>
						<ActionIcon
							variant="outline"
							onClick={prevSlide}
						>
							<ArrowLeft2 color="#fff" />
						</ActionIcon>
						<ActionIcon>
							<ArrowRight2
								onClick={nextSlide}
								style={{ cursor: "pointer" }}
								color="#fff"
							/>
						</ActionIcon>
					</Flex>
				</Paper>
			</Container>
		</Paper>
	);
};

export default Carousel;

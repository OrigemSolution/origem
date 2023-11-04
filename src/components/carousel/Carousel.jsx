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
			radius={0}
			p={"70px 0"}
		>
			<Container
				p={"60px 0"}
				size={"responsive"}
			>
				<Paper bg={"transparent"}>
					<Flex
						align={"center"}
						direction={{ base: "column", sm: "row" }}
						gap={{ base: "sm", sm: "lg" }}
						justify={{ sm: "center" }}
						mb={"30px"}
					>
						<Paper
							w={{
								base: "100%",
								sm: "30%",
							}}
							bg={"#F7A73A"}
							h={"280px"}
							radius={"sm"}
							p={"20px"}
							c="white"
						>
							<Flex
								direction={"column"}
								align={"start"}
								justify={"end"}
								h={"100%"}
							>
								<Text>TESTIMONIALS</Text>
								<Title>Feedback from our clients</Title>
							</Flex>
						</Paper>
						<Paper
							bg={"#2C4B56"}
							style={{ padding: "36px", color: "white" }}
							w={{
								base: "100%",
								sm: "68%",
							}}
							m={"auto"}
							radius={"sm"}
						>
							<Paper
								bg={"transparent"}
								h={"100%"}
							>
								<Flex
									gap={"lg"}
									justify={"center"}
									align={"center"}
									direction={"column"}
									h={"100%"}
								>
									{images.map((image, index) => {
										return (
											<div
												className={`slide ${index === current ? "active" : ""}`}
												key={index}
											>
												{index === current && (
													<>
															<Flex
																direction={"column"}
																align={"start"}
																justify={"start"}
																h={"100%"}
															>
																<Text>{image.text}</Text>

																<Flex
																	justify="start"
																	align="center"
																	mt={"lg"}
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
															</Flex>
													</>
												)}
											</div>
										);
									})}
								</Flex>
							</Paper>
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
							mr={"xl"}
							radius={"xl"}
							size={"lg"}
							color="#fff"
						>
							<ArrowLeft2
								color="#fff"
								size={"20px"}
							/>
						</ActionIcon>
						<ActionIcon
							variant="outline"
							onClick={nextSlide}
							radius={"xl"}
							size={"lg"}
							color="#fff"
						>
							<ArrowRight2
								color="#fff"
								size={"20px"}
							/>
						</ActionIcon>
					</Flex>
				</Paper>
			</Container>
		</Paper>
	);
};

export default Carousel;

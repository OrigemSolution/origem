import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";

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
		<section className="carousel w-full">
			{images.map((image, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<div className="flex flex-col">
								<div className="">
									<h1>{image?.text}</h1>
								</div>
								<div className="rounded-lg ">
									<img
										src={image?.src}
										alt={image?.text}
									/>
								</div>
							</div>
						)}
					</div>
				);
			})}
			<button onClick={prevSlide}>
				<ArrowLeft2 />
			</button>
			<button onClick={nextSlide}>
				<ArrowRight2 />
			</button>
		</section>
	);
};

export default Carousel;

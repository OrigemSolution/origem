import Carousel from "../../carousel/Carousel";

const SectionFour = () => {
	const images = [
		{
			src: "https://res.cloudinary.com/dg8os5pul/image/upload/v1695731972/cld-sample.jpg",
			name: "Hilary Kay",
			role: "CTO, Anelloh",
			text: "“Finding the right agency to work with is a daunting task, but we absolutely found the right team with Revent Tech. Each person on the team is talented, resourceful, and genuinely cared about delivering something we would love. We'll no doubt be working with them on future projects.”",
		},
		{
			src: "https://res.cloudinary.com/dg8os5pul/image/upload/v1695731972/cld-sample-2.jpg",
			name: "Lorem",
			role: "Ipsum",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Non sodales neque sodales ut etiam sit amet nisl purus. 2",
		},
		{
			src: "https://res.cloudinary.com/dg8os5pul/image/upload/v1695731972/cld-sample-4.jpg",
			name: "Lorem",
			role: "Ipsum",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Non sodales neque sodales ut etiam sit amet nisl purus. 3",
		},
	];
	return (
		<div>
			<Carousel images={images} />
		</div>
	);
};

export default SectionFour;

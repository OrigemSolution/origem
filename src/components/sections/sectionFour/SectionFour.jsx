import Carousel from "../../carousel/Carousel";

const SectionFour = () => {
	const images = [
		{
			src: "https://picsum.photos/seed/picsum/100/100",
			name: "Lorem",
			role: "Ipsum",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Non sodales neque sodales ut etiam sit amet nisl purus. 1",
		},
		{
			src: "https://picsum.photos/id/238/100/100",
			name: "Lorem",
			role: "Ipsum",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Non sodales neque sodales ut etiam sit amet nisl purus. 2",
		},
		{
			src: "https://picsum.photos/100/100",
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

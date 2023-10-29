import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SectionFour from "../components/sections/sectionFour/SectionFour";
import SectionOne from "../components/sections/sectionOne/SectionOne";
import SectionThree from "../components/sections/sectionThree/SectionThree";
import SectionTwo from "../components/sections/sectionTwo/SectionTwo";

const Home = () => {
	return <div>
		<Header />
		<SectionOne />
		<SectionTwo />
		<SectionThree />
		<SectionFour />
		<Footer />
	</div>;
};

export default Home;

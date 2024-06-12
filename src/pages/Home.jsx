import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SectionFive from "../components/sections/sectionFive/SectionFive";
import SectionFour from "../components/sections/sectionFour/SectionFour";
import SectionOne from "../components/sections/sectionOne/SectionOne";
import SectionThree from "../components/sections/sectionThree/SectionThree";
import SectionTwo from "../components/sections/sectionTwo/SectionTwo";

const Home = () => {
	return <div>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-36LJCP6E0B">
		</script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-36LJCP6E0B');
		</script>
		<Header />
		<SectionOne />
		<SectionTwo />
		<SectionThree />
		<SectionFive />
		<SectionFour />
		<Footer /> 
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-36LJCP6E0B">
		</script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-36LJCP6E0B');
		</script>
	</div>;
};

export default Home;

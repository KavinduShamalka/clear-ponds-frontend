import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import one from "../images/14.jpg";
import Aquarium from "../components/Aquarium";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        clsName="hero"
        heroImg={one}
        title="Dive into Our Aquatic Paradise"
        text="Discover the Wonders of the Deep"
        btnText="Explore"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Aquarium />
      <Footer />
    </>
  );
};

export default Home;

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImage from "../images/17.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        clsName="heroMid"
        heroImg={aboutImage}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;

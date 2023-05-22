import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import serviceImage from "../images/9.jpg";
import Footer from "../components/Footer";
import Aquarium from "../components/Aquarium";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        clsName="heroMid"
        heroImg={serviceImage}
        title="Service"
        btnClass="hide"
      />
      <Aquarium />
      <Footer />
    </>
  );
};

export default Service;

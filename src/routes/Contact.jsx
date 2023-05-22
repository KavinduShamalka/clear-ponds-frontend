import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImage from "../images/11.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        clsName="heroMid"
        heroImg={contactImage}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;

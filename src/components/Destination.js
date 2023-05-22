import "./Destination.css";
import DestinationData from "./DestinationData";
import img1 from "../images/3.jpg";
import img2 from "../images/9.jpg";
import img3 from "../images/15.jpg";
import img4 from "../images/16.jpg";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Fishes</h1>
        <p>You can find out the fishes you are looking for.</p>

        <DestinationData
          className="first-des"
          heading="Heading"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
          img1={img1}
          img2={img2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Heading2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
          img1={img3}
          img2={img4}
        />
      </div>
    </>
  );
};

export default Destination;

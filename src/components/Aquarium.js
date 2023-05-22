import "./Aquarium.css";
import AquariumData from "./AquariumData";
import img1 from "../images/4.jpg";
import img2 from "../images/5.jpg";
import img3 from "../images/6.jpg";

const Aquarium = () => {
  return (
    <>
      <div className="aquarium">
        <h1>Trending Fishes</h1>
        <p>
          Discover the captivating world of aquariums with our curated selection
          of trending fishes.
        </p>
        <div className="aquariumcard">
          <AquariumData
            image={img1}
            heading="Heading1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
          />

          <AquariumData
            image={img2}
            heading="Heading2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
          />

          <AquariumData
            image={img3}
            heading="Heading3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </div>
    </>
  );
};

export default Aquarium;

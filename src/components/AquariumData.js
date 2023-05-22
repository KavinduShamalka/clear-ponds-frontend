import "./Aquarium.css";

const AquariumData = (props) => {
  return (
    <>
      <div className="a-card">
        <div className="a-image">
          <img alt="img" src={props.image} />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default AquariumData;

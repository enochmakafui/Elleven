import firstImage from "../assets/images/Rectangle 302.png";
import secondImage from "../assets/images/Rectangle 303.png";
import thirdImage from "../assets/images/Rectangle 304.png";
import "../CSS/Store.css";
import ButtonLight from "./ButtonLight";

const StoreSection = () => {
  return (
    <div className="store-preview">
      <div>
        <img src={firstImage} alt="laptop" />
      </div>
      <div>
        <img src={secondImage} alt="picture frame" />
        <div className="last-grid-container">
          <img src={thirdImage} alt="picture frame" />
          <img src={thirdImage} alt="picture frame" />
        </div>
      </div>
      <div className="store-text">
        <div className="store-text-container">
          <p>Find the best of picture frames, </p>
          <p>books and digital assets</p>
        </div>
        <ButtonLight> Visit Our Store</ButtonLight>
      </div>
    </div>
  );
};

export default StoreSection;

import firstImage from "../assets/images/Rectangle 302.png";
import secondImage from "../assets/images/Rectangle 303.png";
import thirdImage from "../assets/images/Rectangle 304.png";
import { motion } from "framer-motion";

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
        <p>Find the best of picture frames, </p>
        <p>books and digital assets</p>
        <motion.button
          className="store-preview-btn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          Visit Out Store
        </motion.button>
      </div>
    </div>
  );
};

export default StoreSection;

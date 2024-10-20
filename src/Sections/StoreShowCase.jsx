import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import firstImage from "../assets/images/Rectangle 302.png";
import secondImage from "../assets/images/Rectangle 303.png";
import thirdImage from "../assets/images/Rectangle 304.png";
import "../CSS/StoreShowCase.css";
import ButtonLight from "../components/ButtonLight";

const StoreShowCase = () => {
  const ref = useRef(null);
  const [storeIsVisible, setStoreIsVisible] = useState(false);

  const storeInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (storeInView) {
      setStoreIsVisible(true);
    }
  }, [storeInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="store-preview">
      <div className="first-grid-container">
        <img src={firstImage} alt="laptop" />
      </div>
      <div className="second-grid-container">
        <img src={secondImage} alt="picture frame" />
        <div className="last-grid-container">
          <img src={thirdImage} alt="picture frame" />
          <img src={thirdImage} alt="picture frame" />
        </div>
      </div>
      <div className="store-text">
        <motion.div
          ref={ref}
          className="store-text-container"
          initial="hidden"
          animate={storeIsVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <p>Find the best of picture frames, </p>
          <p>books and digital assets</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={storeIsVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ButtonLight> Visit Our Store</ButtonLight>
        </motion.div>
      </div>
    </div>
  );
};

export default StoreShowCase;

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import cardImage from "../assets/images/card.png";
import "../CSS/ClientSection.css";
const Service = () => {
  const h2Ref = useRef(null);
  const cardRef = useRef(null);

  const h2InView = useInView(h2Ref, { triggerOnce: true, threshold: 0.1 });
  const cardInView = useInView(cardRef, { triggerOnce: true, threshold: 0.1 });

  const [h2Visible, setH2Visible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (h2InView) {
      setH2Visible(true);
    }
  }, [h2InView]);

  useEffect(() => {
    if (cardInView) {
      setCardVisible(true);
    }
  }, [cardInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="service">
      <motion.h2
        ref={h2Ref}
        initial="hidden"
        animate={h2Visible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        Our Scope Of Work
      </motion.h2>
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={cardVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="service-img-container"
      >
        <img src={cardImage} alt="card image" />
        <button className="service-next-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.50006 11H16.0861L11.5861 6.5L13.0001 5.086L19.9141 12L13.0001 18.914L11.5861 17.5L16.0861 13H4.50006V11Z"
              fill="black"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Service;

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import carAnimationVideo from "../assets/Videos/cal2careBrand_videos/car.mp4";
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
        <video autoPlay loop muted>
        <source src={carAnimationVideo} type="video/mp4" />
      </video>
      </motion.div>
    </div>
  );
};

export default Service;

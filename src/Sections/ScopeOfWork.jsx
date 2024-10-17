import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../CSS/ScopeOfWork.css";
import ButtonLight from "../components/ButtonLight";
import BrandCardImage from "../assets/images/ScopeOfWork_Branding_ImageCard.png"
import MarketingCardImage from "../assets/images/ScopeOfWork_Marketing_ImageCard.png"
import WebAndAppCardImage from "../assets/images/ScopeOfWork_Web_and_Design_ImageCard.png"

const ScopeOfWork = () => {
  const h2Ref = useRef(null);
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  const h2InView = useInView(h2Ref, { triggerOnce: true, threshold: 0.1 });
  const cardInView = useInView(cardRef, { triggerOnce: true, threshold: 0.1 });

  const [h2Visible, setH2Visible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  const [buttonVisible, setButtonVisible] = useState(false);

  const btnInView = useInView(btnRef, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (btnInView) {
      setButtonVisible(true);
    }
  }, [btnInView]);

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
      <motion.div
        className="head-text-container"
        ref={btnRef}
        initial="hidden"
        animate={buttonVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <ButtonLight> See all our works</ButtonLight>
      </motion.div>

      <motion.h2
        ref={h2Ref}
        initial="hidden"
        animate={h2Visible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        Our Scope Of Work
      </motion.h2>
      <div
        // ref={cardRef}
        // initial="hidden"
        // animate={cardVisible ? "visible" : "hidden"}
        // variants={variants}
        // transition={{ duration: 0.5 }}
        className="scope-of-work-card-container"
      >
       
       {/* these cards will be replaced with the scope of work card component */}
        <motion.div
        ref={cardRef}
        initial="hidden"
        animate={cardVisible?"visible":"hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}

        >
          <img src={BrandCardImage} alt="branding card "  />
        </motion.div>
        <motion.div
        initial="hidden"
        animate={cardVisible?"visible":"hidden"}
        variants={variants}
        transition={{ duration: 0.5,delay:0.2 }}
        >
          <img src={WebAndAppCardImage} alt="Web and App Development card" />
        </motion.div>

        <motion.div
        initial="hidden"
        animate={cardVisible?"visible":"hidden"}
        variants={variants}
        transition={{ duration: 0.5,delay:0.4 }}
        >
          <img src={MarketingCardImage} alt="Marketing card" />
        </motion.div>
      </div>
    </div>
  );
};

export default ScopeOfWork;

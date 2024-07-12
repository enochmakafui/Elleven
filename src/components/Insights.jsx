import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import athleteImage from "../assets/images/pic.png";
import "../CSS/Insights.css";
import ButtonDark from "./ButtonDark";

const Insights = () => {
  const ref = useRef(null);
  const [containerVisible, setContainerVisible] = useState(false);
  const containerInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (containerInView) {
      setContainerVisible(true);
    }
  }, [containerInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="insights">
      <motion.h2
        ref={ref}
        className="insight-head"
        initial="hidden"
        animate={containerVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        Some insights from us
      </motion.h2>

      <motion.div
        className="insights-section"
        initial="hidden"
        animate={containerVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="article-about">
          <p>Article by Richmond Aryeh | 2024</p>
          <p className="title">
            The power of branding for small-scale startups
          </p>
          <p className="description">
            Branding has become an essential part of business development and is
            fast becoming quite indispensable in the priority of business needs
            globally.
          </p>
          <ButtonDark style={{ alignSelf: "flex-start" }}>
            {" "}
            Read more
          </ButtonDark>
        </div>
        <img src={athleteImage} alt="an athlete" />
      </motion.div>
    </motion.div>
  );
};

export default Insights;

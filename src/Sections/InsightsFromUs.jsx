import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import thinkOutsideBoxImage from '../assets/images/ThinkOutSideBox.jpeg'
import "../CSS/InsightsFromUs.css";

const InsightsFromUs = () => {
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
        <div className="insights-text-box">
          <h2>Think outside the box</h2>
          <p>The Creative Journey Starts Here</p>
         
        </div>
        <img src={thinkOutsideBoxImage} alt="an athlete" />
      </motion.div>
    </motion.div>
  );
};

export default InsightsFromUs;

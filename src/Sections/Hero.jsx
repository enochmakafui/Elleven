import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../CSS/Hero.css";
import ButtonLight from "../components/ButtonLight";
import ButtonDark from "../components/ButtonDark";

const Hero = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="hero">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="hero-heading"
      >
        We are a creative agency
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="hero-heading"
      >
        building brands that
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
        className="hero-heading"
      >
        make a difference
      </motion.h2>
      <div className="hero-btn-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
        >
          <ButtonLight>Let&apos;s Talk</ButtonLight>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        >
          <ButtonDark style={{ borderColor: "#fff" }}>See our work</ButtonDark>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import "../CSS/Hero.css";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";
const Hero = () => {
  return (
    <motion.div>
      <section className="hero">
        <h2>We are a creative agency</h2>
        <h2>building brands that</h2>
        <h2>make a difference</h2>
        <div className="hero-btn-container">
          <ButtonLight>Lets Talk</ButtonLight>
          <ButtonDark>See our work</ButtonDark>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;

import { motion } from "framer-motion";

const ButtonLight = ({ children, style }) => {
  return (
    <motion.button className="light-btn" style={style}>
      <span className="button-text">{children}</span>
      <span className="arrow">→</span>
    </motion.button>
  );
};

export default ButtonLight;

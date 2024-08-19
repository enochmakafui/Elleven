import { motion } from "framer-motion";

const ButtonDark = ({ children, style }) => {
  return (
    <motion.button className="dark-btn" style={style}>
      <span className="button-text">{children}</span>
      <span className="arrow">→</span>
    </motion.button>
  );
};

export default ButtonDark;

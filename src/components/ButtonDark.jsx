import { motion } from "framer-motion";

const ButtonDark = ({ children, style }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="dark-btn"
      style={style}
    >
      {children}
    </motion.button>
  );
};

export default ButtonDark;

import { motion } from "framer-motion";

const ButtonLight = ({ children }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} className="light-btn">
      {children}
    </motion.button>
  );
};

export default ButtonLight;

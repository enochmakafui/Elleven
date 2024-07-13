import { motion } from "framer-motion";

const ButtonLight = ({ children,style }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} className="light-btn" style={style}>
      {children}
    </motion.button>
  );
};

export default ButtonLight;

import { motion } from "framer-motion";

const DropItem = () => {
  return (
    <motion.ul
      className="drop-item"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
    >
      <motion.li
        whileHover={{ scale: 1.1, backgroundColor: "#ff7e21" }}
        transition={{ type: "spring" }}
      >
        Branding
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1, backgroundColor: "#ff7e21" }}
        transition={{ type: "spring" }}
      >
        Web & App Design
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1, backgroundColor: "#ff7e21" }}
        transition={{ type: "spring" }}
      >
        Marketting
      </motion.li>
    </motion.ul>
  );
};

export default DropItem;

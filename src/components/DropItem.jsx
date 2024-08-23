import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/brand">Branding</NavLink>
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

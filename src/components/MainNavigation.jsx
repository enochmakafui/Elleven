import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DropItem from "./DropItem";

const MainNavigation = () => {
  const [isExpanded, setExpanded] = useState(false);

  const dropDownBtnHandler = () => {
    setExpanded(!isExpanded);
  };
  return (
    <nav>
      <h1>Elleven</h1>
      <ul>
        <li>
          <NavLink className="navlinks">Our Story </NavLink>
        </li>
        <li>
          <NavLink style={{ position: "relative" }} className="navlinks">
            Our Work
            <button className="dropdown-button" onClick={dropDownBtnHandler}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="dropdown-icon"
                animate={{ rotate: isExpanded ? 180 : 0 }}
              >
                <path
                  d="M18 10.5L12 16.5L6 10.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
            <AnimatePresence>{isExpanded && <DropItem />}</AnimatePresence>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks">Store </NavLink>
        </li>
        <li>
          <NavLink className="navlinks">Blog</NavLink>{" "}
        </li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <NavLink className="start-project">Start a Project</NavLink>
        </motion.li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

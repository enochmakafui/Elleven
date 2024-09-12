import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DropItem from "./DropItem";
import "../CSS/Nav.css";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";

const MainNavigation = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // mobile scroll for small svg

  // haburger menu
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [burger_menu_class, setBurgerMenuClass] = useState("burger-menu");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const dropDownYes = () => {
    setExpanded(true);
  };
  const dropDownNo = () => {
    setExpanded(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleToggleBurgerMenu = () => {
    if (burger_class === "burger-bar unclicked") {
      setBurgerClass("burger-bar clicked");
      setBurgerMenuClass("burger-menu clicked");
      setMenuOpen(true);
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuOpen(false);
      setBurgerMenuClass("burger-menu");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <h1>
        <NavLink to="/"> Elleven</NavLink>
      </h1>
      <ul className={isMenuOpen ? "menu-open" : ""}>
        <li>
          <NavLink className="navlinks">Our Story </NavLink>
        </li>
        <li>
          <NavLink
            style={{ position: "relative" }}
            className="navlinks"
            onMouseOver={dropDownYes}
            onMouseLeave={dropDownNo}
          >
            Our Work
            <button className="dropdown-button">
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
                  stroke={scrolled ? "black" : "white"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
            <AnimatePresence>{isExpanded && <DropItem />}</AnimatePresence>
          </NavLink>
        </li>
        {/* <li>
          <DropItem />
        </li> */}
        <li>
          <NavLink className="navlinks">Store </NavLink>
        </li>
        <li>
          <NavLink className="navlinks">Blog</NavLink>{" "}
        </li>
        <li>
          <NavLink>
            {scrolled ? (
              <ButtonDark
                style={{
                  // padding: "10px 25px",
                  fontSize: "20px",
                }}
              >
                Start a Project
              </ButtonDark>
            ) : (
              <ButtonLight
                style={{
                  // padding: "10px 25px",
                  fontSize: "20px",
                }}
              >
                Start a Project
              </ButtonLight>
            )}
          </NavLink>
        </li>
      </ul>
      <div className={burger_menu_class} onClick={handleToggleBurgerMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
    </nav>
  );
};

export default MainNavigation;

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import DropItem from "./DropItem";
import "../CSS/Nav.css";

const MainNavigation = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // mobile scroll for small svg

  // hamburger menu
  // const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // const [burger_menu_class, setBurgerMenuClass] = useState("burger-menu");
  // const [isMenuOpen, setMenuOpen] = useState(false);

  let timeOutId;
  const dropDownYes = () => {
    clearTimeout(timeOutId);
    setExpanded(true);
  };
  const dropDownNo = () => {
    timeOutId = setTimeout(() => {
      setExpanded(false);
    }, 300);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // const handleToggleBurgerMenu = () => {
  //   if (burger_class === "burger-bar unclicked") {
  //     setBurgerClass("burger-bar clicked");
  //     setBurgerMenuClass("burger-menu clicked");
  //     setMenuOpen(true);
  //   } else {
  //     setBurgerClass("burger-bar unclicked");
  //     setMenuOpen(false);
  //     setBurgerMenuClass("burger-menu");
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled?"scrolled":""}>
      <div className="nav__logo">
        <NavLink to="/">
          <h1>Elleven</h1>
        </NavLink>
      </div>
      <ul className="nav__links">
        <li className="nav__item">
          <NavLink className="nav__link">Our Story </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link test"
            onMouseOver={dropDownYes}
            onMouseLeave={dropDownNo}
          >
            <button className="nav__link--btn">
              Our Works
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
              >
                <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
              </svg>
            </button>
            {isExpanded && <DropItem />}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link nav__link--store">
            Store 
            <ShoppingCart className="shopping-cart-icon"/>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link">Blog</NavLink>
        </li>
        <li className="nav__item ">
          <NavLink className="nav__link nav__link--start-project" >Start a Project</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

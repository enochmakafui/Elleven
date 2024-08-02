import { motion } from "framer-motion";
import { useState } from "react";

const ButtonDark = ({ children, style }) => {
  const [showArrow,setShowArrow] = useState(false);
  const handleShowArrow = () =>{
    setShowArrow(true)
  }
  const handleHideArrow = () =>{
    setShowArrow(false)
  }

  return (
    <motion.button
      // whileHover={}
      onMouseEnter={handleShowArrow}
      onMouseLeave={handleHideArrow}
      className="dark-btn"
      style={style}
    >
      {children}
      {
        showArrow &&  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M4.50006 11.4999H16.0861L11.5861 6.99994L13.0001 5.58594L19.9141 12.4999L13.0001 19.4139L11.5861 17.9999L16.0861 13.4999H4.50006V11.4999Z"
          fill="white"
        />
      </svg>
      }
    </motion.button>
  );
};

export default ButtonDark;
 
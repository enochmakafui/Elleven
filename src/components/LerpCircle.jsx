import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const LerpCirlce = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="lerp-container">
      <motion.div
        className="lerp-circle"
        style={{
          top: position.y - 25,
          left: position.x - 25,
        }}
      ></motion.div>
    </div>
  );
};

export default LerpCirlce;

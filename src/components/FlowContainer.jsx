import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const SLIDES = [
  "BRAND STRATEGY & IDENTITY",
  "UI/UX DESIGN",
  "GRAPHIC & MOTION DESIGN",
  "WEB & APP DEVELOPMENT",
  "SOCIAL MEDIA",
];

const FlowContainer = () => {
  const [totalWidth, setTotalWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth / 2; // Half because we are duplicating the slides
      setTotalWidth(sliderWidth);
    }
  }, []);

  return (
    <div
      className="flow-container"
      style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex" }}
    >
      <motion.div
        className="slider"
        ref={sliderRef}
        initial={{ x: 0 }}
        animate={{ x: -totalWidth }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {SLIDES.concat(SLIDES).map((slide, index) => (
          <div key={index} className="slide">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <ellipse
                  cx="8.81461"
                  cy="9.55157"
                  rx="8.35732"
                  ry="8.87965"
                  transform="rotate(3.15994 8.81461 9.55157)"
                  fill="#FF7E21"
                />
              </svg>
            </span>
            {slide}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FlowContainer;

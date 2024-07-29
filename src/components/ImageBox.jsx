import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const ImageBox = ({ imageSrc, altText }) => {
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const boxRef = useRef(null);
  const boxInView = useInView(boxRef, { triggerOnce: true, threshold: 0.1 });
  useEffect(() => {
    if (boxInView) {
      setBoxIsVisible(true);
    }
  }, [boxInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={boxRef}
      variants={variants}
      initial="hidden"
      animate={boxIsVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      
    >
      <img src={imageSrc} alt={altText} />
    </motion.div>
  );
};

export default ImageBox;

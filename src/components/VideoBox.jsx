import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VideoBox = ({ videoSrc }) => {
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
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </motion.div>
  );
};
export default VideoBox;

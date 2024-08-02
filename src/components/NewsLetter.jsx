import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../CSS/NewsLetter.css";
const NewsLetter = () => {
  const ref = useRef(null);
  const [isVisible, setIsvisible] = useState(false);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsvisible(true);
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="news-letter"
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p>Subscribe to our newsletter to get </p>
        <p>latest news in your inbox.</p>
      </div>
      <form action="">
        <input type="email" placeholder="enter your email" />
      </form>
      <motion.button className="subscribe-btn" whileHover={{ scale: 1.1 }}>
        Subscribe{" "}
       
      </motion.button>
    </motion.div>
  );
};

export default NewsLetter;

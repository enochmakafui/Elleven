import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import "../CSS/ArticleOverView.css";
import firstImage from "../assets/images/Rectangle 306 (2).png";
import secondImage from "../assets/images/Rectangle 306 (3).png";
import thirdImage from "../assets/images/Rectangle 306 (4).png";
import fouthImage from "../assets/images/Rectangle 306 (5).png";

const ArticlesOverView = () => {
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
    <div className="articles">
      <motion.h2
        ref={ref}
        className="article-head"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        More Articles
      </motion.h2>
      <motion.ul
        className="article-items"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li>
          <img src={firstImage} alt="food" />
          <p className="article-title">The Business of Design</p>
          <small className="article-author">Richmond Aryeh</small>
        </li>
        <li>
          <img src={secondImage} alt="food" />
          <p className="article-title">UX Research 101</p>
          <small className="article-author">Richmond Aryeh</small>
        </li>
        <li>
          <img src={thirdImage} alt="food" />
          <p className="article-title">Colours in UI Design</p>
          <small className="article-author">Joseph Sa-Ambo</small>
        </li>
        <li>
          <img src={fouthImage} alt="food" />
          <p className="article-title">Client Relationships</p>
          <small className="article-author">Joseph Sa-Ambo</small>
        </li>
      </motion.ul>
    </div>
  );
};

export default ArticlesOverView;

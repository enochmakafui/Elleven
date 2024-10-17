// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
import "../CSS/NewsLetter.css";
import ButtonLight from "./ButtonLight";
const NewsLetter = () => {
  // const ref = useRef(null);
  // const [isVisible, setIsvisible] = useState(false);
  // const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <div className="news-letter">
      <div>
        <p>
          Subscribe to our newsletter to <br /> get latest news in your inbox.
        </p>
      </div>
      <form action="">
        <input type="email" placeholder="Enter your email" required />
      </form>
      <ButtonLight>Subscribe</ButtonLight>
    </div>
  );
};

export default NewsLetter;

import { motion } from "framer-motion";
import "../CSS/NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div>
        <p>Subscribe to our newsletter to get </p>
        <p>latest news in your inbox.</p>
      </div>
      <form action="">
        <input type="email" placeholder="enter your email" />
      </form>
      <motion.button
        className="subscribe-btn"
        whileHover={{ scale: 1.1 }}
      >
        Subscribe{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M4.50006 11.4999H16.0861L11.5861 6.99994L13.0001 5.58594L19.9141 12.4999L13.0001 19.4139L11.5861 17.9999L16.0861 13.4999H4.50006V11.4999Z"
            fill="black"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default NewsLetter;

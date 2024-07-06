import athleteImage from "../assets/images/pic.png";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <div>
      <h2 className="insight-head">Some insights from us</h2>

      <div className="insights-section">
        <div className="article-about">
          <p>Article by Richmond Aryeh | 2024</p>
          <p className="title">
            The power of branding for small-scale startups
          </p>
          <p className="description">
            Branding has become an essential part of business development and is
            fast becoming quite indispensable in the priority of business needs
            globally.
          </p>
          <motion.button
            className="read-more-btn"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            Read more
          </motion.button>
        </div>
        <img src={athleteImage} alt="an athlete" />
      </div>
    </div>
  );
};

export default Insights;

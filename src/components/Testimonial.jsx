import AvatarImage from "../assets/images/Ellipse 67.png";
import { motion } from "framer-motion";
import "../CSS/Testimonial.css"
const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2>What our clients say about us</h2>
      <div className="testimonial-text">

      <p>
        Avat and his team did a brilliant job on strategy for my company’s
        marketing and branding efforts which led to a dramatic and sharp
        increase in sales as well as a first round pre-seed funding of 20,000
        USD
      </p>
      <div className="profile">
        <img src={AvatarImage} alt="profile image" />
        <div className="profile-about">
          <p>Jonathan Mensah</p>
          <p className="role">CEO of ReHome Africa</p>
        </div>
      </div>
      </div>
      <motion.button
        className="next-profile-btn"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M9.00013 22H32.1721L23.1721 13L26.0001 10.172L39.8281 24L26.0001 37.828L23.1721 35L32.1721 26H9.00013V22Z"
            fill="white"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Testimonial;

import { useState, useEffect, useRef } from "react";
import AvatarImage from "../assets/images/Ellipse 67.png";
import { motion, useInView } from "framer-motion";
import "../CSS/Testimonial.css";
const Testimonial = () => {
  const testimonialRef = useRef(null);
  const btnRef = useRef(null);
  const [testimonialVisible, setTestimonialVisible] = useState(null);
  const [btnVisible, setBtnVisible] = useState(null);

  const testimonialInView = useInView(testimonialRef, {
    triggerOnce: true,
    threshold: 0.1,
  });
  const btnInview = useInView(btnRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (testimonialInView) {
      setTestimonialVisible(true);
    }
  }, [testimonialInView]);

  useEffect(() => {
    if (btnInview) {
      setBtnVisible(true);
    }
  }, [btnInview]);

  return (
    <motion.div className="testimonial">
      <motion.h2
        ref={testimonialRef}
        initial="hidden"
        animate={testimonialVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        What our clients say about us
      </motion.h2>
      <div className="testimonial-text">
        <motion.p
          initial="hidden"
          animate={testimonialVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Avat and his team did a brilliant job on strategy for my company’s
          marketing and branding efforts which led to a dramatic and sharp
          increase in sales as well as a first round pre-seed funding of 20,000
          USD
        </motion.p>
        <motion.div
          className="profile"
          ref={btnRef}
          initial="hidden"
          animate={btnVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AvatarImage} alt="profile image" />
          <div className="profile-about">
            <p>Jonathan Mensah</p>
            <p className="role">CEO of ReHome Africa</p>
          </div>
        </motion.div>
      </div>
      <motion.button className="next-profile-btn" whileHover={{ scale: 1.1 }}>
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
    </motion.div>
  );
};

export default Testimonial;

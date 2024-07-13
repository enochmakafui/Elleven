import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pngwingImage from "../assets/images/pngwing 1.png";
import freshbayImage from "../assets/images/freshbay.png";
import securebytesImage from "../assets/images/securebytes.png";
import rehomeImage from "../assets/images/rehome.png";
import atlImage from "../assets/images/atl.png";
import lnugsImage from "../assets/images/lnugs.png";
import "../CSS/ClientSection.css";
const Client = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const imageContainerRef = useRef(null);

  const imageContainerInView = useInView(imageContainerRef, {
    triggerOnce: true,
    threshold: 0.1,
  });
  const h2InView = useInView(h2Ref, { triggerOnce: true, threshold: 0.1 });
  const pInView = useInView(pRef, { triggerOnce: true, threshold: 0.1 });

  const [h2Visible, setH2Visible] = useState(false);
  const [pVisible, setPVisible] = useState(false);
  const [imageContainerVisible, setImageContainerVisible] = useState(false);

  useEffect(() => {
    if (h2InView) {
      setH2Visible(true);
    }
  }, [h2InView]);

  useEffect(() => {
    if (pInView) {
      setPVisible(true);
    }
  }, [pInView]);
  useEffect(() => {
    if (imageContainerInView) {
      setImageContainerVisible(true);
    }
  }, [imageContainerInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="client">
      <div >
        <motion.h2
          ref={h2Ref}
          initial="hidden"
          animate={h2Visible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          The clients we serve
        </motion.h2>
        <motion.p
          ref={pRef}
          initial="hidden"
          animate={pVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          We have been privileged to work with some of these awesome brands
        </motion.p>
      </div>
      <motion.div ref={imageContainerRef} className="client-img-container">
        <div className="image-box">
          <motion.img
            src={freshbayImage}
            alt="freshbay logo"
            className="freshbay-img"
            initial="hidden"
            animate={imageContainerVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="image-box">
          <motion.img
            src={securebytesImage}
            alt="securebytes logo"
            className="securebytes-img"
            initial="hidden"
            animate={imageContainerVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <div className="image-box"> 
          <motion.img
            src={rehomeImage}
            alt="rehome logo"
            className="rehome-img"
            initial="hidden"
            animate={imageContainerVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <div className="image-box">
          <motion.img
            src={atlImage}
            alt="atlantic hall logo"
            className="atl-img"
            initial="hidden"
            animate={imageContainerVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div>
        <div className="image-box">
          <motion.img
            src={lnugsImage}
            alt="lnugs logo"
            className="lnugs-img"
            initial="hidden"
            animate={imageContainerVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
        <div className="image-box">
          <motion.img
            src={pngwingImage}
            alt="navida logo"
            className="navida-img"
            initial="hidden"
            animate={imageContainerVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Client;

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pngWingImage from "../assets/images/pngwing 1.png";
import freshBayImage from "../assets/images/freshbay.png";
import secureBytesImage from "../assets/images/securebytes.png";
import reHomeImage from "../assets/images/rehome.png";
import atlImage from "../assets/images/atl.png";
import lNugsImage from "../assets/images/lnugs.png";
import "../CSS/ClientsWeServe.css";
import ClientImageCard from "../components/ClientImageCard";
const ClientsWeServe = () => {
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
      <div>
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
      <motion.div ref={imageContainerRef} className="client-images-container">
        <ClientImageCard
          imageSrc={freshBayImage}
          imageVisible={imageContainerVisible}
          duration={0.5}
        />
        <ClientImageCard
          imageSrc={secureBytesImage}
          imageVisible={imageContainerVisible}
          duration={0.5}
          delay={0.2}
        />
        <ClientImageCard
          imageSrc={reHomeImage}
          imageVisible={imageContainerVisible}
          duration={0.5}
          delay={0.4}
        />
        <ClientImageCard
          imageSrc={atlImage}
          imageVisible={imageContainerVisible}
          duration={0.5}
          delay={0.6}
        />
        <ClientImageCard
          imageSrc={lNugsImage}
          imageVisible={imageContainerVisible}
          duration={0.5}
          delay={0.8}
        />
        <ClientImageCard
          imageSrc={pngWingImage}
          imageVisible={imageContainerVisible}
          duration={0.5}
          delay={1}
        />
      </motion.div>
    </div>
  );
};

export default ClientsWeServe;

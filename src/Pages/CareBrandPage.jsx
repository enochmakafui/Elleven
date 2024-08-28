import image1 from "../assets/images/start-project-images/Image1.png";
import image2 from "../assets/images/start-project-images/Image2.png";
import image3 from "../assets/images/start-project-images/Image3.png";
import image4 from "../assets/images/start-project-images/Image4.png";
import image5 from "../assets/images/start-project-images/Image5.png";
import image6 from "../assets/images/start-project-images/Image6.png";
import image7 from "../assets/images/start-project-images/Image7.png";
import image8 from "../assets/images/start-project-images/Image8.png";
import image9 from "../assets/images/start-project-images/Image9.png";
import image10 from "../assets/images/start-project-images/Image10.png";
import image12 from "../assets/images/start-project-images/Image12.png";
import flyerImage from "../assets/images/start-project-images/flyer  .png";
import insideCareOfficeImage from "../assets/images/start-project-images/inside care office.png";
import mainBrochureImage from "../assets/images/start-project-images/main brochure m ockup.png";
import temporaryStaffImage from "../assets/images/start-project-images/Temporary  staffing brochure mockup@0.75x.png";
import supportedLivingRoomImage from "../assets/images/start-project-images/supported living mockup.jpg";
import trifoldBrochureImage from "../assets/images/start-project-images/trifold Brochure mockup.png";
import weCareAnimationVideo from "../assets/Videos/we care with love fin.mp4";
// import nextProjectImage from "../assets/images/start-project-images/next project.png";
import carAnimationVideo from "../assets/Videos/car.mp4";
import ImageBox from "../components/ImageBox";
import VideoBox from "../components/VideoBox";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const CareBrandPage = () => {
  const textBoxRef = useRef(null);
  const rebrandBoxRef = useRef(null);
  const testimonialBoxRef = useRef(null);


  const [freshBayImageVisible, setFreshBayImageVisible] = useState(false);
  const [textBoxIsVisible, setTextBoxIsVisible] = useState(false);
  const [rebrandBoxIsVisible, setRebrandBoxIsVisible] = useState(false);
  const [testimonialBoxIsVisible, setTestimonialBoxIsVisible] = useState(false);

  const showFreshBayImageHandler = ()=>{
    setFreshBayImageVisible(true);
  }
  
  const testimonialBoxInView = useInView(testimonialBoxRef, {
    triggerOnce: true,
    threshold: 0.1,
  });


  const rebrandBoxInView = useInView(rebrandBoxRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const textBoxInView = useInView(textBoxRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (testimonialBoxInView) {
      setTestimonialBoxIsVisible(true);
    }
  }, [testimonialBoxInView]);

  useEffect(() => {
    if (textBoxInView) {
      setTextBoxIsVisible(true);
    }
  }, [textBoxInView]);

  useEffect(() => {
    if (rebrandBoxInView) {
      setRebrandBoxIsVisible(true);
    }
  }, [rebrandBoxInView]);
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="start-project-main">
      <VideoBox videoSrc={weCareAnimationVideo} />
      <div className=" text-container ">
        <motion.div
          ref={textBoxRef}
          className="brand-box"
          variants={variants}
          initial="hidden"
          animate={textBoxIsVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <p>Call2Care solutions UK</p>
          <p className="brand-text">Rebrand</p>
          <p className="brand-text-small">
            A Domiciliary care service provider
          </p>
        </motion.div>

        <motion.div
          className="description"
          variants={variants}
          initial="hidden"
          animate={textBoxIsVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Some brands are deeply embedded with the essence of compassion and
          humanity, possessing the power to provide comfort, support, and hope
          to those in need. When Call2 Care Solution approached us for their
          rebranding project, we recognized that we were about to collaborate
          with a brand that epitomizes the genuine spirit of care and love.
        </motion.div>
      </div>
      <ImageBox imageSrc={image1} altText="cal2care picture" />
      <ImageBox imageSrc={image2} altText="cal2care picture " />

      <div
      className="text-container"
      >
        <motion.div
          ref={rebrandBoxRef}
          className="brand-decision-container"
          variants={variants}
          initial="hidden"
          animate={rebrandBoxIsVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <p className="head">The Decision to Rebrand</p>
          <p>
            <span className="sub-head"> Uniqueness:</span> The clients previous
            logo was similar to others in the industry, lacking a unique
            identity that set them apart
          </p>
          <p>
            <span className="sub-head">Color Scheme:</span> The old color scheme
            failed to clearly represent the company’s values of trust, unity,
            and care.
          </p>
          <p>
            <span className="sub-head">Icon Misinterpretation:</span> The call
            icon in the previous logo was often mistaken for a phone call,
            rather than symbolizing a natural call to care as an ethos.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={rebrandBoxIsVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={image3} alt="cal2care picture" />
        </motion.div>
      </div>
      <ImageBox imageSrc={image4} altText="cal2care picture " />
      <ImageBox imageSrc={image5} altText="cal2care picture " />
      <ImageBox imageSrc={image6} altText="cal2care picture " />
      <ImageBox imageSrc={image7} altText="cal2care picture " />
      <ImageBox imageSrc={image8} altText="cal2care picture " />
      <ImageBox imageSrc={image9} altText="cal2care picture " />
      <ImageBox imageSrc={image10} altText="cal2care picture " />
      <ImageBox imageSrc={insideCareOfficeImage} altText="cal2care picture " />
      <ImageBox imageSrc={image12} altText="cal2care picture " />
      <VideoBox videoSrc={carAnimationVideo} />
      <div className="testimonial-box">
        <motion.div
          ref={testimonialBoxRef}
          variants={variants}
          initial="hidden"
          animate={testimonialBoxIsVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        
        >
          <p className="main-text">
            “I was impressed by the outcome so I awarded a 3-month contract to
            Elleven to aid in the post branding process. The team did my
            company’s brochures and social media posts and they were awesome.”
          </p>
          <p> Pius- Call2Care Solutions CEO</p>
        </motion.div>
      </div>
      <ImageBox imageSrc={temporaryStaffImage} altText="cal2care picture" />
      <div className="tilted-image-box">
        <div className="box-1">
          <img src={supportedLivingRoomImage} alt="" />
        </div>
        <div className="box-2">
          <img src={mainBrochureImage} alt="" />
        </div>
      </div>
      <ImageBox imageSrc={trifoldBrochureImage} altText="cal2care picture" />
      <ImageBox imageSrc={flyerImage} altText="cal2care picture" />
      {/* <div  >
        {
          freshBayImageVisible?
        (<img src={nextProjectImage} alt="next project image" />):<img src={} alt=""/>}
      </div> */}
    </main>
  );
};

export default CareBrandPage;

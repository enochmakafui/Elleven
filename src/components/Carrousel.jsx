import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../CSS/Carrousel.css";
import "swiper/css";

import { Navigation, Autoplay } from "swiper/modules";

import callCareImage from "../assets/images/call2care.png";
import menSmileImage from "../assets/images/men-smile.png";
import menPoseImage from "../assets/images/men-pose.png";

const Images = [
  callCareImage,
  menSmileImage,
  menPoseImage,
  callCareImage,
  menSmileImage,
  menPoseImage,
];

const Carrousel = () => {
  const carrouselRef = useRef(null);
  const CarrousselInView = useInView(carrouselRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const [carrouselVisible, setCarrouselVisible] = useState(false);

  useEffect(() => {
    if (CarrousselInView) {
      setCarrouselVisible(true);
    }
  }, [CarrousselInView]);



  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="carrousel">
      <motion.div
        className="carrousel-container"
        ref={carrouselRef}
        initial="hidden"
        animate={carrouselVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          // slidesPerView={1.7}
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          loop={true}
          speed={2000}
          breakpoints={{
            // Adjust slidesPerView based on screen width
            500: {
              slidesPerView: 1,
              spaceBetween: 10, // For mobile screens
            },
            768: {
              slidesPerView: 1.7, // For tablets and larger screens
            },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="swiper-container"
        >
          {Images.map((image, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isNext, isPrev }) => (
                <div
                  className={`swiper-slide ${
                    isActive
                      ? "swiper-slide-active"
                      : isNext
                      ? "swiper-slide-next"
                      : isPrev
                      ? "swiper-slide-prev"
                      : ""
                  }`}
                >
                  {/* <img src={image} alt={`slide ${index}`} /> */}
                  <LazyLoadImage
                    src={image}
                    alt={`slide ${index}`}
                    className="image"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M38.9999 22H15.8279L24.8279 13L21.9999 10.172L8.17188 24L21.9999 37.828L24.8279 35L15.8279 26H38.9999V22Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="swiper-button-next">
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
        </button>
      </motion.div>
     
    </div>
  );
};

export default Carrousel;

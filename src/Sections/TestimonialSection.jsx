import {useEffect,useState,useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

// import { useState, useEffect, useRef } from "react";
// import AvatarImage from "../assets/images/Ellipse 67.png";
import { motion, useInView } from "framer-motion";
import "../CSS/TestimonialSection.css";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialSection = () => {
  const testimonialRef = useRef(null);
  // const btnRef = useRef(null);
  const [testimonialVisible, setTestimonialVisible] = useState(null);
  // const [btnVisible, setBtnVisible] = useState(null);

  const testimonialInView = useInView(testimonialRef, {
    triggerOnce: true,
    threshold: 0.1,
  });
  // const btnInview = useInView(btnRef, {
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  useEffect(() => {
    if (testimonialInView) {
      setTestimonialVisible(true);
    }
  }, [testimonialInView]);

  // useEffect(() => {
  //   if (btnInview) {
  //     setBtnVisible(true);
  //   }
  // }, [btnInview]);
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
    ref={testimonialRef}
    className="testimonial"
    initial="hidden"
    animate={testimonialVisible?"visible":"hidden"}
    variants={variants}
    
    >
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        centeredSlides={true}
        loop={true}
        className="testimonial-swiper-container"
        
        breakpoints={{
          // Adjust slidesPerView based on screen width
          500: {
            slidesPerView: 1,
            spaceBetween: 10, // For mobile screens
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
        }}
        navigation={{
          prevEl: ".testimonial-button-prev",
          nextEl: ".testimonial-button-next",
        }}
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
      <button className="testimonial-button-prev">
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
        <button className="testimonial-button-next">
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
  );
};

export default TestimonialSection;

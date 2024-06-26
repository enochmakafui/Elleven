import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import callCareImage from "../assets/images/call2care.png";
import menSmileImage from "../assets/images/men-smile.png";
import menPoseImage from "../assets/images/men-pose.png";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Images = [callCareImage, menSmileImage, menPoseImage];

const Carrousel = () => {
  return (
    <>
      <div className="carrousel-container">
        <Swiper
          effect={"coverflow"}
          modules={[
            EffectCoverflow,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="swiper-container"
        >
          {Images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={image} alt={`slide ${index}`} />
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
      </div>
      <div className="carrousel-work-btn">
        <button className="start-project-btn ">See all our works</button>
      </div>
    </>
  );
};

export default Carrousel;

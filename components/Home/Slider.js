import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, Autoplay, EffectFade } from "swiper";

const Slider = () => {
  return (
<>
    <style>
      {
        `


    
        `
      }
    </style>

    <div className="banner-area">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          pauseOnMouseEnter: true,
        }}
        priority
        effect={"fade"}
        speed={500}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <a
            href="https://play.google.com/store/apps/details?id=com.healer.patient"
            target={"_blank"}
          >
            <Image
              priority
              src="/img/banners/1.jpg"
              height={650}
              width={2000}
              className=" drop-shadow-md"
              alt="icon"
            />
          </a>
        </SwiperSlide>
       
        <SwiperSlide>
          <a
            href="https://play.google.com/store/apps/details?id=com.healer.patient"
            target={"_blank"}
          >
            <Image
              priority
              src="/img/banners/1.png"
              height={650}
              width={2000}
              className=" drop-shadow-md"
              alt="icon"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://play.google.com/store/apps/details?id=com.healer.patient"
            target={"_blank"}
          >
            <Image
              priority
              src="/img/banners/2.png"
              height={650}
              width={2000}
              className=" drop-shadow-md"
              alt="icon"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://play.google.com/store/apps/details?id=com.healer.patient"
            target={"_blank"}
          >
            <Image
              priority
              src="/img/banners/3.png"
              height={650}
              width={2000}
              className=" drop-shadow-md"
              alt="icon"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Slider;

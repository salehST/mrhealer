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

      .banner-area  .swiper-button-prev, .banner-area .swiper-rtl .swiper-button-next {
          left: 0;
          right: auto;
          background: linear-gradient(to right, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%);
          background: -moz-linear-gradient(left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(left, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
          transition: 300ms;
          opacity: 0.75;
      }
      .banner-area  .swiper-button-prev:hover, .banner-area .swiper-rtl .swiper-button-next:hover {
        opacity: 1;
      }
      .banner-area  .swiper-button-next, .banner-area .swiper-rtl .swiper-button-prev {
          right: 0;
          left: auto;
          background: -moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.35) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.35) 100%); 
      
      transition: 300ms;
      opacity: 0.75;
      }
      .banner-area  .swiper-button-next:hover, .banner-area .swiper-rtl .swiper-button-prev:hover {
        opacity: 1;
      }
      .banner-area   .swiper-button-next:after, .banner-area .swiper-button-prev:after {
          font-size: 20px;
      }
      .banner-area   .swiper-button-next, .banner-area .swiper-button-prev {
          top: 50%;
          width: 45px;
          height: 100%;
          margin-top: 0;
          transform: translateY(-50%);
          transition: 300ms;
      }
      .banner-area .swiper-button-next,
      .banner-area .swiper-button-prev {
          color: #c9c9c9!important;
      }
      .opening-text {
        position: relative;
    }
    
    .opening-text:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: var(--primary);
    }
    
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
        effect={"fade"}
        speed={500}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative content-slide">
            <Image
              priority
              src="/img/banners/1.jpg"
              height={650}
              width={2000}
              className=" drop-shadow-md"
              alt="icon"
            />
            <div className="content-box container p-4 lg:p-0 flex items-center justify-between mx-auto max-w-screen-xl">
                <div  data-aos="fade-in-left" className="left-part w-full  sm:w-4/6 md:w-3/5">
                  <div className="">
                  <h1 className="opening-text text-xs md:text-xl w-full lg:w-[250px] lg:text-5xl text-primary font-black mb-1 md:mb-4">TREATMENT <span className=" font-light">FOR ALL</span></h1>
                  <p className="text-[10px] md:text-xs lg:text-lg font-normal mb-2 leading-tight md:leading-4">Mr. Healer provides round-the-clock service to medical advice from BMDC Registered Doctors for all users, instant live doctors, sample collection for pathology test, medicine home delivery and even offline chamber booking to ensure your wellbeing !</p>
                  </div>
                  <div className="btn-box flex min-w-max  items-center justify-between gap-4 mt-0 md:mt-6">
                  <a
                  href="https://play.google.com/store/apps/details?id=com.healer.patient"
                  target="_blank"
                  className="flex lg:hidden g-play  h-6 w-auto lg:w-[180px] lg:h-[53px]"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/img/Google_Play_Store_badge.svg"}
                    className=""
                    height={53}
                    width={180}
                    alt="google play store button"
                  />
                </a>
                <div className=" hidden md:flex gap-4 items-center justify-start">
                <span className="text-xs md:text-lg">Follow us on: </span>
                <div className="s-links flex gap-4 items-center justify-start">
                <a href="https://www.facebook.com/MrHealerHS" target="_blank" className="">
                  <span className="flex relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD05A2] opacity-75"></span>
                      <Image
                        height={20}
                        width={20}
                        className=" h-5 w-5"
                        src="/img/social/facebook.svg"
                        alt=""
                      />
                    </span></a>
                    <a href="https://www.youtube.com/@mrhealer" target="_blank" className=""> <span className="flex relative">
                   
                    <Image
                      height={20}
                      width={20}
                      className="blob infinity rounded-full h-5 w-5"
                      src="/img/social/youtube.svg"
                      alt=""
                    />
                    </span></a>
                    <a href="https://www.instagram.com/mrhealerhs/" target="_blank" className="">
                    <span className="flex relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD05A2] opacity-75"></span>
                     <Image
                        height={20}
                        width={20}
                        className="h-5 w-5"
                        src="/img/social/instagram.svg"
                        alt=""
                      />
                    </span></a>
                </div>
                </div>
                  </div>
                </div>
                <div className="right-part hidden sm:flex items-center justify-end">
                  <div className="mobile-img flex flex-col h-52 sm:h-72 w-auto md:h-auto md:w-3/4 items-center ">
                 
                  <Image priority src="/img/mr-healer-app-icon.svg" width={380} height={440} className="flex app-icon pb-6" alt="img" />
                  <a
                  href="https://play.google.com/store/apps/details?id=com.healer.patient"
                  target="_blank"
                  className="hidden lg:flex g-play  h-7 w-auto lg:w-[180px] lg:h-[53px]"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/img/Google_Play_Store_badge.svg"}
                    className=""
                    height={53}
                    width={180}
                    alt="google play store button"
                  />
                </a>
                  </div>
                </div>
            </div>
          </div>
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

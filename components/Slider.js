import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// import required modules
import { Navigation, Autoplay, EffectFade } from "swiper";

const Slider = () => {
  return (
    <div className='banner-area'>
                      <Swiper 
                slidesPerView={1} 
                autoplay={{
					delay: 8000,
					pauseOnMouseEnter: true
				}} 
				effect={"fade"}
				speed={500}
                loop={true}
                navigation={true} 
                modules={[Navigation, Autoplay, EffectFade]} 
                className="mySwiper">
                        <SwiperSlide>
                        	<a href="https://play.google.com/store/apps/details?id=com.healer.patient" target={"_blank"}>
                                <Image lazy src="/img/banners/1.png" height={650} width={2000} className=" drop-shadow-md" alt="icon" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
							<a href="https://play.google.com/store/apps/details?id=com.healer.patient" target={"_blank"}>	
                                <Image lazy src="/img/banners/2.png" height={650} width={2000} className=" drop-shadow-md" alt="icon" />
							</a>
                        </SwiperSlide>
                        <SwiperSlide>
							<a href="https://play.google.com/store/apps/details?id=com.healer.patient" target={"_blank"}>
                                <Image lazy src="/img/banners/3.png" height={650} width={2000} className=" drop-shadow-md" alt="icon" />
							</a>
                        </SwiperSlide>
                </Swiper>
    </div>
//     <div
//   id="carouselExampleCrossfade"
//   className="relative"
//   data-te-carousel-init
//   data-te-carousel-slide>
//   <div
//     className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//     data-te-carousel-indicators>
//     <button
//       type="button"
//       data-te-target="#carouselExampleCrossfade"
//       data-te-slide-to="0"
//       data-te-carousel-active
//       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//       aria-current="true"
//       aria-label="Slide 1"></button>
//     <button
//       type="button"
//       data-te-target="#carouselExampleCrossfade"
//       data-te-slide-to="1"
//       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//       aria-label="Slide 2"></button>
//     <button
//       type="button"
//       data-te-target="#carouselExampleCrossfade"
//       data-te-slide-to="2"
//       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//       aria-label="Slide 3"></button>
//   </div>
//   <div
//     className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//     <div
//       className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-fade
//       data-te-carousel-item
//       data-te-carousel-active>
//       <Image width={2000} height={650}
//         src="/img/banners/1.png"
//         className="block w-full"
//         alt="Wild Landscape" />
//            {/* <div
//         className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//         <h5 className="text-xl">Third slide label</h5>
//         <p>
//           Some representative placeholder content for the third slide.
//         </p>
//       </div> */}
//     </div>
//     <div
//       className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-fade
//       data-te-carousel-item>
//       <Image width={2000} height={650}
//         src="/img/banners/2.png"
//         className="block w-full"
//         alt="Camera" />
//     </div>
//     <div
//       className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-fade
//       data-te-carousel-item>
//       <Image width={2000} height={650}
//         src="/img/banners/3.png"
//         className="block w-full"
//         alt="Exotic Fruits" />
//     </div>
//   </div>
//   <button
//     className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleCrossfade"
//     data-te-slide="prev">
//     <span className="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="h-6 w-6">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5" />
//       </svg>
//     </span>
//     <span
//       className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Previous</span
//     >
//   </button>
//   <button
//     className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleCrossfade"
//     data-te-slide="next">
//     <span className="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="h-6 w-6">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//       </svg>
//     </span>
//     <span
//       className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Next</span
//     >
//   </button>
// </div>



  )
}

export default Slider
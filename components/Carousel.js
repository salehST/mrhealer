
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import Axios from "axios";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";
import DepartmentCarousel from "./DepartmentCarosel";

console.log("API " + process.env.API_URL);
const  Carousel = () => {
    const apiUrl = typeof window !== 'undefined' ? process.env.API_URL : '';
    const [myData, setData] = useState([])
    useEffect(()=>{
        Axios.get(`${apiUrl}/admin/department/all`).then((res)=>{
            setData(res.data);
        }).catch((err) =>{
            console.log(err.res)
        });
    },[]);
    const apiData = Object.entries(myData);
    let departmentData = []
    for ( let value of Object.values(apiData)){
        departmentData = Object.entries(value)[1][1]
    }
  return (    
    <>  
    <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 department-carousel strip-top b-strip">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
            <div  data-aos="fade-up" className="section-title center-title text-center mb-8">
                <h3 className='capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold  mx-auto w-auto'>our Specialty</h3>
            </div>
            <div className="carousel-inner-area">
                <Swiper 
                slidesPerView={4} 
                spaceBetween={30} 
                autoplay={true} 
                loop={true}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    }
                  }} 
                navigation={true} 
                modules={[Navigation, Autoplay]} 
                className="mySwiper">
                    { departmentData.map((el) => {
                        const {dept_id, dept_name, image} = el
                        return  ( 
                            <SwiperSlide>
                                <DepartmentCarousel dept_id={dept_id} dept_name={dept_name} image={image} />
                            </SwiperSlide>
                        )
                    })

                    }
                </Swiper>
            </div>
            <div className="flex justify-center space-x-2">
                <Link href={'/departments'}
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="theme-btn flex items-center gap-2 justify-between rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[#b54ec363] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    View all Departments <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 14.688C10.9166 14.5285 10.8366 14.3358 10.8433 14.1099C10.85 13.884 10.9369 13.6913 11.1041 13.5318L13.4583 11.2793H4.16665C3.93054 11.2793 3.73248 11.2027 3.57248 11.0496C3.41248 10.8965 3.33276 10.7073 3.33332 10.4819C3.33332 10.256 3.41332 10.0665 3.57332 9.9134C3.73332 9.7603 3.93109 9.68402 4.16665 9.68456H13.4583L11.0833 7.41207C10.9166 7.2526 10.8333 7.06309 10.8333 6.84355C10.8333 6.62401 10.9166 6.43477 11.0833 6.27583C11.25 6.11636 11.448 6.03662 11.6775 6.03662C11.9069 6.03662 12.1047 6.11636 12.2708 6.27583L16.0833 9.92376C16.1666 10.0035 16.2258 10.0899 16.2608 10.1829C16.2958 10.2759 16.313 10.3756 16.3125 10.4819C16.3125 10.5882 16.295 10.6879 16.26 10.7809C16.225 10.874 16.1661 10.9603 16.0833 11.0401L12.25 14.7079C12.0972 14.8541 11.9064 14.9272 11.6775 14.9272C11.4486 14.9272 11.2505 14.8475 11.0833 14.688Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Carousel
import React from "react";
import Image from "next/image";


const TopInfo = () => {
  return (
    <section
      id="intro-text"
      className="w-full px-4 py-10 md:py-20 bg-white"
    >
      <div className="container mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between flex-col md:flex-row">
            <div data-aos="fade-in-left" className="left-part intro-text-area w-full order-2 md:order-1 md:w-3/5">
          <div className="relative z-10">
            <h1 className="opening-text text-2xl w-full md:w-[250px] md:text-5xl text-primary font-black mb-3 md:mb-6">
              TREATMENT <span className=" font-light">FOR ALL</span>
            </h1>
            <p className="text-md md:text-lg font-normal mb-3 leading-5">
              Mr. Healer provides round-the-clock service to medical advice from
              BMDC Registered Doctors for all users, instant live doctors,
              sample collection for pathology test, medicine home delivery and
              even offline chamber booking to ensure your wellbeing !
            </p>
          </div>
          <div className="btn-box flex flex-col sm:flex-row  min-w-max  text-start justify-start gap-4 mt-0 md:mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.healer.patient"
              target="_blank"
              className="flex g-play w-[180px] h-[53px]"
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
            <div className=" flex gap-4 items-center justify-start">
              <span className="text-sm md:text-lg">Follow us on: </span>
              <div className="s-links flex gap-4 items-center justify-start">
                <a
                  href="https://www.facebook.com/MrHealerHS"
                  target="_blank"
                  className=""
                >
                  <span className="flex relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD05A2] opacity-75"></span>
                    <Image
                      height={20}
                      width={20}
                      className=" h-5 w-5"
                      src="/img/social/facebook.svg"
                      alt=""
                    />
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/@mrhealer"
                  target="_blank"
                  className=""
                >
                  {" "}
                  <span className="flex relative">
                    <Image
                      height={20}
                      width={20}
                      className="blob infinity rounded-full h-5 w-5"
                      src="/img/social/youtube.svg"
                      alt=""
                    />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/mrhealerhs/"
                  target="_blank"
                  className=""
                >
                  <span className="flex relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD05A2] opacity-75"></span>
                    <Image
                      height={20}
                      width={20}
                      className="h-5 w-5"
                      src="/img/social/instagram.svg"
                      alt=""
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part w-full  order-1 md:order-2 md:w-2/5 hidden sm:flex items-center justify-center md:justify-end">
          <div className="mobile-img flex flex-col h-auto w-52 items-center ">
            <Image
              priority
              src="/img/mr-healer-app-icon.svg"
              width={380}
              height={440}
              className="flex app-icon pb-6"
              alt="img"
            />
          </div>
        </div>
            </div>
      </div>
    </section>
  );
};

export default TopInfo;

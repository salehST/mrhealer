import React from "react";
import Image from "next/image";

const AboutUsMore = () => {
  return (
    <section className="w-full px-4 pt-6 pb-10 md:pt-28 md:pb-8 bg-[#ffffffb3] ">
      <div className="container mx-auto max-w-screen-xl">
        {/* <!-- container start --> */}
        <div className="section-title text-left mb-8">
          <h1 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold  ">
            About Us
          </h1>
        </div>
        <div className="more-info-area group flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7">
          <div className="inner-text-b w-ful md:w-3/5 order-2 md:order-1 text-justify">
            <p className="text-[#2F2F2F] text-base font-light leading-6 mb-4">
              Mr. Healer is a telemedicine company providing possible medical
              assistance online aiming to help the communities become healthier
              and happier.
            </p>
            <p className="text-[#2F2F2F] text-base font-light leading-6 mb-4">
              Mr. Healer aims to save patients' time, money and effort
              associated with visiting offline chambers and clinics. We are
              using cutting-edge technology to make healthcare more easily
              accessible and reasonable.
            </p>
            <p className="text-[#2F2F2F] text-base font-light leading-6 mb-4">
              For a comprehensive digital health solution, Mr. Healer has
              combined pharmacies, pharmaceutical delivery services, diagnostic
              labs, and payment processors into a single vertical.
            </p>
            <p className="text-[#2F2F2F] text-base font-light leading-6 mb-4">
              Mr. Healer provides round-the-clock service to medical advice from
              verified BMDC Registered Doctors for all users, instant live
              doctors, sample collection for pathology test, medicine home
              delivery and even offline chamber booking to ensure peoples'
              wellbeing.
            </p>
            <p className="text-[#2F2F2F] text-base font-light leading-6">
              Mr. Healer is working having an attempt of being the ambassador of
              telemedicine in the targeted emerging marketplace, emphasizing on
              not only elevated physical screening but also major healthcare
              challenges. Our dedicated team puts a premium on providing
              excellent service and works tirelessly to improve healthcare in
              the future.
            </p>
          </div>
          <div className="company-img w-ful md:w-2/5 order-1 md:order-2">
            <Image
              src="/img/footer-logo.svg"
              className="h-full w-full p-6 scale-90 group-hover:scale-100 transition duration-700 drop-shadow-md group-hover:drop-shadow-lg" width={600} height={600}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMore;

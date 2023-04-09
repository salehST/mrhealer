import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const AboutUsInfo = () => {
  return (
    <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-8 mission-vision bg-pattern ">
      <div className="container mx-auto max-w-screen-xl">
        {/* <!-- container start --> */}
        <div className="section-title center-title text-center mb-8">
          <h1 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold   mx-auto w-auto">
            About Us
          </h1>
        </div>
        <div className="mission-vision-area flex flex-col md:flex-row items-stretch justify-between gap-8 mx-auto  pt-6 mb-8">
          <Tilt
            tiltAxis={"y"}
            glareEnable={true}
            perspective={1500}
            glareMaxOpacity={0.2}
            glareBorderRadius="4px"
            glareColor="#e446f7"
            glarePosition="all"
          >
            <div className="in-box group p-6 h-full rounded-md shadow bg-white hover:shadow-md transition">
              <div className="single-in mission flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6">
                <div className="image-i transition scale-100 duration-500 group-hover:scale-90 h-52 w-52 mx-auto mb-4">
                  <Image
                    src={"/img/icons/mission.svg"}
                    className="w-full h-full"
                    width={600}
                    height={600}
                    alt="icon"
                  />
                </div>
                <div className="container-b">
                  <h3 className="title text-[#2F2F2F] text-4xl font-semibold mb-4 text-center md:text-left">
                    Mission
                  </h3>
                  <ul className="text-s text-[#2F2F2F] text-base transition duration-500 font-light list-disc list-outside pl-6 space-y-3 overflow-hidden">
                    <li>
                      Aiming to help the communities we serve become healthier
                      and happier.
                    </li>
                    <li>
                      Saving patients' time, money and effort associated with
                      visiting offline chambers and clinics.
                    </li>
                    <li>
                      Using cutting-edge technology to make healthcare more
                      easily accessible and reasonable.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            tiltAxis={"y"}
            scale={1}
            perspective={1500}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#e446f7"
            glareBorderRadius="4px"
            glarePosition="bottom"
          >
            <div className="in-box group p-6 h-full rounded-md shadow bg-white hover:shadow-md transition">
              <div className="single-in vision flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6">
                <div className="image-i transition scale-100 duration-500 group-hover:scale-90 h-52 w-52 mx-auto mb-4">
                  <Image
                    src={"/img/icons/vision.svg"}
                    className="w-full h-full"
                    width={600}
                    height={600}
                    alt="icon"
                  />
                </div>
                <div className="container-b">
                  <h3 className="title text-[#2F2F2F] text-4xl font-semibold mb-4 text-center md:text-left">
                    Vision
                  </h3>
                  <ul className="text-s text-[#2F2F2F] text-base font-light list-disc list-outside pl-6 space-y-3  ">
                    <li>
                      Being the ambassador of telemedicine in the targeted
                      emerging marketplace.
                    </li>
                    <li>
                      Ensuring proper healthcare support for all regardless of
                      the location and time zone.
                    </li>
                    <li>
                      Emphasizing on not only elevated physical screening but
                      also major healthcare challenges.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      {/* <!-- container end --> */}
    </section>
  );
};

export default AboutUsInfo;

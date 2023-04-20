import React, { useState } from "react";
import Image from "next/image";

import ModalVideo from "react-modal-video";
const WhyUs = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="service" className="w-full p-4 py-10 md:py-20 bg-pattern">
        <div className="container mx-auto max-w-screen-xl">
          {/* <!-- container start --> */}
          <div data-aos="fade-up" className="section-title mb-8">
            <h3 className="capitalize text-3xl md:text-5xl text-[#2F2F2F] font-bold w-auto">
              Why us
            </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            <div className="text-[#2F2F2F] text-base md:text-xl font-normal w-full ">
              <ul className="list-disc list-outside pl-6 space-y-6">
                <li>Affordable treatment saving time, money and hassle.</li>
                <li>
                  Anyone, wherever, at any time, may have fast, secure access to
                  the expert medical care they require from a team of recognized
                  doctors.
                </li>
                <li>
                  The ability to order medicines and have them delivered at
                  home, tests and diagnostics, file transfers, as well as
                  prescription medications.
                </li>
                <li>
                  Simple to use for protecting the health of the whole
                  community.
                </li>
                <li>
                  Lifetime record keeping facility for digital prescription and
                  consultation history.
                </li>
              </ul>
            </div>
            {/* <div className="flex items-center justify-center w-full md:w-1/2">
              <div className="play-btn flex items-center justify-center relative z-[1] ">
                <button
                  onClick={() => setOpen(true)}
                  className="underline text-black hover:text-gray-900 transition-colors  flex items-center justify-center"
                >
                  Watch The Video{" "}
                  <Image
                    width={110}
                    height={110}
                    className="ml-4 h-16 w-16 md:h-24 md:w-24"
                    src="/img/play-btn.svg"
                    alt="icon"
                  />
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* <!-- container end --> */}
      </section>
      {/* <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url="/videos/offline_booking.mp4"
        onClose={() => setOpen(false)}
      /> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="VQ1gqYwI7p4"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default WhyUs;

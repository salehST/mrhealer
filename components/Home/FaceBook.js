import React from "react";
import Image from "next/image";
const FaceBook = () => {
  return (
    <section className="w-full p-8 md:py-32 facebook-page-info  relative">
      <div className="container mx-auto max-w-screen-xl">
        {/* <!-- container start --> */}
        <div className="blob-top"></div>
        <div className="blob-bottom"></div>
        <div className="fb-info-area w-full md:w-4/6 mx-auto">
          <h5 className="mb-4 text-white text-2xl md:text-4xl font-medium">
            Find us on{" "}
          </h5>
          <Image
            data-aos="zoom-in"
            data-aos-delay="200"
            src={"/img/facebook-logo.png"}
            height={157}
            width={758}
            className="mb-6"
            alt="logo"
          />
          <p className="text-white text-lg md:text-2xl font-normal mb-6 md:mb-10">
            Check out our health tips post and many more
          </p>
          <a
            href="https://www.facebook.com/MrHealerHS"
            target={"_blank"}
            data-te-ripple-init
            data-te-ripple-color="light"
            className="bg-white rounded-md text-[#E640D4] text-2xl font-medium px-6 py-2 shadow-md hover:shadow-lg transition-shadow"
          >
            Click Here
          </a>
        </div>
      </div>
      {/* <!-- container end --> */}
    </section>
  );
};

export default FaceBook;

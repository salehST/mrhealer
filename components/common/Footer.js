import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className="p-4 md:py-12 bg-white sm:p-6 font-poppins">
        <div className="container mx-auto max-w-screen-xl">
          {/* <!-- container start --> */}
          <div className="footer-logo flex gap-6 flex-col md:flex-row justify-between items-center md:items-center">
            <Link href={"/"}>
              <Image
                src="/img/header-logo.svg"
                alt="logo"
                width={190}
                height={50}
                className="mb-4 md:mb-0 w-auto h-20"
              />
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.healer.patient"
              target="_blank"
              className="md:flex mr-4 hidden"
              rel="noopener noreferrer"
            >
              <Image
                src={"/img/Google_Play_Store_badge.svg"}
                className="mx-auto md:mx-0"
                height={53}
                width={180}
                alt="google play store button"
              />
            </a>
          </div>
          <div className="footer-link flex md:flex-row items-center justify-center md:justify-between flex-col">
            <div className="mb-6 md:mb-0 grid grid-cols-2 gap-2 md:justify-between md:flex sm:basis-1/2 md:basis-2/3 md:flex-wrap basis-full order-2 md:order-1">
              <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-base font-semibold text-[#2B313B] ">
                  More Links
                </h2>
                <ul className="text-xs font-normal leading-5 text-[#6C7A93]">
                  <li className="mb-4">
                    <Link href={"/about-us"} className="">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/departments"} className="">
                      Departments
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/faq"} className="">
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/for-doctors"} className="">
                      For Doctors
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-base font-semibold text-[#2B313B] ">
                  Useful Links
                </h2>
                <ul className="text-xs font-normal leading-5 text-[#6C7A93]">
                  <li className="mb-4">
                    <Link href={"/privacy-policy"} className=" ">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/terms"} className="">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/refund-policy"} className="">
                      Refund Policy
                    </Link>
                  </li>
                  {/* <li className="mb-4">
                    <a href="#" className="">
                      Different Packages
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-base font-semibold text-[#2B313B] ">
                  Community
                </h2>
                <ul className="text-xs font-normal leading-5 text-[#6C7A93]">
                  <li
                    className="mb-4 flex"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <span className="flex relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD05A2] opacity-75"></span>
                      <Image
                        height={20}
                        width={20}
                        className=" h-5 w-5"
                        src="/img/social/facebook.svg"
                        alt="icon"
                      />{" "}
                    </span>
                    <a href="https://www.facebook.com/MrHealerHS" target="_blank" className=" ml-2">
                      Facebook
                    </a>
                  </li>
                  {/* <li
                    className="mb-4  flex"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <Image
                      height={20}
                      width={20}
                      className="blob infinity rounded-full h-5 w-5"
                      src="/img/social/twitter.svg"
                      alt=""
                    />{" "}
                    <a href="#" className=" ml-2">
                      Twitter
                    </a>
                  </li> */}
                  <li
                    className="mb-4  flex"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <Image
                      height={20}
                      width={20}
                      className="blob infinity rounded-full h-5 w-5"
                      src="/img/social/youtube.svg"
                      alt=""
                    />{" "}
                    <a href="https://www.youtube.com/@mrhealer" target="_blank" className=" ml-2">
                      YouTube
                    </a>
                  </li>
                  <li
                    className="mb-4  flex"
                    data-te-ripple-init
                    data-te-ripple-color="light"
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
                    </span>{" "}
                    <a href="https://www.instagram.com/mrhealerhs/" target="_blank" className=" ml-2">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" mb-6 md:mb-0 md:basis-1/3 basis-full justify-end mx-auto md:mx-0 w-full text-center md:text-right order-1 md:order-2">
              <span className="qr-code w-auto mx-auto text-center">
                <h4 className="mb-6 text-base text-[#2B313B] font-bold block mx-0 text-center md:hidden">
                  Download app
                </h4>

                <a
                  href="https://play.google.com/store/apps/details?id=com.healer.patient"
                  target="_blank"
                  className="mx-auto my-4 flex md:hidden"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/img/Google_Play_Store_badge.svg"}
                    className="mx-auto md:mx-0"
                    height={53}
                    width={180}
                    alt="google play store button"
                  />
                </a>
                <span className="qr-imge">
                  <Image
                    src={"/img/app_qr.svg"}
                    width={345}
                    height={410}
                    className=" h-64 w-auto mx-auto md:mx-0"
                    alt="google play store qr code"
                  />
                </span>
              </span>
            </div>
          </div>
          <hr className="mb-4 md:my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <div className="flex items-center justify-center sm:justify-start py-4">
            <span className=" font-normal text-[#2B313B] sm:text-center">
              © {year} MrHealerBD All rights reserved
            </span>
          </div>
        </div>
      </footer>

      <div className="progress-bar" />
      <button className="back-to-top hide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="back-to-top-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </button>
      <div className="progress-bar" />
      
      <script src={"/js/main.js"} defer ></script>
    </>
  );
};

export default Footer;

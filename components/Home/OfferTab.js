import React from "react";
import Image from "next/image";

const OfferTab = () => {
  return (
    <section className="w-full bg-white p-4 pt-8 pb-4 md:pt-14 md:pb-10">
      <div className="container mx-auto max-w-screen-xl">
        {/* <!-- container start --> */}
        <div data-aos="fade-up" className="section-title mb-8">
          <h3 className="capitalize text-3xl md:text-5xl text-[#2F2F2F] font-bold w-auto">
            What we offer
          </h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="tab-area hidden md:block">
          <div className="flex flex-col items-stretch gap-5 md:flex-row md:items-start">
            <ul
              className="flex list-none flex-col flex-wrap pl-0"
              role="tablist"
              data-te-nav-ref
            >
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-01"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-01"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-01"
                  aria-selected="true"
                >
                  24/7 Online Doctor
                </a>
              </li>
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-02"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-02"
                  role="tab"
                  aria-controls="tabs-02"
                  aria-selected="false"
                >
                  Instant Live Doctor
                </a>
              </li>
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-03"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-03"
                  role="tab"
                  aria-controls="tabs-03"
                  aria-selected="false"
                >
                  File Share with Doctor
                </a>
              </li>
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-04"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-04"
                  role="tab"
                  aria-controls="tabs-04"
                  aria-selected="false"
                >
                  Digital Prescription
                </a>
              </li>
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-05"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-05"
                  role="tab"
                  aria-controls="tabs-05"
                  aria-selected="false"
                >
                  Dedicated Customer Support
                </a>
              </li>
              <li
                role="presentation"
                className="flex-grow lg:w-[360px] text-left"
              >
                <a
                  href="#tabs-06"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-06"
                  role="tab"
                  aria-controls="tabs-06"
                  aria-selected="false"
                >
                  Home Sample Collection for Pathology Test
                </a>
              </li>
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-07"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-07"
                  role="tab"
                  aria-controls="tabs-07"
                  aria-selected="false"
                >
                  Medicine Home Delivery
                </a>
              </li>
              <li role="presentation" className="flex-grow text-left">
                <a
                  href="#tabs-08"
                  className="mb-2 px-4 h-[85px] align-middle items-center flex text-lg font-bold capitalize leading-tight text-black hover:isolate hover:border-transparent data-[te-nav-active]:bg-[#cb4ddb] hover:bg-[#B64EC3] focus:isolate focus:border-transparent  data-[te-nav-active]:text-white hover:text-white transition duration-300 rounded shadow-md hover:shadow-lg shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-[rgba(91,0,91,0.10)] data-[te-nav-active]:shadow-xl data-[te-nav-active]:active-arrow"
                  data-te-toggle="pill"
                  data-te-target="#tabs-08"
                  role="tab"
                  aria-controls="tabs-08"
                  aria-selected="false"
                >
                  Offline Chamber Booking
                </a>
              </li>
            </ul>
            <div className="tab-content-area  border border-gray-100 p-4 md:p-8 h-full w-full shadow-lg shadow-[rgba(91,0,91,0.10)] rounded">
              <div
                className="hidden tab-content opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-01"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
                data-te-tab-active
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/01.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      24/7 Online Doctor
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Demand for instant video consultation or schedule an
                      appointment of the doctor you want to consult with
                      regarding your problem according to your preferable date
                      and time. No more hassle to wait long for an appointment
                      and waste of time in heavy traffic while going to the
                      chamber or outside the chamber. No matter wherever you
                      are, if you have an internet connection, the doctor's
                      chamber is on your smartphone now !
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-02"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/02.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Instant Live Doctor
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Consult with a licensed doctor (Medical Officers and
                      Specialist) 24/7 whenever or wherever you need. Doctor is
                      just a click away ! What you need is only an active
                      internet connection and your smartphone.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-03"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/03.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      File Share with Doctor
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      With only a few clicks, you can upload your previous
                      report, prescription or other materials to discuss with
                      the Doctor online for proper advice and treatment.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden tab-content opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-04"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/04.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Digital Prescription
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      No more running to the pharmacist just to find out the
                      name of the medicine. Along with online consultation we
                      are offering digital prescriptions prepared by the doctor
                      which you can print as well if you need. Prescriptions
                      will be stored in your app for lifetime so no fear of
                      losing your valuable prescription.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden tab-content opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-05"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/05.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Dedicated Customer Support
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Along with a large number of qualified and experienced
                      doctors, we also have dedicated customer care support who
                      are at your service anytime you need, just one call away.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden tab-content opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-06"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/06.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Home Sample Collection for Pathology Test
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      What you need to do is Order Tests and Provide Sample.
                      Once you've booked a test, we'll collect samples from your
                      doorstep and your report will be delivered within the
                      shortest possible time through email or sending the report
                      at your doorstep.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden tab-content opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-07"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/07.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Medicine Home Delivery
                    </h4>
                    {/* <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Upload the picture of your prescription or search medicine
                      and order online. One of our “A Grade Pharmacists” will
                      confirm your order via call and get your medicine at your
                      door within 18 to 48 hours.
                    </p> */}
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                     This Feature is coming soon.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden tab-content opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-08"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
              >
                <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/08.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Offline Chamber Booking
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                    We are also providing the facility of taking appointments of available doctors to consult with them at their offline chambers. Taking an online appointment and reaching the offline chamber on scheduled time are just what you have to do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* for mobile version start */}
        <div id="accordion-b" className="mx-auto w-full block md:hidden">
          <div data-aos="fade-up" className="">
            <h4 className="mb-3" id="heading-1">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-target="#collapse-1"
                aria-expanded="true"
                aria-controls="collapse-1"
              >
                24/7 Online Doctor
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-1"
              className="!visible"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="heading-1"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/01.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      24/7 Online Doctor
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Demand for instant video consultation or schedule an
                      appointment of the doctor you want to consult with
                      regarding your problem according to your preferable date
                      and time. No more hassle to wait long for an appointment
                      and waste of time in heavy traffic while going to the
                      chamber or outside the chamber. No matter wherever you
                      are, if you have an internet connection, the doctor's
                      chamber is on your smartphone now !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="">
            <h4 className="mb-3" id="heading-2">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]  font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-2"
                aria-expanded="false"
                aria-controls="collapse-2"
              >
                Instant Live Doctor
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-2"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-2"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/02.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Instant Live Doctor
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Consult with a licensed doctor (Medical Officers and
                      Specialist) 24/7 whenever or wherever you need. Doctor is
                      just a click away ! What you need is only an active
                      internet connection and your smartphone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="">
            <h4 className="accordion-header mb-3" id="heading-3">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-3"
                aria-expanded="false"
                aria-controls="collapse-3"
              >
                File Share with Doctor
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-3"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-3"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/03.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      File Share with Doctor
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      With only a few clicks, you can upload your previous
                      report, prescription or other materials to discuss with
                      the Doctor online for proper advice and treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="">
            <h4 className="accordion-header mb-3" id="heading-4">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-4"
                aria-expanded="false"
                aria-controls="collapse-4"
              >
                Digital Prescription
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-4"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-4"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/04.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Digital Prescription
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      No more running to the pharmacist just to find out the
                      name of the medicine. Along with online consultation we
                      are offering digital prescriptions prepared by the doctor
                      which you can print as well if you need. Prescriptions
                      will be stored in your app for lifetime so no fear of
                      losing your valuable prescription.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="">
            <h4 className="accordion-header mb-3" id="heading-5">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-5"
                aria-expanded="false"
                aria-controls="collapse-5"
              >
                Dedicated Customer Support
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-5"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-5"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/05.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Dedicated Customer Support
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Along with a large number of qualified and experienced
                      doctors, we also have dedicated customer care support who
                      are at your service anytime you need, just one call away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="">
            <h4 className="accordion-header mb-3" id="heading-6">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-6"
                aria-expanded="false"
                aria-controls="collapse-6"
              >
                Home Sample Collection for Pathology Test
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-6"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-6"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/06.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Home Sample Collection for Pathology Test
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      What you need to do is Order Tests and Provide Sample.
                      Once you've booked a test, we'll collect samples from your
                      doorstep and your report will be delivered within the
                      shortest possible time through email or sending the report
                      at your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="">
            <h4 className="accordion-header mb-3" id="heading-7">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-7"
                aria-expanded="false"
                aria-controls="collapse-7"
              >
                Medicine Home Delivery
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-7"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-7"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/07.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Medicine Home Delivery
                    </h4>
                    {/* <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                      Upload the picture of your prescription or search medicine
                      and order online. One of our “A Grade Pharmacists” will
                      confirm your order via call and get your medicine at your
                      door within 18 to 48 hours.
                    </p> */}
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                     This Feature is coming soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="">
            <h4 className="accordion-header mb-3" id="heading-8">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-8"
                aria-expanded="false"
                aria-controls="collapse-8"
              >
                Offline Chamber Booking
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              id="collapse-8"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="heading-8"
              data-te-parent="#accordion-b"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div className="inner-content pb-24">
                  <Image
                    src={"/img/tab/08.svg"}
                    width={140}
                    height={140}
                    className="h-36 w-36 mb-5"
                    alt="icon"
                  />
                  <div className="tab-text">
                    <h4 className="text-[#2F2F2F] text-3xl font-bold tab-title pb-4 mb-6">
                      Offline Chamber Booking
                    </h4>
                    <p className="text-[#2F2F2F] text-lg font-normal leading-8">
                     This Feature is coming soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile version end */}
      </div>
    </section>
  );
};

export default OfferTab;

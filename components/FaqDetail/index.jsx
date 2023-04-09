import React from "react";

import faqData from "../../data/faq.json";

const FaqDetail = () => {
  return (
    <div id="accordion" className="mx-auto w-full md:w-8/12">
      {faqData.map((faq, index) => (
        <div key={index} className="">
          <h4 data-aos="fade-up" className="mb-3" id={`heading-${faq.id}`}>
            <button
              className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-[#ffffffb3] hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]]font-semibold"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              aria-expanded="false"
              data-te-target={`#collapse-${faq.id}`}
              aria-controls={`collapse-${faq.id}`}
            >
              {faq.question}
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
            id={`collapse-${faq.id}`}
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby={`heading-${faq.id}`}
            aria-expanded="false"
            data-te-parent="#accordion"
          >
            <div className="py-4 px-5 border bg-[#ffffffb3] border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
              <div
                dangerouslySetInnerHTML={{
                  __html: faq.answer.replace(/\n/g, "<br>"),
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqDetail;

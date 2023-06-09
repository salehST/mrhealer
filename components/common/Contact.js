import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full contact-us p-4 md:py-20 bg-pattern">
      <div className="container mx-auto max-w-screen-xl">
        {/* <!-- container start --> */}
        <div className="section-title mb-8">
          <h3 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold w-auto">
            Contact Information
          </h3>
        </div>
        <div className="contact-info grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="info-box text-center md:text-left address p-8 bg-white rounded-2xl shadow hover:shadow-lg">
            <div className="icon-area mb-6">
              <svg
                width="78"
                height="78"
                viewBox="0 0 78 78"
                className=" h-24 w-auto mx-auto md:mx-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_156_1038)">
                  <path
                    d="M54.9018 54.6001L51.8957 60.2528L66.6143 57.8465C63.6441 56.3567 59.6232 55.292 54.9018 54.6001ZM16.986 55.8325C10.1688 57.6304 5.84998 60.5765 5.84998 64.9523C5.85278 65.8943 6.0587 66.8247 6.4537 67.6799L30.076 63.8189L16.986 55.8325ZM71.5962 62.4001L38.7192 67.7587L47.3897 77.6226C61.6278 76.3473 72.15 71.7991 72.15 64.9523C72.15 64.0397 71.9534 63.191 71.5962 62.4001ZM33.164 68.683L10.9496 72.3139C16.8215 75.9518 27.1853 78.0001 39 78.0001C39.716 78.0001 40.4157 77.9798 41.1208 77.965L33.164 68.683Z"
                    fill="#232323"
                  />
                  <path
                    d="M39.0016 0C26.2876 0 15.8558 10.3997 15.8558 23.0849C15.8558 27.9614 17.4057 32.5042 20.0226 36.2396L35.0251 62.1746L35.0891 62.258C35.6811 63.031 36.2591 63.641 36.9377 64.0895C37.6163 64.5388 38.4587 64.8071 39.2855 64.7244C40.9375 64.559 41.9492 63.3922 42.9094 62.0911L42.9608 62.024L59.5234 33.8341L59.5327 33.8161C59.9212 33.1141 60.2082 32.3996 60.4516 31.7039C61.5688 28.9677 62.1436 26.0404 62.1442 23.0849C62.1442 10.3997 51.7156 0 39.0016 0ZM39.0016 13.2951C44.5169 13.2951 48.8218 17.5921 48.8218 23.0841C48.8218 28.5776 44.5169 32.8731 39.0016 32.8731C33.4854 32.8731 29.1782 28.5769 29.1782 23.0841C29.1782 17.5929 33.4862 13.2951 39.0016 13.2951Z"
                    fill="#232323"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_156_1038">
                    <rect width="78" height="78" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="info-texts">
              <h6 className=" text-black text-2xl font-bold mb-2 contact-title">
                Office Address:
              </h6>
              <p className=" text-black text-base font-normal mb-2">
                26/1, Road Number 4,
              </p>
              <p className=" text-black text-base font-normal leading-8">
                Rupnagar R/A, Mirpur Dhaka, Bangladesh.
              </p>
            </div>
          </div>
          <a
            href="tel:+8809611677590"
            className="info-box text-center md:text-left contact-no p-8 bg-white rounded-2xl shadow hover:shadow-lg"
          >
            <div className="icon-area mb-6">
              <svg
                width="104"
                height="104"
                viewBox="0 0 104 104"
                className=" h-24 w-auto mx-auto md:mx-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.45 91C77.1333 91 68.0521 88.9229 59.2063 84.7687C50.3577 80.6173 42.5216 75.1284 35.698 68.302C28.8716 61.4784 23.3827 53.6423 19.2313 44.7937C15.0771 35.9479 13 26.8667 13 17.55C13 16.25 13.4333 15.1667 14.3 14.3C15.1667 13.4333 16.25 13 17.55 13H35.1C36.1111 13 37.0139 13.325 37.8083 13.975C38.6028 14.625 39.0722 15.4556 39.2167 16.4667L42.0333 31.6333C42.1778 32.6444 42.1604 33.5646 41.9813 34.3937C41.7993 35.2257 41.3833 35.9667 40.7333 36.6167L30.3333 47.2333C33.3667 52.4333 37.1583 57.3083 41.7083 61.8583C46.2583 66.4083 51.2778 70.3444 56.7667 73.6667L66.95 63.4833C67.6 62.8333 68.4493 62.3451 69.498 62.0187C70.5438 61.6951 71.5722 61.6056 72.5833 61.75L87.5333 64.7833C88.5445 65 89.375 65.4868 90.025 66.2437C90.675 67.0034 91 67.8889 91 68.9V86.45C91 87.75 90.5667 88.8333 89.7 89.7C88.8333 90.5667 87.75 91 86.45 91Z"
                  fill="#232323"
                />
              </svg>
            </div>
            <div className="info-texts">
              <h6 className="text-black text-2xl font-bold mb-2 contact-title">
                Hotline:
              </h6>

              <p className=" text-black text-base font-normal mb-2">
                +880 9611-677590
              </p>
            </div>
          </a>
          <a
            href="mailto:info@mrhealerbd.com"
            className="info-box text-center md:text-left email-address p-8 bg-white rounded-2xl shadow hover:shadow-lg"
          >
            <div className="icon-area mb-6">
              <svg
                width="113"
                height="113"
                viewBox="0 0 113 113"
                className=" h-24 w-auto mx-auto md:mx-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_156_1134)">
                  <path
                    d="M94.1666 18.8335C96.6641 18.8335 99.0593 19.8256 100.825 21.5916C102.591 23.3575 103.583 25.7527 103.583 28.2502V84.7502C103.583 87.2476 102.591 89.6428 100.825 91.4088C99.0593 93.1747 96.6641 94.1668 94.1666 94.1668H18.8333C16.3358 94.1668 13.9407 93.1747 12.1747 91.4088C10.4087 89.6428 9.41664 87.2476 9.41664 84.7502V80.0418H18.8333V84.7502H94.1666V34.9501L61.5143 67.6024C60.1899 68.9264 58.3939 69.6702 56.5212 69.6702C54.6484 69.6702 52.8524 68.9264 51.528 67.6024L18.8333 34.9077V37.6668H9.41664V28.2502C9.41664 25.7527 10.4087 23.3575 12.1747 21.5916C13.9407 19.8256 16.3358 18.8335 18.8333 18.8335H94.1666ZM28.25 61.2085C29.45 61.2098 30.6043 61.6693 31.4769 62.4932C32.3495 63.317 32.8747 64.4429 32.945 65.6409C33.0153 66.8389 32.6255 68.0185 31.8553 68.9388C31.0851 69.8591 29.9925 70.4505 28.8008 70.5922L28.25 70.6252H4.70831C3.50825 70.6238 2.35399 70.1643 1.48136 69.3405C0.608738 68.5167 0.0836154 67.3908 0.0132865 66.1928C-0.0570424 64.9948 0.332731 63.8151 1.10297 62.8949C1.87321 61.9746 2.96577 61.3832 4.15743 61.2415L4.70831 61.2085H28.25ZM23.5416 47.0835C24.7904 47.0835 25.9879 47.5796 26.8709 48.4625C27.7539 49.3455 28.25 50.5431 28.25 51.7918C28.25 53.0406 27.7539 54.2381 26.8709 55.1211C25.9879 56.0041 24.7904 56.5002 23.5416 56.5002H9.41664C8.16791 56.5002 6.97033 56.0041 6.08734 55.1211C5.20436 54.2381 4.70831 53.0406 4.70831 51.7918C4.70831 50.5431 5.20436 49.3455 6.08734 48.4625C6.97033 47.5796 8.16791 47.0835 9.41664 47.0835H23.5416Z"
                    fill="#232323"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_156_1134">
                    <rect width="113" height="113" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="info-texts">
              <h6 className="text-black text-2xl font-bold mb-2 contact-title">
                E-mail:
              </h6>

              <p className=" text-black text-base font-normal mb-2 underline">
                info@mrhealerbd.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

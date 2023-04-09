import React from 'react'
import Link from 'next/link'

const InfoShimmer = () => {

  return (
    <>
    <style jsx>
    {
        `
        .shimmer {
            position: relative;
            // width: 100%;
            // height: 100%;
            background: #ccc;
            overflow: hidden;
          }
          
          .shimmer__inner {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: shimmer;
            animation-timing-function: linear;
          }
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `
    }
</style>

        <div
        
        className="doc-info-inner p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition mb-12"
      >
        <div className="single-doc-info flex flex-col md:flex-row gap-4 items-stretch justify-between">
          <div className="profile-left flex-col md:flex-row gap-4 flex items-center justify-start w-full md:w-4/6">
            <div>
              <div className="shimmer profile-img rounded-md overflow-hidden basis-36 h-36 w-36 md:h-52 md:w-52 lg:h-[360px] lg:w-[360px] shadow-md">
              <div className="shimmer__inner">
                </div>
              </div>
              <div className="btn-area mt-2 hidden md:block">
               
               <Link
                 href="https://play.google.com/store/apps/details?id=com.healer.patient" target={"_blank"}
                 className="text-white text-base font-normal flex items-center justify-between px-3 py-3  bg-primary rounded-md shadow w-full gap-2 hover:bg-[#c955d8] hover:shadow-lg transition"
               >
                 <span>See Doctor Now</span>{" "}
                 <svg
                   width="25"
                   height="17"
                   viewBox="0 0 25 17"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M19.4444 6.375V1.41667C19.4444 1.04094 19.2981 0.680609 19.0376 0.414932C18.7772 0.149256 18.4239 0 18.0556 0H1.38889C1.02053 0 0.667263 0.149256 0.406796 0.414932C0.146329 0.680609 0 1.04094 0 1.41667V15.5833C0 15.9591 0.146329 16.3194 0.406796 16.5851C0.667263 16.8507 1.02053 17 1.38889 17H18.0556C18.4239 17 18.7772 16.8507 19.0376 16.5851C19.2981 16.3194 19.4444 15.9591 19.4444 15.5833V10.625L25 16.2917V0.708333L19.4444 6.375Z"
                     fill="white"
                   />
                 </svg>
               </Link>
             </div>
            </div>
            <div className="doc-details flex shrink flex-col md:gap-4 items-center md:items-start justify-start lg:justify-evenly w-auto">
              
            <h3 className="shimmer w-60 h-12 doc-title mb-3 ">
                  <div className="shimmer__inner">
                </div>
                </h3>
              <div className="top-part mt-3 md:mt-0 ">
                <h4 className="shimmer  w-40 h-8 ">
                  <div className="shimmer__inner">
                </div>
                </h4>
                
                <div className='shimmer w-40 h-6 my-2 '>
                    <div className="shimmer__inner">
                    </div>                    
                </div>

              </div>
              <div className="bottom-part">
                  <div className="hidden md:block mb-2">
                    <h6 className="text-[#2F2F2F] text-xl font-bold">
                      Consultation Fee
                    </h6>
                    <span className="price flex items-end">
                      <span className="shimmer w-20 h-8">
                            <span className="shimmer__inner">
                            </span>
                      </span>{" "}
                      (incl. VAT)
                    </span>
                  </div>
                  <div className='shimmer w-20 h-6'>
                    <span className="shimmer__inner">
                    </span>
                  </div>
              </div>
            </div>
          </div>
          <div className="profile-right-info flex flex-col md:flex-row gap-3 md:gap-6 items-start justify-start md:items-center md:justify-center w-full md:w-2/6">
            <div className="doc-r flex w-auto h-full flex-row md:flex-col justify-evenly  md:gap-2">
              <div className="flex flex-col">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  Total Experience
                </span>
                <span className="shimmer h-6 w-24">
                    <div className="shimmer__inner">
                    </div>    
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  BMDC Number
                </span>
                <span className="shimmer h-6 w-24">
                    <div className="shimmer__inner">
                    </div>    
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  Average Rating
                </span>
                <span className="rating flex flex-row">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99994 14.3917L13.4583 16.4834C14.0916 16.8667 14.8666 16.3 14.6999 15.5834L13.7833 11.65L16.8416 9.00003C17.3999 8.5167 17.0999 7.60003 16.3666 7.5417L12.3416 7.20003L10.7666 3.48336C10.4833 2.80836 9.51661 2.80836 9.23327 3.48336L7.65827 7.1917L3.63327 7.53336C2.89994 7.5917 2.59994 8.50836 3.15827 8.9917L6.21661 11.6417L5.29994 15.575C5.13327 16.2917 5.90827 16.8584 6.5416 16.475L9.99994 14.3917Z"
                      fill="#EAC235"
                    />
                  </svg>
                  <span className="shimmer h-6 w-8">
                    <div className="shimmer__inner">
                    </div>    
                </span>
                </span>
              </div>
            </div>
            <div className="doc-r flex md:hidden flex-col sm:flex-row sm:justify-between sm:items-center border-t border-primary pt-4 gap-2">
              <div className="">
                <h6 className="text-[#2F2F2F] text-base font-normal">
                  Consultation Fee
                </h6>
                <span className="price flex items-end">
                      <span className="shimmer w-20 h-8">
                            <span className="shimmer__inner">
                            </span>
                      </span>{" "}
                      (incl. VAT)
                    </span>
              </div>
              <div className="btn-area mt-2">
                <div
                  href="https://play.google.com/store/apps/details?id=com.healer.patient" target={"_blank"}
                  className="text-white text-base font-normal flex items-center justify-between px-3 py-1.5  bg-primary rounded-md shadow w-full gap-2 hover:bg-[#c955d8] hover:shadow-lg transition"
                >
                  <span>See Doctor Now</span>{" "}
                  <svg
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4444 6.375V1.41667C19.4444 1.04094 19.2981 0.680609 19.0376 0.414932C18.7772 0.149256 18.4239 0 18.0556 0H1.38889C1.02053 0 0.667263 0.149256 0.406796 0.414932C0.146329 0.680609 0 1.04094 0 1.41667V15.5833C0 15.9591 0.146329 16.3194 0.406796 16.5851C0.667263 16.8507 1.02053 17 1.38889 17H18.0556C18.4239 17 18.7772 16.8507 19.0376 16.5851C19.2981 16.3194 19.4444 15.9591 19.4444 15.5833V10.625L25 16.2917V0.708333L19.4444 6.375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default InfoShimmer
import React from 'react'
import Image from 'next/image'
import YoutubeEmbed from './YoutubeEmbed'
const WhyUs = () => {
  return (<>
    <section id='service' className="w-full p-4 pt-0 pb-0 md:pt-20 md:pb-10 bg-pattern b-strip">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
            <div data-aos="fade-up" className="section-title mb-8">
                <h3 className='capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold w-auto'>Why us</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="text-[#2F2F2F] text-xl font-normal w-full md:w-1/2">
                    <ul className="list-disc list-outside pl-6 space-y-6">
                        <li>Affordable treatment saving time, money and hassle.</li> 
                        <li>Anyone, wherever, at any time, may have fast, secure access to the expert medical care they require from a team of recognized doctors.</li>  
                        <li>The ability to order medicines and have them delivered at home, tests and diagnostics, file transfers, as well as prescription medications.</li>         
                        <li>Simple to use for protecting the health of the whole community.</li>     
                        <li>Lifetime record keeping facility for digital prescription and consultation history.</li>       
                    </ul>
                </div>
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <div className="play-btn flex items-center justify-center relative z-[1] ">
                        <button data-te-toggle="modal"
    data-te-target="#myModal"
    data-te-ripple-init
    data-te-ripple-color="light" type='button' className='modal underline text-black hover:text-gray-900 transition-colors  flex items-center justify-center'>Watch The Video <Image width={110} height={110} className='ml-4' src="/img/play-btn.svg" alt="icon" /></button> 
                    </div>
                </div>
            
            </div>
        </div>{/* <!-- container end --> */}
    </section>
        <div data-te-modal-init
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog">
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]">
          <div
            className="pointer-events-auto relative flex w-full flex-col outline-none">
            <div
              className="flex flex-shrink-0 items-center justify-between">
              <button
                type="button"
                className="close-button box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative">
                  <YoutubeEmbed embedId='VQ1gqYwI7p4' />
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default WhyUs
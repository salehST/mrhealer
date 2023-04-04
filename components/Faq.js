import Link from 'next/link'
import React from 'react'

const Faq = () => {
  return (
    <section className="w-full bg-white p-4 md:py-20 faq">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
            <div data-aos="fade-up" className="section-title center-title text-center mb-8">
                <h3 className='text-4xl md:text-5xl text-[#2F2F2F] font-bold  mx-auto w-auto'>FAQ's</h3>
            </div>
            <div id="accordion" className='mx-auto w-full md:w-8/12'>
                <div data-aos="fade-up-right" data-aos-delay="200"
                    className="">
                    <h4 className="mb-3" id="headingOne">
                    <button
                        className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        What is telemedicine?
                        <span
                        className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h4>
                    <div
                    id="collapseOne"
                    className="!visible"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingOne"
                    data-te-parent="#accordion">
                    <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
                    <span className="text-primary font-semibold">Telemedicine</span> is the practice of providing medical care and consultation remotely using technology, such as video conferencing, phone calls, and messaging.
                    </div>
                    </div>
                </div>
                <div  data-aos="fade-up-left" data-aos-delay="200"
                    className="">
                    <h4 className="mb-3" id="headingTwo">
                    <button
                        className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]  font-semibold"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        How does telemedicine work?
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h4>
                    <div
                    id="collapseTwo"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingTwo"
                    data-te-parent="#accordion">
                    <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
                    <span className="text-primary font-semibold">Telemedicine</span> works by allowing patients to communicate with healthcare providers through secure online platforms, video conferencing, or phone calls. Patients can receive diagnosis, treatment, and prescription through <span className="text-primary font-semibold">Telemedicine</span>.

                    </div>
                    </div>
                </div>
                <div
                    className="">
                    <h4 className="accordion-header mb-3" id="headingThree">
                    <button
                        className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                         What types of medical conditions can be treated through telemedicine?
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h4>
                    <div
                    id="collapseThree"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingThree"
                    data-te-parent="#accordion">
                    <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
                    <span className="text-primary font-semibold">Telemedicine</span> can be used to treat a wide range of medical conditions, including minor illnesses, chronic conditions, and mental health issues. It is not suitable for emergencies or life-threatening conditions that require immediate attention.
                    </div>
                    </div>
                </div>

                <div
                    className="">
                    <h4 className="accordion-header mb-3" id="heading4">
                    <button
                        className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4">
                         How do I schedule an appointment?
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h4>
                    <div
                    id="collapse4"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="heading4"
                    data-te-parent="#accordion">
                    <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
                    To schedule an appointment, check out the Doctor Booking segment of the website.
                    </div>
                    </div>
                </div>                
                <div className="">
                    <h4 className="accordion-header mb-3" id="heading5">
                    <button
                        className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapse5">
                         What equipment do I need to participate in a telemedicine appointment?
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h4>
                    <div
                    id="collapse5"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="heading5"
                    data-te-parent="#accordion">
                    <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
                    You will typically need a smartphone or smart device supporting Mr. Healer app and a secure internet connection to participate in an online appointment.
                    </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="accordion-header mb-3" id="heading6">
                    <button
                        className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] font-semibold"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapse6">
                         Is telemedicine secure and private?
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h4>
                    <div
                    id="collapse6"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="heading6"
                    data-te-parent="#accordion">
                    <div className="py-4 px-5 border border-[#efefef] shadow-md mb-3 rounded-md text-[#2F2F2F] leading-7">
                    Telemedicine platforms are designed to be secure and private, with encryption and other measures to protect patient data. However, it is important to use a secure and private internet connection and to ensure that no one else can access the device being used for the appointment.
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 mb-5">
            <Link
    href={'/faq'}
    className="arrow-btn text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 flex justify-center items-center underline"
    >View all <svg width="20" height="20" viewBox="0 0 20 20" className='relative left-2 transition h-5 w-5' fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0833 14.3957C10.9166 14.229 10.8366 14.0276 10.8433 13.7915C10.85 13.5554 10.9369 13.354 11.1041 13.1873L13.4583 10.8332H4.16665C3.93054 10.8332 3.73248 10.7532 3.57248 10.5932C3.41248 10.4332 3.33276 10.2354 3.33332 9.99984C3.33332 9.76373 3.41332 9.56567 3.57332 9.40567C3.73332 9.24567 3.93109 9.16595 4.16665 9.1665H13.4583L11.0833 6.7915C10.9166 6.62484 10.8333 6.42678 10.8333 6.19734C10.8333 5.96789 10.9166 5.77011 11.0833 5.604C11.25 5.43734 11.448 5.354 11.6775 5.354C11.9069 5.354 12.1047 5.43734 12.2708 5.604L16.0833 9.4165C16.1666 9.49984 16.2258 9.59011 16.2608 9.68734C16.2958 9.78456 16.313 9.88873 16.3125 9.99984C16.3125 10.1109 16.295 10.2151 16.26 10.3123C16.225 10.4096 16.1661 10.4998 16.0833 10.5832L12.25 14.4165C12.0972 14.5693 11.9064 14.6457 11.6775 14.6457C11.4486 14.6457 11.2505 14.5623 11.0833 14.3957Z" fill="#B64EC3"/>
    </svg>
    </Link>
            </div>
        </div>
    </section>
  )
}

export default Faq
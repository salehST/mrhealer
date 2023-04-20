import React, { useState } from "react";
import Image from "next/image";

import ModalVideo from "react-modal-video";

const ForDoctors = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
         <section
        id="for-doctors"
        className="w-full p-4 pt-10 pb-0 md:pt-20  md:pb-10 bg-pattern"
      >
        <div className="container mx-auto max-w-screen-xl">
            <div data-aos="fade-up" className="section-title mb-8">
              <h1 className="capitalize text-2xl md:text-5xl text-[#2F2F2F] font-bold w-auto">
                For Doctors
              </h1>
            </div>
          {/* <!-- container start --> */}
          <div className=" bg-[#ffffffb3] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div data-aos="fade-up" className="section-title mb-8">
              <h3 className="capitalize text-xl md:text-2xl text-[#2F2F2F] font-bold w-auto">
              How to Get Registered as A  Doctor in Mr. Healer App ?
              </h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col md:flex-row gap-6 items-center justify-between"
            >
              <div className="w-full">
                <div className="text-[#2F2F2F] text-base md:text-lg font-normal w-full ">
                <p className="mb-3 text-base md:text-lg">If you are a BMDC registered doctor, you can get yourself registered as a certified doctor of Mr. Healer App. The registration and verification process is as follows -</p>
                  <ul className="list-disc list-outside pl-6 space-y-5">
                    <li><b>Download Mr. Healer DR App</b> clicking the link: <a href="https://play.google.com/store/apps/details?id=com.healer.doctor" className="text-primary" target="_blank">https://play.google.com/store/apps/details?id=com.healer.doctor</a></li>
                    <li><b>Create an account</b> in the app providing the needed information such as, your mobile number, name, department, degree, BMDC number etc.</li>
                    <li><b>Log in</b> to the app and <b>request</b> us for registration through the app.</li>
                    <li>Afterwards, the <b>verification process</b> will be accomplished via App and E-mail.</li>
                    <li><b>Submit</b> your required <b>documents</b> through E-mail (Internship Certificate, Certificate for Bachelor of Medicine and Surgery, Certificate of Full Registration as a Medical Practitioner, Certificate of any other qualifications if applicable).</li>
                    <li>Our Customer Service Representative will contact you as soon as possible for <b>verification</b> and if everything is alright then they will provide access to your account. After that you may sign-up and log in to Mr. Healer DR App using your <b>user ID</b> and <b>Password</b>.</li>
                  </ul>
                </div>
                <div className="text-[#2F2F2F] text-base md:text-lg font-normal w-full ">
                    <div data-aos="fade-up" className="section-title my-8">
                      <h3 className="capitalize text-xl md:text-2xl text-[#2F2F2F] font-bold w-auto">
                        What Are The Benefits of Being A Doctor in Mr. Healer App?
                      </h3>
                    </div>
                  <ul className="list-disc list-outside pl-6 space-y-5">
                    <li>Consult with patients from anywhere, at any preferable time. This can save your time and allow you to be more efficient with your schedule.</li>
                    <li>This can be an additional source of income working from home or at free time along with your conventional medical practice and schedule at the chamber or hospital.</li>
                    <li>Get connected with patients who may not be able to visit your chamber or hospital in person. This can help you reach a larger patient base and expand your practice.</li>
                    <li>It can also reduce costs associated with running a traditional medical practice, such as rent, utilities, and staff salaries.</li>
                    <li>You can avoid the pen and paper hassle of writing prescriptions traditionally. Digital prescription can lessen your trouble.</li>
                    <li>You can see the medical history and previous medications of a patient through the app which can help you diagnose the health issue.</li>
                    <li>You can have a look at the lab or test reports of the patients through our app as well.</li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* <!-- container end --> */}
      </section>

      <section className="w-full p-4 bg-white py-10 md:py-20">
        <div className="container mx-auto max-w-screen-xl">           
        <div className="flex items-center justify-center w-full">
       
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
            </div>
        </div>
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
        videoId="VwKn0LLIB60"
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default ForDoctors
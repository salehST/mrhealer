import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DoctorInfo = ({doctor , review, educations, experiences}) => {
    const work = doctor.current_workplace;
    const currentWork = work.replace(/amp;/g, ' ');
    const about = doctor.profile_description;
    const aboutDoc = about.replace(/amp;/g, ' ');
    const degree = doctor.degree;
    const docDegree = degree.replace(/amp;/g, ' ');
  return (
    <>
    <style jsx>
      {
        `
        .edu-info-inner {
          position: relative;
          padding-left: 50px;
      }
      
      .edu-info-inner:before {
          content: "";
          width: 2px;
          height: 100%;
          position: absolute;
          left: 12px;
          top: 0;
          background: #b64ec3;
      }
      .edu-info-inner:after {
          content: "";
          position: absolute;
          width: 25px;
          height: 25px;
          left: 0;
          top: 0;
          background: #b64ec3;
          transform: rotate(45deg);
          border-radius: 4px;
      }
      .data-\[te-nav-active\]\:active-tab[data-te-nav-active]
      {
          background-color: var(--primary);    
      }
      .data-\[te-nav-active\]\:active-tab[data-te-nav-active] svg path, .tab-nav:hover svg path 
      {
          fill: white;    
      }
      .\[\&\:not\(\[data-te-collapse-collapsed\]\)\]\:active-tab:not([data-te-collapse-collapsed])
      {
          background-color: var(--primary);    
      }
      .\[\&\:not\(\[data-te-collapse-collapsed\]\)\]\:active-tab:not([data-te-collapse-collapsed])>svg path, .\[\&\:not\(\[data-te-collapse-collapsed\]\)\]\:active-tab:hover>svg path 
      {
          fill: white;    
      }
          .doc-degree {
            word-break: break-word;
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
              <div className="profile-img rounded-md overflow-hidden basis-36 h-36 w-36 md:h-52 md:w-52 lg:h-[360px] lg:w-[360px] shadow-md">
                <Image
                  src={`https://healerspc.sgp1.digitaloceanspaces.com/media/profile_pictures/${doctor.profile_picture}`}
                  width={360}
                  height={360}
                  priority
                  className="object-cover block w-full h-full"
                  alt="picture"
                />
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
              
            <h3 className="doc-title text-center md:text-left text-[#2F2F2F] text-2xl lg:text-5xl font-semibold ">
                  {doctor.name}
                </h3>
              <div className="top-part mt-3 md:mt-0 text-center md:text-left">
                <h4 className="doc-degree text-[#2F2F2F] text-sm md:text-base font-normal flex-wrap">
                  {docDegree}
                  
                </h4>
                
                <p className='my-2 text-[#2F2F2F] text-sm md:text-base font-normal'>Working at {currentWork}</p>

              </div>
              <div className="bottom-part">
                  <div className="hidden md:block mb-2">
                    <h6 className="text-[#2F2F2F] text-xl font-bold">
                      Consultation Fee
                    </h6>
                    <span className="price text-[#2F2F2F] text-sm font-normal">
                      <span className="text-[#2F2F2F] text-3xl font-medium">
                        {doctor.regular_fee}Tk
                      </span>{" "}
                      (incl. VAT)
                    </span>
                  </div>
                  <h6 className='text-[#2F2F2F] text-base md:text-lg text-center md:text-left font-normal'>Specialized in {doctor.dept_name} Department</h6>
              </div>
            </div>
          </div>
          <div className="profile-right-info flex flex-col md:flex-row gap-3 md:gap-6 items-start justify-start md:items-center md:justify-center w-full md:w-2/6">
            <div className="doc-r flex w-auto h-full flex-row md:flex-col justify-evenly  md:gap-2">
              <div className="flex flex-col">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  Total Experience
                </span>
                <span className="text-[#2F2F2F] text-sm font-bold">
                  {doctor.experience} Years
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  BMDC Number
                </span>
                <span className="text-[#2F2F2F] text-sm font-bold">
                  {doctor.bmdc_number}
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
                  <span className="text-[#2F2F2F] text-sm font-bold ml-2">
                    {doctor.rating}
                  </span>
                </span>
              </div>
            </div>
            <div className="doc-r flex md:hidden flex-col sm:flex-row sm:justify-between sm:items-center border-t border-primary pt-4 gap-2">
              <div className="">
                <h6 className="text-[#2F2F2F] text-base font-normal">
                  Consultation Fee
                </h6>
                <span className="price text-[#2F2F2F] text-sm font-normal">
                  <span className="text-[#2F2F2F] text-3xl font-medium">
                    {doctor.regular_fee}Tk
                  </span>{" "}
                  (incl. VAT)
                </span>{" "}
              </div>
              <div className="btn-area mt-2">
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doctors-more-info-tab bg-white shadow-none md:shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">

        <div className="inner-wrapper">
          
        <div className="hidden md:block">
          <ul
              className=" flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
              role="tablist"
              data-te-nav-ref>
              <li role="presentation" className="flex-auto text-center">
                <a
                  href="#tabs-01"
                  className="mb-2 border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-lg font-medium uppercase leading-tight text-black hover:isolate hover:border-transparent hover:bg-primary hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-primary tab-nav data-[te-nav-active]:active-tab data-[te-nav-active]:text-white transition flex items-center  justify-start md:justify-center gap-3"
                  data-te-toggle="pill"
                  data-te-target="#tabs-01"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-01"
                  aria-selected="true"
                  ><svg width="34" height="34" viewBox="0 0 34 34" className=' w-auto h-10' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_180_1798)">
                  <path d="M5.3125 3.71875V28.1562C5.3125 28.4495 5.5505 28.6875 5.84375 28.6875H12.58C13.0027 28.6875 13.4081 28.8554 13.707 29.1543C14.0058 29.4532 14.1737 29.8586 14.1737 30.2812C14.1737 30.7039 14.0058 31.1093 13.707 31.4082C13.4081 31.7071 13.0027 31.875 12.58 31.875H5.84375C4.85748 31.875 3.9116 31.4832 3.2142 30.7858C2.5168 30.0884 2.125 29.1425 2.125 28.1562V3.71875C2.125 1.666 3.791 0 5.84375 0H23.9062C25.959 0 27.625 1.666 27.625 3.71875V20.1577C27.625 20.5804 27.4571 20.9858 27.1582 21.2847C26.8593 21.5836 26.4539 21.7515 26.0312 21.7515C25.6086 21.7515 25.2032 21.5836 24.9043 21.2847C24.6054 20.9858 24.4375 20.5804 24.4375 20.1577V3.71875C24.4375 3.57785 24.3815 3.44273 24.2819 3.3431C24.1823 3.24347 24.0471 3.1875 23.9062 3.1875H5.84375C5.70285 3.1875 5.56773 3.24347 5.4681 3.3431C5.36847 3.44273 5.3125 3.57785 5.3125 3.71875ZM33.5198 23.9849L23.8361 33.439C23.5355 33.732 23.1314 33.8945 22.7117 33.8913C22.2919 33.8881 21.8904 33.7195 21.5942 33.422L17.4654 29.2782C17.1844 28.9756 17.0319 28.5757 17.0399 28.1628C17.048 27.7499 17.216 27.3563 17.5086 27.0648C17.8011 26.7734 18.1954 26.6068 18.6083 26.6003C19.0212 26.5938 19.4205 26.7479 19.7221 27.03L22.7375 30.0581L31.2927 21.7026C31.5954 21.4073 32.003 21.2443 32.4258 21.2495C32.8486 21.2547 33.2521 21.4276 33.5474 21.7302C33.8427 22.0329 34.0057 22.4405 34.0005 22.8633C33.9953 23.2861 33.8224 23.6896 33.5198 23.9849ZM10.0938 8.5H19.6562C20.0789 8.5 20.4843 8.66791 20.7832 8.9668C21.0821 9.26568 21.25 9.67106 21.25 10.0937C21.25 10.5164 21.0821 10.9218 20.7832 11.2207C20.4843 11.5196 20.0789 11.6875 19.6562 11.6875H10.0938C9.67106 11.6875 9.26568 11.5196 8.9668 11.2207C8.66791 10.9218 8.5 10.5164 8.5 10.0937C8.5 9.67106 8.66791 9.26568 8.9668 8.9668C9.26568 8.66791 9.67106 8.5 10.0938 8.5ZM8.5 16.4687C8.5 16.0461 8.66791 15.6407 8.9668 15.3418C9.26568 15.0429 9.67106 14.875 10.0938 14.875H14.3438C14.7664 14.875 15.1718 15.0429 15.4707 15.3418C15.7696 15.6407 15.9375 16.0461 15.9375 16.4687C15.9375 16.8914 15.7696 17.2968 15.4707 17.5957C15.1718 17.8946 14.7664 18.0625 14.3438 18.0625H10.0938C9.67106 18.0625 9.26568 17.8946 8.9668 17.5957C8.66791 17.2968 8.5 16.8914 8.5 16.4687Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_180_1798">
                  <rect width="34" height="34" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                   Overview</a
                >
              </li>
              <li role="presentation" className="flex-auto text-center">
                <a
                  href="#tabs-2"
                  className="mb-2 border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-lg font-medium uppercase leading-tight text-black hover:isolate hover:border-transparent hover:bg-primary hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-primary tab-nav data-[te-nav-active]:active-tab data-[te-nav-active]:text-white transition flex items-center  justify-start md:justify-center gap-3"
                  data-te-toggle="pill"
                  data-te-target="#tabs-2"
                  role="tab"
                  aria-controls="tabs-2"
                  aria-selected="false"
                  ><svg width="43" height="43" viewBox="0 0 43 43" className=' w-auto h-10' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.2502 17.9167C33.6301 17.916 34.981 18.3137 36.1404 19.0621C37.2998 19.8105 38.2185 20.8777 38.7861 22.1355C39.3537 23.3934 39.5461 24.7883 39.3401 26.1528C39.1342 27.5173 38.5387 28.7934 37.6252 29.8277V38.0693C37.6256 38.2994 37.567 38.5257 37.4549 38.7266C37.3429 38.9275 37.1811 39.0963 36.9851 39.2168C36.7891 39.3373 36.5655 39.4054 36.3356 39.4147C36.1057 39.424 35.8773 39.3741 35.6722 39.2698L35.511 39.1712L32.2502 36.8922L28.9893 39.1712C28.801 39.3027 28.5821 39.3837 28.3536 39.4066C28.125 39.4294 27.8945 39.3933 27.6839 39.3016C27.4733 39.21 27.2897 39.0659 27.1506 38.8831C27.0115 38.7003 26.9216 38.4849 26.8895 38.2575L26.877 38.0693V29.8241C25.9647 28.7898 25.3702 27.5143 25.1648 26.1505C24.9594 24.7867 25.1519 23.3927 25.7192 22.1356C26.2864 20.8785 27.2044 19.8118 28.3628 19.0635C29.5213 18.3151 30.871 17.9169 32.2502 17.9167ZM34.9377 31.7304C34.0838 32.0757 33.1712 32.2528 32.2502 32.2518C31.3291 32.2528 30.4165 32.0757 29.5627 31.7304V35.4911L31.4815 34.1528C31.678 34.0151 31.9077 33.9325 32.1468 33.9136C32.386 33.8947 32.6258 33.9402 32.8414 34.0453L33.0206 34.1528L34.9377 35.4911V31.7304ZM34.4897 5.38217C35.7444 5.38211 36.9519 5.86071 37.8658 6.72036C38.7797 7.58 39.3312 8.75592 39.4079 10.0083L39.4168 10.3093L39.4186 19.7083C38.692 18.741 37.778 17.93 36.7311 17.3236L36.7293 10.3093C36.7296 9.75481 36.5242 9.21998 36.1528 8.80826C35.7815 8.39654 35.2706 8.1372 34.7191 8.08042L34.4897 8.06967H8.51058C7.95613 8.06942 7.4213 8.27484 7.00958 8.64618C6.59786 9.01753 6.33852 9.52839 6.28175 10.0799L6.271 10.3093V27.3301C6.271 28.4893 7.1525 29.4443 8.28125 29.5571L8.51058 29.5697L24.4958 29.5715L24.7162 29.9352L24.9563 30.2863L25.0835 30.4548L25.0817 32.2572H8.51058C7.25561 32.2572 6.04792 31.7784 5.13396 30.9183C4.22 30.0583 3.66867 28.882 3.59245 27.6293L3.5835 27.3301V10.3093C3.58343 9.05458 4.06204 7.84713 4.92168 6.93322C5.78132 6.01931 6.95724 5.46778 8.20958 5.39113L8.51058 5.38217H34.4897ZM32.2502 20.6042C31.062 20.6042 29.9225 21.0762 29.0823 21.9164C28.2421 22.7565 27.7701 23.896 27.7701 25.0842C27.7701 26.2724 28.2421 27.4119 29.0823 28.2521C29.9225 29.0923 31.062 29.5643 32.2502 29.5643C33.4384 29.5643 34.5779 29.0923 35.418 28.2521C36.2582 27.4119 36.7302 26.2724 36.7302 25.0842C36.7302 23.896 36.2582 22.7565 35.418 21.9164C34.5779 21.0762 33.4384 20.6042 32.2502 20.6042ZM20.1564 22.3958C20.4969 22.3959 20.8246 22.5253 21.0734 22.7577C21.3221 22.9901 21.4734 23.3083 21.4966 23.648C21.5198 23.9877 21.4132 24.3235 21.1984 24.5876C20.9835 24.8517 20.6764 25.0244 20.3392 25.0708L20.1564 25.0833H12.0939C11.7535 25.0832 11.4257 24.9539 11.177 24.7215C10.9282 24.489 10.7769 24.1708 10.7537 23.8312C10.7305 23.4915 10.8371 23.1557 11.0519 22.8916C11.2668 22.6275 11.5739 22.4548 11.9112 22.4084L12.0939 22.3958H20.1564ZM30.9064 12.5417C31.2469 12.5418 31.5746 12.6711 31.8234 12.9035C32.0721 13.136 32.2234 13.4542 32.2466 13.7938C32.2698 14.1335 32.1632 14.4693 31.9484 14.7334C31.7335 14.9975 31.4264 15.1702 31.0892 15.2166L30.9064 15.2292H12.0939C11.7535 15.2291 11.4257 15.0997 11.177 14.8673C10.9282 14.6349 10.7769 14.3167 10.7537 13.977C10.7305 13.6373 10.8371 13.3015 11.0519 13.0374C11.2668 12.7733 11.5739 12.6006 11.9112 12.5542L12.0939 12.5417H30.9064Z" fill="#222222"/>
                  </svg>
                    Education</a>
              </li>
              <li role="presentation" className="flex-auto text-center">
                <a
                  href="#tabs-3"
                  className="mb-2 border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-lg font-medium uppercase leading-tight text-black hover:isolate hover:border-transparent hover:bg-primary hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-primary tab-nav data-[te-nav-active]:active-tab data-[te-nav-active]:text-white transition flex items-center  justify-start md:justify-center gap-3"
                  data-te-toggle="pill"
                  data-te-target="#tabs-3"
                  role="tab"
                  aria-controls="tabs-3"
                  aria-selected="false">
                    <svg width="34" height="34" viewBox="0 0 34 34" className=' w-auto h-10' fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_180_1566)">
<path d="M17.765 33.32C18.3345 33.218 18.9125 33.1415 19.482 33.0055C23.426 32.096 26.6135 28.679 27.268 24.684C28.118 19.4735 25.194 14.637 20.196 12.971C14.263 10.9905 7.74346 14.9345 6.73196 21.1055C5.81396 26.724 9.33296 31.892 14.892 33.099C15.334 33.1925 15.793 33.2435 16.235 33.32C16.745 33.32 17.255 33.32 17.765 33.32ZM10.0725 29.2145C6.91046 25.908 6.50246 19.9835 10.455 16.15C14.4245 12.308 20.774 12.6735 24.2505 16.915C27.659 21.08 26.5965 26.5625 23.9105 29.189C22.8735 27.115 21.233 25.7465 18.9975 25.0835C21.556 23.528 21.505 20.3575 19.907 18.734C18.2835 17.0765 15.623 17.0935 14.042 18.7765C12.4355 20.485 12.5205 23.562 14.994 25.0835C12.7585 25.7465 11.1265 27.115 10.0725 29.2145ZM17.3825 32.3C14.8495 32.3 12.7585 31.5605 11.0755 30.2005C10.931 30.0815 10.8375 29.9965 10.948 29.784C12.189 27.268 14.2035 25.8825 17.0085 25.874C19.805 25.8655 21.811 27.251 23.052 29.75C23.1455 29.937 23.1115 30.039 22.95 30.175C21.216 31.5775 19.2355 32.266 17.3825 32.3ZM20.009 21.5305C20.009 23.222 18.666 24.565 16.9745 24.565C15.334 24.565 13.991 23.2135 13.9825 21.556C13.974 19.873 15.3255 18.5215 17.017 18.53C18.6745 18.53 20.0175 19.873 20.009 21.5305Z" fill="black"/>
<path d="M16.8046 0.679993C16.6771 0.883993 16.5156 1.06249 16.4391 1.28349C16.1416 2.15049 15.8696 3.03449 15.5806 3.92699C14.6796 3.92699 13.7871 3.92699 12.9031 3.92699C12.8011 3.92699 12.6906 3.92699 12.5886 3.92699C12.3251 3.91849 12.1296 4.03749 12.0531 4.29249C11.9766 4.53049 12.0701 4.72599 12.2741 4.87049C12.9626 5.37199 13.6511 5.86499 14.3396 6.36649C14.4501 6.45149 14.5606 6.52799 14.7051 6.62999C14.5521 7.09749 14.4076 7.56499 14.2546 8.03249C14.1016 8.49999 13.9571 8.95899 13.7956 9.42649C13.7106 9.68149 13.7106 9.91949 13.9486 10.0895C14.1866 10.268 14.4246 10.2 14.6456 10.03C15.3596 9.50299 16.0906 8.98449 16.8046 8.44899C16.9576 8.32999 17.0596 8.33849 17.2126 8.44899C17.9181 8.97599 18.6406 9.48599 19.3461 10.013C19.5756 10.183 19.8136 10.2765 20.0686 10.0895C20.3151 9.91099 20.2981 9.66449 20.2046 9.40099C19.8986 8.48299 19.6096 7.57349 19.3036 6.63849C20.0261 6.11999 20.7401 5.60149 21.4456 5.08299C21.5391 5.01499 21.6326 4.94699 21.7261 4.87899C21.9301 4.73449 22.0236 4.53899 21.9471 4.30099C21.8706 4.04599 21.6751 3.93549 21.4116 3.93549C20.5446 3.93549 19.6691 3.93549 18.8021 3.93549C18.6831 3.93549 18.5726 3.93549 18.4196 3.93549C18.2666 3.46799 18.1136 2.99199 17.9606 2.52449C17.8246 2.09949 17.7056 1.66599 17.5441 1.25799C17.4676 1.05399 17.3061 0.875493 17.1871 0.688493C17.0596 0.679993 16.9321 0.679993 16.8046 0.679993ZM19.7881 4.95549C19.7966 4.97249 19.7966 4.99799 19.8051 5.01499C19.4226 5.29549 19.0316 5.57599 18.6491 5.85649C18.1476 6.22199 18.1221 6.29849 18.3176 6.89349C18.4621 7.34399 18.6066 7.79449 18.7511 8.23649C18.3261 8.00699 17.9606 7.73499 17.5951 7.47149C17.0086 7.04649 16.9916 7.04649 16.4051 7.47999C16.0481 7.74349 15.6826 8.00699 15.3256 8.26199C15.4361 7.70949 15.5891 7.20799 15.7591 6.71499C15.8696 6.38349 15.8016 6.14549 15.5126 5.94999C15.0706 5.64399 14.6456 5.32099 14.2036 4.99799C14.2461 4.97249 14.2631 4.94699 14.2801 4.94699C14.6966 4.94699 15.1046 4.94699 15.5211 4.94699C16.3371 4.94699 16.3371 4.94699 16.5921 4.17349C16.7196 3.76549 16.8556 3.36599 16.9916 2.95799C17.2211 3.45099 17.3741 3.94399 17.5356 4.43699C17.6716 4.85349 17.7991 4.94699 18.2241 4.94699C18.7341 4.95549 19.2611 4.95549 19.7881 4.95549Z" fill="black"/>
<path d="M27.1659 6.99549C26.2224 6.71499 25.3044 6.43449 24.3779 6.17949C24.1994 6.12849 23.9529 6.15399 23.7914 6.24749C23.5364 6.39199 23.5364 6.71499 23.7574 6.99549C24.2844 7.68399 24.8114 8.38099 25.3639 9.05249C25.5254 9.25649 25.5509 9.39249 25.3894 9.62199C24.8879 10.319 24.4119 11.033 23.9189 11.7385C23.7574 11.968 23.6809 12.1975 23.8679 12.444C24.0549 12.682 24.2929 12.682 24.5564 12.58C25.3894 12.274 26.2309 11.9765 27.0639 11.6705C27.2424 11.6025 27.3444 11.628 27.4634 11.781C27.9819 12.478 28.5259 13.158 29.0529 13.855C29.2314 14.093 29.4354 14.2715 29.7499 14.161C30.0644 14.0505 30.0984 13.77 30.0814 13.481C30.0474 12.631 30.0389 11.781 29.9964 10.931C29.9879 10.71 30.0389 10.5995 30.2684 10.523C31.0929 10.251 31.9089 9.94499 32.7249 9.65599C32.9884 9.56249 33.1924 9.42649 33.1924 9.12899C33.1924 8.80599 32.9714 8.67849 32.6909 8.59349C31.8409 8.35549 30.9994 8.10049 30.1579 7.86249C29.9624 7.81149 29.8859 7.72649 29.8859 7.51399C29.8774 6.64699 29.8434 5.77149 29.8264 4.90449C29.8179 4.59849 29.7499 4.34349 29.4354 4.25849C29.1209 4.17349 28.9509 4.37749 28.7894 4.60699C28.2539 5.40599 27.7184 6.18799 27.1659 6.99549ZM30.9994 9.18849C30.5914 9.33299 30.2599 9.45199 29.9284 9.57099C28.8999 9.93649 28.9084 9.82599 28.9679 10.9735C28.9849 11.322 28.9679 11.6705 28.9679 12.087C28.6194 11.628 28.3134 11.237 28.0074 10.8375C27.6929 10.4295 27.5739 10.3955 27.0809 10.574C26.6049 10.744 26.1374 10.914 25.5764 11.1095C25.8994 10.6335 26.1714 10.2425 26.4349 9.85149C26.7919 9.33299 26.7919 9.26499 26.4009 8.76349C26.1119 8.38949 25.8144 8.00699 25.5254 7.63299C26.0864 7.74349 26.6049 7.88799 27.1149 8.04099C27.4294 8.13449 27.6674 8.06649 27.8544 7.77749C28.1094 7.38649 28.3729 7.00399 28.6449 6.62149C28.6874 6.56199 28.7384 6.51099 28.7894 6.45149C28.8659 6.99549 28.8574 7.51399 28.8659 8.03249C28.8744 8.46599 28.9764 8.58499 29.4014 8.70399C29.9114 8.86549 30.4214 9.01849 30.9994 9.18849Z" fill="black"/>
<path d="M8.44044 9.34148C9.04394 8.56798 9.62194 7.81148 10.2084 7.05498C10.3869 6.82548 10.4974 6.59598 10.3189 6.33248C10.1404 6.06898 9.87694 6.08598 9.60494 6.17098C8.69544 6.44298 7.77744 6.71498 6.83394 6.99548C6.33244 6.25598 5.83094 5.52498 5.32944 4.78548C5.26994 4.70048 5.21044 4.60698 5.15094 4.52198C5.00644 4.30948 4.81094 4.19898 4.55594 4.28398C4.30094 4.36898 4.19894 4.55598 4.19044 4.81948C4.17344 5.70348 4.13094 6.57898 4.13094 7.46298C4.13094 7.72648 4.04594 7.82848 3.79944 7.88798C2.98344 8.10898 2.16744 8.35548 1.35144 8.59348C1.06244 8.67848 0.824438 8.79748 0.824438 9.13748C0.824438 9.45198 1.05394 9.57948 1.32594 9.67298C2.13344 9.95348 2.94094 10.251 3.75694 10.5315C3.96094 10.5995 4.03744 10.693 4.02894 10.914C3.98644 11.781 3.97794 12.6565 3.94394 13.5235C3.93544 13.8125 3.98644 14.0675 4.29244 14.1695C4.58994 14.2715 4.78544 14.11 4.96394 13.872C5.49094 13.175 6.02644 12.495 6.55344 11.798C6.67244 11.6365 6.77444 11.6025 6.96994 11.679C7.79444 11.9935 8.62744 12.274 9.45194 12.58C9.71544 12.6735 9.95344 12.699 10.1489 12.461C10.3529 12.206 10.2594 11.9765 10.0979 11.73C9.53694 10.948 9.00144 10.1575 8.44044 9.34148ZM8.35544 11.033C8.33844 11.05 8.32144 11.067 8.31294 11.0925C7.83694 10.9225 7.36094 10.744 6.88494 10.574C6.42594 10.4125 6.28994 10.455 5.98394 10.846C5.67794 11.2455 5.37194 11.645 5.04044 12.07C5.04044 11.526 5.03194 11.0245 5.04044 10.5315C5.05744 10.013 4.98944 9.90248 4.51344 9.73248C4.02894 9.56248 3.54444 9.38398 2.98344 9.18848C3.53594 9.02698 4.01194 8.89098 4.48794 8.74648C5.04044 8.58498 5.10844 8.49998 5.11694 7.92198C5.12544 7.43748 5.11694 6.96148 5.11694 6.47698C5.15094 6.46848 5.18494 6.46848 5.21894 6.45998C5.49944 6.87648 5.78844 7.29298 6.06894 7.70948C6.34944 8.11748 6.46844 8.15998 6.94444 8.02398C7.43744 7.87948 7.93044 7.73498 8.50844 7.57348C8.14294 8.04948 7.82844 8.44898 7.52244 8.84848C7.21644 9.24798 7.20794 9.37548 7.48844 9.78348C7.78594 10.2 8.07494 10.6165 8.35544 11.033Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_180_1566">
<rect width="34" height="34" fill="white" transform="matrix(-1 0 0 1 34 0)"/>
</clipPath>
</defs>
</svg>

                    Experience</a>
              </li>
              <li role="presentation" className="flex-auto text-center">
                <a
                  href="#tabs-4"
                  className="mb-2 border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-lg font-medium uppercase leading-tight text-black hover:isolate hover:border-transparent hover:bg-primary hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-primary tab-nav data-[te-nav-active]:active-tab data-[te-nav-active]:text-white transition flex items-center justify-start md:justify-center gap-3"
                  data-te-toggle="pill"
                  data-te-target="#tabs-4"
                  role="tab"
                  aria-controls="tabs-4"
                  aria-selected="false">
                    <svg width="41" height="41" viewBox="0 0 41 41" className=' w-auto h-10' fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.0625 33.3125H33.3125V35.875H23.0625V33.3125ZM23.0625 28.1875H38.4375V30.75H23.0625V28.1875ZM23.0625 23.0625H38.4375V25.625H23.0625V23.0625Z" fill="#222222"/>
<path d="M26.3285 14.3718L20.5001 2.5625L14.6717 14.3718L1.64014 16.2655L11.0701 25.4584L8.84332 38.4375L17.9376 33.6572V30.7615L12.2476 33.7533L13.5955 25.8915L13.8235 24.5628L12.8588 23.6237L7.14695 18.0541L15.0407 16.9074L16.3732 16.7139L16.9703 15.5057L20.5001 8.35247L24.03 15.5057L24.627 16.7139L25.9595 16.9074L35.51 18.2975L35.8751 15.7594L26.3285 14.3718Z" fill="#222222"/>
</svg>

                    Review</a>
              </li>
            </ul>
            <div className="mb-6 p-6">
              <div
                className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-01"
                role="tabpanel"
                aria-labelledby="tabs-home-tab01"
                data-te-tab-active>
                  <div className="tab-inner-info-wrapper flex flex-col items-start justify-between w-full">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
                      <div className="mb-3 w-full flex flex-col items-start justify-between gap-3">
                        <div className="mb-3">
                          <div className=" text-[#2F2F2F] text-base font-normal">Follow up Fee:</div>
                          <span className=' text-[#2F2F2F] text-base font-bold'>{doctor.followup_fee}Tk</span>
                        </div>
                        <div className="mb-3">
                          <div className=" text-[#2F2F2F] text-base font-normal">Department Name:</div>
                          <span className=' text-[#2F2F2F] text-base font-bold'>{doctor.dept_name}</span>
                        </div>
                        <div className="mb-3">
                          <div className=" text-[#2F2F2F] text-base font-normal">Designation As a:</div>
                          <span className=' text-[#2F2F2F] text-base font-bold'>{doctor.designation}</span>
                        </div>
                        
                      <div className="">
                        <div className=" text-[#2F2F2F] text-xl font-medium">About Doctor:</div>
                        <span className=' text-[#2F2F2F] text-base font-normal'>{aboutDoc}</span>
                      </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-left text-xl font-light">
                                <thead className="border-b border-[#E496EE] font-normal">
                                  <tr>
                                    <th scope="col" className="px-6 pb-4">Availability</th>
                                    <th scope="col" className="px-6 pb-4">Consultation Time</th>
                                  </tr>
                                </thead>
                                <tbody>
                                {doctor.schedules.map((el, index)=>{
          
                                      return ( 
                                        <tr key={index} id={doctor.doctor_id}
                                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                                          <td className="whitespace-nowrap text-base px-6 py-4">{el.day}</td>
                                          <td className="whitespace-nowrap text-base px-6 py-4"><span><span>{el.start_time}</span> - <span>{el.end_time}</span></span></td>
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-2"
                role="tabpanel"
                aria-labelledby="tabs-education-tab01">
                <div className="education-info">
                  <div className="inner-area">

                  {educations.length > 0 ? (
                      <div className='edu-info  flex flex-col-reverse'>
                        {educations.map((education, index) => (
                          <div key={index} id={education.doctor_education_id} className='px-6 bg-white'>
                            <div className="edu-info-inner pb-6">
                              <div className="shadow hover:shadow-md border border-gray-100 rounded transition p-4">
                                  <h4 className='text-[#2F2F2F] text-base font-normal mb-1'>Institution: <br /> <span className='text-[#2F2F2F] text-base font-bold'>{education.institute}</span></h4>
                                  <p className='text-[#2F2F2F] text-base font-normal mb-1'>Degree: <br /><span className='text-[#2F2F2F] text-base font-bold'>{education.degree}</span></p>
                                  <p className='text-[#2F2F2F] text-base font-normal mb-1'>Duration: <br /><span className='text-[#2F2F2F] text-base font-bold'>{education.start_year} - {education.end_year}</span></p>
                                </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No Data added</p>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-3"
                role="tabpanel"
                aria-labelledby="tabs-exp-tab01">
                <div className="experience-info-area">
                  <div className="exp-info flex flex-col-reverse">
                  {experiences.length > 0 ? (
                            <>
                            {experiences.map((exp, index) => (
                              <div key={index} id={exp.doctor_experience_id} className='px-6 bg-white'>
                                <div className="edu-info-inner pb-6">
                                  <div className="shadow hover:shadow-md border border-gray-100 rounded transition p-4">
                                      <h4 className='text-[#2F2F2F] text-base font-normal mb-1'>Institution: <br /> <span className='text-[#2F2F2F] text-base font-bold'>{exp.work_place}</span></h4>
                                      <p className='text-[#2F2F2F] text-base font-normal mb-1'>Department: <br /><span className='text-[#2F2F2F] text-base font-bold'>{exp.department}</span></p>
                                      <p className='text-[#2F2F2F] text-base font-normal mb-1'>Post: <br /><span className='text-[#2F2F2F] text-base font-bold'>{exp.designation}</span></p>
                                      <p className='text-[#2F2F2F] text-base font-normal mb-1'>Duration: <br /><span className='text-[#2F2F2F] text-base font-bold'>
                                        {exp.start_year} - {exp.end_year}</span></p>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </>
                          ) : (
                            <p>No Experience Added.</p>
                          )}
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-4"
                role="tabpanel"
                aria-labelledby="tabs-review-tab01">
                <div className="review-wrapper">
                  <div className='text-[#2F2F2F] text-xl font-normal mb-7'>Recent Reviews:</div>
                  <div className="review-inner-area">
                  {review.length > 0 ? (
                  <>
                  {review.map((el, index) => {
                   
                    const dateParts = el.createdAt.split('T')[0].split('-');
                    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                    return (
                    <div key={index} id={el.doctor_review_id} className="single-review p-6 bg-[#fbfbfb] shadow hover:shadow-md rounded-md border-gray-600 transition mb-4">
                        <div className="profile-top flex justify-between items-center mb-6">
                          <div className="flex items-center justify-start gap-3">
                            <div className="pic rounded-full overflow-hidden w-14 h-14">
                            {el.profile_picture ? (
                                  <Image
                                    src={`https://healerspc.sgp1.digitaloceanspaces.com/media/profile_pictures/${el.profile_picture}`}
                                    width={80}
                                    height={80}
                                    className="object-cover block w-full h-full"
                                    alt="picture"
                                  />
                                ) : (
                                  <Image
                                    src={'/img/icons/user-1.png'}
                                    width={80}
                                    height={80}
                                    className="object-cover block w-full h-full"
                                    alt="picture"
                                  />
                                )}
                            </div>
                            <div className="flex flex-col">{el.name} <span className=' text-gray-400'>@mrHealer</span></div>
                          </div>
                          <div className="rating-left text-right">
                            
                            <span className="flex items-center justify-end">
                            {[...Array(Math.floor(el.rating))].map((_, index) => (
    <svg className='flex items-center' key={index} width="25" height="25" viewBox="0 0 25 25" fill="#EAC235" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4999 17.9896L16.8228 20.6042C17.6145 21.0834 18.5833 20.375 18.3749 19.4792L17.2291 14.5625L21.052 11.25C21.7499 10.6459 21.3749 9.50002 20.4583 9.4271L15.427 9.00002L13.4583 4.35419C13.1041 3.51044 11.8958 3.51044 11.5416 4.35419L9.57284 8.9896L4.54159 9.41669C3.62492 9.4896 3.24992 10.6354 3.94784 11.2396L7.77076 14.5521L6.62492 19.4688C6.41659 20.3646 7.38534 21.0729 8.17701 20.5938L12.4999 17.9896Z" />
    </svg>
))}
{[...Array(5 - Math.floor(el.rating))].map((_, index) => (
    <svg className='flex items-center' key={index} width="25" height="25" viewBox="0 0 25 25" fill="#E5E7EB" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4999 17.9896L16.8228 20.6042C17.6145 21.0834 18.5833 20.375 18.3749 19.4792L17.2291 14.5625L21.052 11.25C21.7499 10.6459 21.3749 9.50002 20.4583 9.4271L15.427 9.00002L13.4583 4.35419C13.1041 3.51044 11.8958 3.51044 11.5416 4.35419L9.57284 8.9896L4.54159 9.41669C3.62492 9.4896 3.24992 10.6354 3.94784 11.2396L7.77076 14.5521L6.62492 19.4688C6.41659 20.3646 7.38534 21.0729 8.17701 20.5938L12.4999 17.9896Z" />
    </svg>
))}
<span className='ml-1 mt-1'>{el.rating}.0</span>
</span>
                            <span>{formattedDate}</span>
                          </div>
                        </div>
                        <div className="review-text capitalize">
                          {el.text}
                        </div>
                    </div>
                          )})}
                          </>
                      ) : (
                        <p>Has No Reviews</p>
                      )}
                  </div>
                  
                
               
                </div>
              </div>
            </div>
</div>
                      
        {/* for mobile version start */}
        <div data-aos="fade-up" id="accordion-c" className="mx-auto w-full block md:hidden">
          <div  className="">
            <h4 className="" id="heading-1">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:active-tab [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-target="#collapse-1"
                aria-expanded="true"
                aria-controls="collapse-1"
              >
                <svg width="34" height="34" viewBox="0 0 34 34" className=' w-auto h-10 mr-3' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_180_1798)">
                  <path d="M5.3125 3.71875V28.1562C5.3125 28.4495 5.5505 28.6875 5.84375 28.6875H12.58C13.0027 28.6875 13.4081 28.8554 13.707 29.1543C14.0058 29.4532 14.1737 29.8586 14.1737 30.2812C14.1737 30.7039 14.0058 31.1093 13.707 31.4082C13.4081 31.7071 13.0027 31.875 12.58 31.875H5.84375C4.85748 31.875 3.9116 31.4832 3.2142 30.7858C2.5168 30.0884 2.125 29.1425 2.125 28.1562V3.71875C2.125 1.666 3.791 0 5.84375 0H23.9062C25.959 0 27.625 1.666 27.625 3.71875V20.1577C27.625 20.5804 27.4571 20.9858 27.1582 21.2847C26.8593 21.5836 26.4539 21.7515 26.0312 21.7515C25.6086 21.7515 25.2032 21.5836 24.9043 21.2847C24.6054 20.9858 24.4375 20.5804 24.4375 20.1577V3.71875C24.4375 3.57785 24.3815 3.44273 24.2819 3.3431C24.1823 3.24347 24.0471 3.1875 23.9062 3.1875H5.84375C5.70285 3.1875 5.56773 3.24347 5.4681 3.3431C5.36847 3.44273 5.3125 3.57785 5.3125 3.71875ZM33.5198 23.9849L23.8361 33.439C23.5355 33.732 23.1314 33.8945 22.7117 33.8913C22.2919 33.8881 21.8904 33.7195 21.5942 33.422L17.4654 29.2782C17.1844 28.9756 17.0319 28.5757 17.0399 28.1628C17.048 27.7499 17.216 27.3563 17.5086 27.0648C17.8011 26.7734 18.1954 26.6068 18.6083 26.6003C19.0212 26.5938 19.4205 26.7479 19.7221 27.03L22.7375 30.0581L31.2927 21.7026C31.5954 21.4073 32.003 21.2443 32.4258 21.2495C32.8486 21.2547 33.2521 21.4276 33.5474 21.7302C33.8427 22.0329 34.0057 22.4405 34.0005 22.8633C33.9953 23.2861 33.8224 23.6896 33.5198 23.9849ZM10.0938 8.5H19.6562C20.0789 8.5 20.4843 8.66791 20.7832 8.9668C21.0821 9.26568 21.25 9.67106 21.25 10.0937C21.25 10.5164 21.0821 10.9218 20.7832 11.2207C20.4843 11.5196 20.0789 11.6875 19.6562 11.6875H10.0938C9.67106 11.6875 9.26568 11.5196 8.9668 11.2207C8.66791 10.9218 8.5 10.5164 8.5 10.0937C8.5 9.67106 8.66791 9.26568 8.9668 8.9668C9.26568 8.66791 9.67106 8.5 10.0938 8.5ZM8.5 16.4687C8.5 16.0461 8.66791 15.6407 8.9668 15.3418C9.26568 15.0429 9.67106 14.875 10.0938 14.875H14.3438C14.7664 14.875 15.1718 15.0429 15.4707 15.3418C15.7696 15.6407 15.9375 16.0461 15.9375 16.4687C15.9375 16.8914 15.7696 17.2968 15.4707 17.5957C15.1718 17.8946 14.7664 18.0625 14.3438 18.0625H10.0938C9.67106 18.0625 9.26568 17.8946 8.9668 17.5957C8.66791 17.2968 8.5 16.8914 8.5 16.4687Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_180_1798">
                  <rect width="34" height="34" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>

                Overview
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
              data-te-parent="#accordion-c"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md rounded-md text-[#2F2F2F] leading-7">
              <div className="tab-inner-info-wrapper flex flex-col items-start justify-between w-full">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
                      <div className="mb-3 w-full flex flex-col items-start justify-between gap-3">
                        <div className="mb-3">
                          <div className=" text-[#2F2F2F] text-base font-normal">Follow up Fee:</div>
                          <span className=' text-[#2F2F2F] text-base font-bold'>{doctor.followup_fee}Tk</span>
                        </div>
                        <div className="mb-3">
                          <div className=" text-[#2F2F2F] text-base font-normal">Department Name:</div>
                          <span className=' text-[#2F2F2F] text-base font-bold'>{doctor.dept_name}</span>
                        </div>
                        <div className="mb-3">
                          <div className=" text-[#2F2F2F] text-base font-normal">Designation As a:</div>
                          <span className=' text-[#2F2F2F] text-base font-bold'>{doctor.designation}</span>
                        </div>
                        
                      <div className="">
                        <div className=" text-[#2F2F2F] text-xl font-medium">About Doctor:</div>
                        <span className=' text-[#2F2F2F] text-base font-normal'>{aboutDoc}</span>
                      </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-left text-xl font-light">
                                <thead className="border-b border-[#E496EE] font-normal">
                                  <tr>
                                    <th scope="col" className="px-6 pb-4">Availability</th>
                                    <th scope="col" className="px-6 pb-4">Consultation Time</th>
                                  </tr>
                                </thead>
                                <tbody>
                                {doctor.schedules.map((el, index)=>{
          
                                      return ( 
                                        <tr key={index} id={doctor.doctor_id}
                                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                                          <td className="whitespace-nowrap text-base px-6 py-4">{el.day}</td>
                                          <td className="whitespace-nowrap text-base px-6 py-4"><span><span>{el.start_time}</span> - <span>{el.end_time}</span></span></td>
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="" id="heading-2">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 [&:not([data-te-collapse-collapsed])]:active-tab [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]]  font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-2"
                aria-expanded="false"
                aria-controls="collapse-2"
              ><svg width="43" height="43" viewBox="0 0 43 43" className=' w-auto h-10 mr-3' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.2502 17.9167C33.6301 17.916 34.981 18.3137 36.1404 19.0621C37.2998 19.8105 38.2185 20.8777 38.7861 22.1355C39.3537 23.3934 39.5461 24.7883 39.3401 26.1528C39.1342 27.5173 38.5387 28.7934 37.6252 29.8277V38.0693C37.6256 38.2994 37.567 38.5257 37.4549 38.7266C37.3429 38.9275 37.1811 39.0963 36.9851 39.2168C36.7891 39.3373 36.5655 39.4054 36.3356 39.4147C36.1057 39.424 35.8773 39.3741 35.6722 39.2698L35.511 39.1712L32.2502 36.8922L28.9893 39.1712C28.801 39.3027 28.5821 39.3837 28.3536 39.4066C28.125 39.4294 27.8945 39.3933 27.6839 39.3016C27.4733 39.21 27.2897 39.0659 27.1506 38.8831C27.0115 38.7003 26.9216 38.4849 26.8895 38.2575L26.877 38.0693V29.8241C25.9647 28.7898 25.3702 27.5143 25.1648 26.1505C24.9594 24.7867 25.1519 23.3927 25.7192 22.1356C26.2864 20.8785 27.2044 19.8118 28.3628 19.0635C29.5213 18.3151 30.871 17.9169 32.2502 17.9167ZM34.9377 31.7304C34.0838 32.0757 33.1712 32.2528 32.2502 32.2518C31.3291 32.2528 30.4165 32.0757 29.5627 31.7304V35.4911L31.4815 34.1528C31.678 34.0151 31.9077 33.9325 32.1468 33.9136C32.386 33.8947 32.6258 33.9402 32.8414 34.0453L33.0206 34.1528L34.9377 35.4911V31.7304ZM34.4897 5.38217C35.7444 5.38211 36.9519 5.86071 37.8658 6.72036C38.7797 7.58 39.3312 8.75592 39.4079 10.0083L39.4168 10.3093L39.4186 19.7083C38.692 18.741 37.778 17.93 36.7311 17.3236L36.7293 10.3093C36.7296 9.75481 36.5242 9.21998 36.1528 8.80826C35.7815 8.39654 35.2706 8.1372 34.7191 8.08042L34.4897 8.06967H8.51058C7.95613 8.06942 7.4213 8.27484 7.00958 8.64618C6.59786 9.01753 6.33852 9.52839 6.28175 10.0799L6.271 10.3093V27.3301C6.271 28.4893 7.1525 29.4443 8.28125 29.5571L8.51058 29.5697L24.4958 29.5715L24.7162 29.9352L24.9563 30.2863L25.0835 30.4548L25.0817 32.2572H8.51058C7.25561 32.2572 6.04792 31.7784 5.13396 30.9183C4.22 30.0583 3.66867 28.882 3.59245 27.6293L3.5835 27.3301V10.3093C3.58343 9.05458 4.06204 7.84713 4.92168 6.93322C5.78132 6.01931 6.95724 5.46778 8.20958 5.39113L8.51058 5.38217H34.4897ZM32.2502 20.6042C31.062 20.6042 29.9225 21.0762 29.0823 21.9164C28.2421 22.7565 27.7701 23.896 27.7701 25.0842C27.7701 26.2724 28.2421 27.4119 29.0823 28.2521C29.9225 29.0923 31.062 29.5643 32.2502 29.5643C33.4384 29.5643 34.5779 29.0923 35.418 28.2521C36.2582 27.4119 36.7302 26.2724 36.7302 25.0842C36.7302 23.896 36.2582 22.7565 35.418 21.9164C34.5779 21.0762 33.4384 20.6042 32.2502 20.6042ZM20.1564 22.3958C20.4969 22.3959 20.8246 22.5253 21.0734 22.7577C21.3221 22.9901 21.4734 23.3083 21.4966 23.648C21.5198 23.9877 21.4132 24.3235 21.1984 24.5876C20.9835 24.8517 20.6764 25.0244 20.3392 25.0708L20.1564 25.0833H12.0939C11.7535 25.0832 11.4257 24.9539 11.177 24.7215C10.9282 24.489 10.7769 24.1708 10.7537 23.8312C10.7305 23.4915 10.8371 23.1557 11.0519 22.8916C11.2668 22.6275 11.5739 22.4548 11.9112 22.4084L12.0939 22.3958H20.1564ZM30.9064 12.5417C31.2469 12.5418 31.5746 12.6711 31.8234 12.9035C32.0721 13.136 32.2234 13.4542 32.2466 13.7938C32.2698 14.1335 32.1632 14.4693 31.9484 14.7334C31.7335 14.9975 31.4264 15.1702 31.0892 15.2166L30.9064 15.2292H12.0939C11.7535 15.2291 11.4257 15.0997 11.177 14.8673C10.9282 14.6349 10.7769 14.3167 10.7537 13.977C10.7305 13.6373 10.8371 13.3015 11.0519 13.0374C11.2668 12.7733 11.5739 12.6006 11.9112 12.5542L12.0939 12.5417H30.9064Z" fill="#222222"/>
              </svg>
                Education
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
              data-te-parent="#accordion-c"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md rounded-md text-[#2F2F2F] leading-7">
              <div className="education-info">
                  <div className="inner-area">

                  {educations.length > 0 ? (
                      <div className='edu-info  flex flex-col-reverse'>
                        {educations.map((education, index) => (
                          <div key={index} id={education.doctor_education_id} className='px-6 bg-white'>
                            <div className="edu-info-inner pb-6">
                              <div className="shadow hover:shadow-md border border-gray-100 rounded transition p-4">
                                  <h4 className='text-[#2F2F2F] text-base font-normal mb-1'>Institution: <br /> <span className='text-[#2F2F2F] text-base font-bold'>{education.institute}</span></h4>
                                  <p className='text-[#2F2F2F] text-base font-normal mb-1'>Degree: <br /><span className='text-[#2F2F2F] text-base font-bold'>{education.degree}</span></p>
                                  <p className='text-[#2F2F2F] text-base font-normal mb-1'>Duration: <br /><span className='text-[#2F2F2F] text-base font-bold'>{education.start_year} - {education.end_year}</span></p>
                                </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No Data added</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="accordion-header" id="heading-3">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 [&:not([data-te-collapse-collapsed])]:active-tab [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-3"
                aria-expanded="false"
                aria-controls="collapse-3"
              >
                <svg width="34" height="34" viewBox="0 0 34 34" className=' w-auto h-10 mr-3' fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_180_1566)">
<path d="M17.765 33.32C18.3345 33.218 18.9125 33.1415 19.482 33.0055C23.426 32.096 26.6135 28.679 27.268 24.684C28.118 19.4735 25.194 14.637 20.196 12.971C14.263 10.9905 7.74346 14.9345 6.73196 21.1055C5.81396 26.724 9.33296 31.892 14.892 33.099C15.334 33.1925 15.793 33.2435 16.235 33.32C16.745 33.32 17.255 33.32 17.765 33.32ZM10.0725 29.2145C6.91046 25.908 6.50246 19.9835 10.455 16.15C14.4245 12.308 20.774 12.6735 24.2505 16.915C27.659 21.08 26.5965 26.5625 23.9105 29.189C22.8735 27.115 21.233 25.7465 18.9975 25.0835C21.556 23.528 21.505 20.3575 19.907 18.734C18.2835 17.0765 15.623 17.0935 14.042 18.7765C12.4355 20.485 12.5205 23.562 14.994 25.0835C12.7585 25.7465 11.1265 27.115 10.0725 29.2145ZM17.3825 32.3C14.8495 32.3 12.7585 31.5605 11.0755 30.2005C10.931 30.0815 10.8375 29.9965 10.948 29.784C12.189 27.268 14.2035 25.8825 17.0085 25.874C19.805 25.8655 21.811 27.251 23.052 29.75C23.1455 29.937 23.1115 30.039 22.95 30.175C21.216 31.5775 19.2355 32.266 17.3825 32.3ZM20.009 21.5305C20.009 23.222 18.666 24.565 16.9745 24.565C15.334 24.565 13.991 23.2135 13.9825 21.556C13.974 19.873 15.3255 18.5215 17.017 18.53C18.6745 18.53 20.0175 19.873 20.009 21.5305Z" fill="black"/>
<path d="M16.8046 0.679993C16.6771 0.883993 16.5156 1.06249 16.4391 1.28349C16.1416 2.15049 15.8696 3.03449 15.5806 3.92699C14.6796 3.92699 13.7871 3.92699 12.9031 3.92699C12.8011 3.92699 12.6906 3.92699 12.5886 3.92699C12.3251 3.91849 12.1296 4.03749 12.0531 4.29249C11.9766 4.53049 12.0701 4.72599 12.2741 4.87049C12.9626 5.37199 13.6511 5.86499 14.3396 6.36649C14.4501 6.45149 14.5606 6.52799 14.7051 6.62999C14.5521 7.09749 14.4076 7.56499 14.2546 8.03249C14.1016 8.49999 13.9571 8.95899 13.7956 9.42649C13.7106 9.68149 13.7106 9.91949 13.9486 10.0895C14.1866 10.268 14.4246 10.2 14.6456 10.03C15.3596 9.50299 16.0906 8.98449 16.8046 8.44899C16.9576 8.32999 17.0596 8.33849 17.2126 8.44899C17.9181 8.97599 18.6406 9.48599 19.3461 10.013C19.5756 10.183 19.8136 10.2765 20.0686 10.0895C20.3151 9.91099 20.2981 9.66449 20.2046 9.40099C19.8986 8.48299 19.6096 7.57349 19.3036 6.63849C20.0261 6.11999 20.7401 5.60149 21.4456 5.08299C21.5391 5.01499 21.6326 4.94699 21.7261 4.87899C21.9301 4.73449 22.0236 4.53899 21.9471 4.30099C21.8706 4.04599 21.6751 3.93549 21.4116 3.93549C20.5446 3.93549 19.6691 3.93549 18.8021 3.93549C18.6831 3.93549 18.5726 3.93549 18.4196 3.93549C18.2666 3.46799 18.1136 2.99199 17.9606 2.52449C17.8246 2.09949 17.7056 1.66599 17.5441 1.25799C17.4676 1.05399 17.3061 0.875493 17.1871 0.688493C17.0596 0.679993 16.9321 0.679993 16.8046 0.679993ZM19.7881 4.95549C19.7966 4.97249 19.7966 4.99799 19.8051 5.01499C19.4226 5.29549 19.0316 5.57599 18.6491 5.85649C18.1476 6.22199 18.1221 6.29849 18.3176 6.89349C18.4621 7.34399 18.6066 7.79449 18.7511 8.23649C18.3261 8.00699 17.9606 7.73499 17.5951 7.47149C17.0086 7.04649 16.9916 7.04649 16.4051 7.47999C16.0481 7.74349 15.6826 8.00699 15.3256 8.26199C15.4361 7.70949 15.5891 7.20799 15.7591 6.71499C15.8696 6.38349 15.8016 6.14549 15.5126 5.94999C15.0706 5.64399 14.6456 5.32099 14.2036 4.99799C14.2461 4.97249 14.2631 4.94699 14.2801 4.94699C14.6966 4.94699 15.1046 4.94699 15.5211 4.94699C16.3371 4.94699 16.3371 4.94699 16.5921 4.17349C16.7196 3.76549 16.8556 3.36599 16.9916 2.95799C17.2211 3.45099 17.3741 3.94399 17.5356 4.43699C17.6716 4.85349 17.7991 4.94699 18.2241 4.94699C18.7341 4.95549 19.2611 4.95549 19.7881 4.95549Z" fill="black"/>
<path d="M27.1659 6.99549C26.2224 6.71499 25.3044 6.43449 24.3779 6.17949C24.1994 6.12849 23.9529 6.15399 23.7914 6.24749C23.5364 6.39199 23.5364 6.71499 23.7574 6.99549C24.2844 7.68399 24.8114 8.38099 25.3639 9.05249C25.5254 9.25649 25.5509 9.39249 25.3894 9.62199C24.8879 10.319 24.4119 11.033 23.9189 11.7385C23.7574 11.968 23.6809 12.1975 23.8679 12.444C24.0549 12.682 24.2929 12.682 24.5564 12.58C25.3894 12.274 26.2309 11.9765 27.0639 11.6705C27.2424 11.6025 27.3444 11.628 27.4634 11.781C27.9819 12.478 28.5259 13.158 29.0529 13.855C29.2314 14.093 29.4354 14.2715 29.7499 14.161C30.0644 14.0505 30.0984 13.77 30.0814 13.481C30.0474 12.631 30.0389 11.781 29.9964 10.931C29.9879 10.71 30.0389 10.5995 30.2684 10.523C31.0929 10.251 31.9089 9.94499 32.7249 9.65599C32.9884 9.56249 33.1924 9.42649 33.1924 9.12899C33.1924 8.80599 32.9714 8.67849 32.6909 8.59349C31.8409 8.35549 30.9994 8.10049 30.1579 7.86249C29.9624 7.81149 29.8859 7.72649 29.8859 7.51399C29.8774 6.64699 29.8434 5.77149 29.8264 4.90449C29.8179 4.59849 29.7499 4.34349 29.4354 4.25849C29.1209 4.17349 28.9509 4.37749 28.7894 4.60699C28.2539 5.40599 27.7184 6.18799 27.1659 6.99549ZM30.9994 9.18849C30.5914 9.33299 30.2599 9.45199 29.9284 9.57099C28.8999 9.93649 28.9084 9.82599 28.9679 10.9735C28.9849 11.322 28.9679 11.6705 28.9679 12.087C28.6194 11.628 28.3134 11.237 28.0074 10.8375C27.6929 10.4295 27.5739 10.3955 27.0809 10.574C26.6049 10.744 26.1374 10.914 25.5764 11.1095C25.8994 10.6335 26.1714 10.2425 26.4349 9.85149C26.7919 9.33299 26.7919 9.26499 26.4009 8.76349C26.1119 8.38949 25.8144 8.00699 25.5254 7.63299C26.0864 7.74349 26.6049 7.88799 27.1149 8.04099C27.4294 8.13449 27.6674 8.06649 27.8544 7.77749C28.1094 7.38649 28.3729 7.00399 28.6449 6.62149C28.6874 6.56199 28.7384 6.51099 28.7894 6.45149C28.8659 6.99549 28.8574 7.51399 28.8659 8.03249C28.8744 8.46599 28.9764 8.58499 29.4014 8.70399C29.9114 8.86549 30.4214 9.01849 30.9994 9.18849Z" fill="black"/>
<path d="M8.44044 9.34148C9.04394 8.56798 9.62194 7.81148 10.2084 7.05498C10.3869 6.82548 10.4974 6.59598 10.3189 6.33248C10.1404 6.06898 9.87694 6.08598 9.60494 6.17098C8.69544 6.44298 7.77744 6.71498 6.83394 6.99548C6.33244 6.25598 5.83094 5.52498 5.32944 4.78548C5.26994 4.70048 5.21044 4.60698 5.15094 4.52198C5.00644 4.30948 4.81094 4.19898 4.55594 4.28398C4.30094 4.36898 4.19894 4.55598 4.19044 4.81948C4.17344 5.70348 4.13094 6.57898 4.13094 7.46298C4.13094 7.72648 4.04594 7.82848 3.79944 7.88798C2.98344 8.10898 2.16744 8.35548 1.35144 8.59348C1.06244 8.67848 0.824438 8.79748 0.824438 9.13748C0.824438 9.45198 1.05394 9.57948 1.32594 9.67298C2.13344 9.95348 2.94094 10.251 3.75694 10.5315C3.96094 10.5995 4.03744 10.693 4.02894 10.914C3.98644 11.781 3.97794 12.6565 3.94394 13.5235C3.93544 13.8125 3.98644 14.0675 4.29244 14.1695C4.58994 14.2715 4.78544 14.11 4.96394 13.872C5.49094 13.175 6.02644 12.495 6.55344 11.798C6.67244 11.6365 6.77444 11.6025 6.96994 11.679C7.79444 11.9935 8.62744 12.274 9.45194 12.58C9.71544 12.6735 9.95344 12.699 10.1489 12.461C10.3529 12.206 10.2594 11.9765 10.0979 11.73C9.53694 10.948 9.00144 10.1575 8.44044 9.34148ZM8.35544 11.033C8.33844 11.05 8.32144 11.067 8.31294 11.0925C7.83694 10.9225 7.36094 10.744 6.88494 10.574C6.42594 10.4125 6.28994 10.455 5.98394 10.846C5.67794 11.2455 5.37194 11.645 5.04044 12.07C5.04044 11.526 5.03194 11.0245 5.04044 10.5315C5.05744 10.013 4.98944 9.90248 4.51344 9.73248C4.02894 9.56248 3.54444 9.38398 2.98344 9.18848C3.53594 9.02698 4.01194 8.89098 4.48794 8.74648C5.04044 8.58498 5.10844 8.49998 5.11694 7.92198C5.12544 7.43748 5.11694 6.96148 5.11694 6.47698C5.15094 6.46848 5.18494 6.46848 5.21894 6.45998C5.49944 6.87648 5.78844 7.29298 6.06894 7.70948C6.34944 8.11748 6.46844 8.15998 6.94444 8.02398C7.43744 7.87948 7.93044 7.73498 8.50844 7.57348C8.14294 8.04948 7.82844 8.44898 7.52244 8.84848C7.21644 9.24798 7.20794 9.37548 7.48844 9.78348C7.78594 10.2 8.07494 10.6165 8.35544 11.033Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_180_1566">
<rect width="34" height="34" fill="white" transform="matrix(-1 0 0 1 34 0)"/>
</clipPath>
</defs>
</svg>

                    Experience
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
              data-te-parent="#accordion-c"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md rounded-md text-[#2F2F2F] leading-7">
              <div className="experience-info-area">
                  <div className="exp-info flex flex-col-reverse">
                  {experiences.length > 0 ? (
                            <>
                            {experiences.map((exp, index) => (
                              <div key={index} id={exp.doctor_experience_id} className='px-6 bg-white'>
                                <div className="edu-info-inner pb-6">
                                  <div className="shadow hover:shadow-md border border-gray-100 rounded transition p-4">
                                      <h4 className='text-[#2F2F2F] text-base font-normal mb-1'>Institution: <br /> <span className='text-[#2F2F2F] text-base font-bold'>{exp.work_place}</span></h4>
                                      <p className='text-[#2F2F2F] text-base font-normal mb-1'>Department: <br /><span className='text-[#2F2F2F] text-base font-bold'>{exp.department}</span></p>
                                      <p className='text-[#2F2F2F] text-base font-normal mb-1'>Post: <br /><span className='text-[#2F2F2F] text-base font-bold'>{exp.designation}</span></p>
                                      <p className='text-[#2F2F2F] text-base font-normal mb-1'>Duration: <br /><span className='text-[#2F2F2F] text-base font-bold'>
                                        {exp.start_year} - {exp.end_year}</span></p>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </>
                          ) : (
                            <p>No Experience Added.</p>
                          )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="accordion-header" id="heading-4">
              <button
                className="group relative flex w-full items-center rounded-md border border-[#efefef] bg-white hover:bg-primary hover:text-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none shadow-md hover:shadow-lg dark:bg-neutral-800 [&:not([data-te-collapse-collapsed])]:active-tab [&:not([data-te-collapse-collapsed])]:bg-primary [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[shadow-lg shadow-[#5b005b]] font-semibold"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapse-4"
                aria-expanded="false"
                aria-controls="collapse-4"
              >
                <svg width="41" height="41" viewBox="0 0 41 41" className=' w-auto h-10 mr-3' fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.0625 33.3125H33.3125V35.875H23.0625V33.3125ZM23.0625 28.1875H38.4375V30.75H23.0625V28.1875ZM23.0625 23.0625H38.4375V25.625H23.0625V23.0625Z" fill="#222222"/>
<path d="M26.3285 14.3718L20.5001 2.5625L14.6717 14.3718L1.64014 16.2655L11.0701 25.4584L8.84332 38.4375L17.9376 33.6572V30.7615L12.2476 33.7533L13.5955 25.8915L13.8235 24.5628L12.8588 23.6237L7.14695 18.0541L15.0407 16.9074L16.3732 16.7139L16.9703 15.5057L20.5001 8.35247L24.03 15.5057L24.627 16.7139L25.9595 16.9074L35.51 18.2975L35.8751 15.7594L26.3285 14.3718Z" fill="#222222"/>
</svg>

                    Review
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
              data-te-parent="#accordion-c"
            >
              <div className="py-4 px-5 border border-[#efefef] shadow-md rounded-md text-[#2F2F2F] leading-7">
              <div className="review-wrapper">
                  <div className='text-[#2F2F2F] text-xl font-normal mb-7'>Recent Reviews:</div>
                  <div className="review-inner-area">
                  {review.length > 0 ? (
                  <>
                  {review.map((el, index) => {
                   
                    const dateParts = el.createdAt.split('T')[0].split('-');
                    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                    return (
                    <div key={index} id={el.doctor_review_id} className="single-review p-6 bg-[#fbfbfb] shadow hover:shadow-md rounded-md border-gray-600 transition mb-4">
                        <div className="profile-top flex justify-between items-center mb-6">
                          <div className="flex items-center justify-start gap-3">
                            <div className="pic rounded-full overflow-hidden w-14 h-14">
                            {el.profile_picture ? (
                                  <Image
                                    src={`https://healerspc.sgp1.digitaloceanspaces.com/media/profile_pictures/${el.profile_picture}`}
                                    width={80}
                                    height={80}
                                    className="object-cover block w-full h-full"
                                    alt="picture"
                                  />
                                ) : (
                                  <Image
                                    src={'/img/icons/user-1.png'}
                                    width={80}
                                    height={80}
                                    className="object-cover block w-full h-full"
                                    alt="picture"
                                  />
                                )}
                            </div>
                            <div className="flex flex-col">{el.name} <span className=' text-gray-400'>@mrHealer</span></div>
                          </div>
                          <div className="rating-left text-right">
                            
                            <span className="flex items-center justify-end">
                            {[...Array(Math.floor(el.rating))].map((_, index) => (
    <svg className='flex items-center' key={index} width="25" height="25" viewBox="0 0 25 25" fill="#EAC235" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4999 17.9896L16.8228 20.6042C17.6145 21.0834 18.5833 20.375 18.3749 19.4792L17.2291 14.5625L21.052 11.25C21.7499 10.6459 21.3749 9.50002 20.4583 9.4271L15.427 9.00002L13.4583 4.35419C13.1041 3.51044 11.8958 3.51044 11.5416 4.35419L9.57284 8.9896L4.54159 9.41669C3.62492 9.4896 3.24992 10.6354 3.94784 11.2396L7.77076 14.5521L6.62492 19.4688C6.41659 20.3646 7.38534 21.0729 8.17701 20.5938L12.4999 17.9896Z" />
    </svg>
))}
{[...Array(5 - Math.floor(el.rating))].map((_, index) => (
    <svg className='flex items-center' key={index} width="25" height="25" viewBox="0 0 25 25" fill="#E5E7EB" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4999 17.9896L16.8228 20.6042C17.6145 21.0834 18.5833 20.375 18.3749 19.4792L17.2291 14.5625L21.052 11.25C21.7499 10.6459 21.3749 9.50002 20.4583 9.4271L15.427 9.00002L13.4583 4.35419C13.1041 3.51044 11.8958 3.51044 11.5416 4.35419L9.57284 8.9896L4.54159 9.41669C3.62492 9.4896 3.24992 10.6354 3.94784 11.2396L7.77076 14.5521L6.62492 19.4688C6.41659 20.3646 7.38534 21.0729 8.17701 20.5938L12.4999 17.9896Z" />
    </svg>
))}
<span className='ml-1 mt-1'>{el.rating}.0</span>
</span>
                            <span>{formattedDate}</span>
                          </div>
                        </div>
                        <div className="review-text capitalize">
                          {el.text}
                        </div>
                    </div>
                          )})}
                          </>
                      ) : (
                        <p>Has No Reviews</p>
                      )}
                  </div>
                  
                
               
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile version end */}


        </div>
      </div>
      
       
  </>
  )
}

export default DoctorInfo
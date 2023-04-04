import React from "react";
import Image from "next/image";
import Link from "next/link";

const DoctorsList = ({
  doctor_id,
  name,
  profile_picture,
  bmdc_number,
  degree,
  regular_fee,
  rating,
  dept_name,
  experience,
}) => {
  return (
    <>
      <div
        key={doctor_id}
        className="doc-info-inner p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition mb-6"
      >
        <div className="single-doc-info flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="profile-left flex gap-4 items-start sm:items-center justify-start w-full md:w-3/5">
            <div>
              <div className="profile-img rounded-md overflow-hidden basis-36 h-36 w-36">
                <Image
                  src={`https://healerspc.sgp1.digitaloceanspaces.com/media/profile_pictures/${profile_picture}`}
                  width={200}
                  height={200}
                  className="object-cover block w-full h-full"
                  alt="picture"
                />
              </div>
              <div className="bottom-part block mt-2 sm:hidden">
                <h4 className="text-[#2F2F2F] text-sm font-normal mb-1">
                  Specialties
                </h4>
                <div className="doc-department">
                  <span className="depart-name bg-primary text-white rounded-md px-1.5 py-1 text-xs">
                    {dept_name}
                  </span>
                </div>
              </div>
            </div>
            <div className="doc-details flex shrink flex-col gap-4 items-start justify-start sm:justify-evenly w-auto">
              <div className="top-part">
                <h3 className="doc-title text-[#2F2F2F] text-xl font-bold">
                  {name}
                </h3>
                <h4 className="doc-degree text-[#2F2F2F] text-sm font-normal flex-wrap">
                  {degree}
                </h4>
              </div>
              <div className="bottom-part hidden sm:block">
                <h4 className="text-[#2F2F2F] text-sm font-normal mb-1">
                  Specialties
                </h4>
                <div className="doc-department">
                  <span className="depart-name bg-primary text-white rounded-md px-1.5 py-1 text-xs">
                    {dept_name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-right-info flex flex-col md:flex-row gap-3 md:gap-6 items-start justify-start md:items-center md:justify-evenly w-full md:w-2/5">
            <div className="doc-r flex flex-row md:flex-col justify-between gap-2">
              <div className="flex flex-col mb-4">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  Total Experience
                </span>
                <span className="text-[#2F2F2F] text-sm font-bold">
                  {experience} Years
                </span>
              </div>
              <div className="flex flex-col mb-4">
                <span className="text-[#2F2F2F] text-sm font-normal">
                  BMDC Number
                </span>
                <span className="text-[#2F2F2F] text-sm font-bold">
                  {bmdc_number}
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
                    {rating}
                  </span>
                </span>
              </div>
            </div>
            <div className="doc-r flex flex-col border-t border-primary md:border-t-0 pt-4 md:pt-0 sm:flex-row md:flex-col gap-2">
              <div className="">
                <h6 className="text-[#2F2F2F] text-base font-normal">
                  Consultation Fee
                </h6>
                <span className="price text-[#2F2F2F] text-sm font-normal">
                  <span className="text-[#2F2F2F] text-3xl font-medium">
                    {regular_fee}Tk
                  </span>{" "}
                  (incl. VAT)
                </span>{" "}
              </div>
              <div className="btn-area mt-2">
                <Link
                  href={`/doctors/profile/${doctor_id}`}
                  className="text-white text-base font-normal flex items-center justify-between px-3 py-1.5  bg-primary rounded-md shadow gap-2 mb-3 hover:bg-[#c955d8] hover:shadow-lg transition"
                >
                  <span>View Profile</span>{" "}
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8333 3.25H2.16667C0.985833 3.29333 0.0433333 4.23583 0 5.41667V20.5833C0.0433333 21.7642 0.985833 22.7067 2.16667 22.75H23.8333C25.0142 22.7067 25.9567 21.7642 26 20.5833V5.41667C25.9801 4.84838 25.7454 4.30879 25.3433 3.9067C24.9412 3.50461 24.4016 3.26994 23.8333 3.25ZM23.8333 20.5833H2.16667V5.41667H23.8333V20.5833ZM15.1667 18.4167V17.0625C15.1667 15.2642 11.5483 14.3542 9.75 14.3542C7.95167 14.3542 4.33333 15.2642 4.33333 17.0625V18.4167H15.1667ZM9.75 7.58333C9.03171 7.58333 8.34283 7.86867 7.83492 8.37659C7.32701 8.8845 7.04167 9.57337 7.04167 10.2917C7.04167 10.6473 7.11172 10.9995 7.24783 11.3281C7.38393 11.6567 7.58343 11.9553 7.83492 12.2067C8.34283 12.7147 9.03171 13 9.75 13C10.1057 13 10.4578 12.9299 10.7864 12.7938C11.115 12.6577 11.4136 12.4582 11.6651 12.2067C11.9166 11.9553 12.1161 11.6567 12.2522 11.3281C12.3883 10.9995 12.4583 10.6473 12.4583 10.2917C12.4583 9.936 12.3883 9.58382 12.2522 9.25523C12.1161 8.92664 11.9166 8.62808 11.6651 8.37659C11.4136 8.12509 11.115 7.9256 10.7864 7.78949C10.4578 7.65339 10.1057 7.58333 9.75 7.58333ZM15.1667 7.58333V8.66667H21.6667V7.58333H15.1667ZM15.1667 9.75V10.8333H21.6667V9.75H15.1667ZM15.1667 11.9167V13H19.5V11.9167H15.1667Z"
                      fill="white"
                    />
                  </svg>
                </Link>
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
    </>
  );
};

export default DoctorsList;

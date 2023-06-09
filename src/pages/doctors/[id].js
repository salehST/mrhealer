import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import useSWRInfinite from "swr/infinite";

import DoctorsList from "../../../components/DoctorsList";

const PAGE_SIZE = 10;
const AvailableDoctors = () => {
 
  const apiUrl = typeof window !== "undefined" ? process.env.API_URL : "";
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.doctors;
  };

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${apiUrl}/profile/doctor/all?dept_id=${id}&all=1&page=${
      pageIndex + 1
    }&limit=${PAGE_SIZE}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const doctors = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd =
    isLoadingMore || (data && data[data.length - 1]?.length < PAGE_SIZE);

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  return (
    <>
      <Head>
        <title>Doctors</title>
      </Head>
      <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 doctors-list bg-pattern">
        <div className="container mx-auto max-w-screen-xl">
          {/* <!-- container start --> */}
          <div className="section-title text-left mb-8">
            <h3 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold w-auto">
              Available Doctors
            </h3>
          </div>
          {error ? (
            // Display an error message if there's an error
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="doctors-info-area">
              {doctors.map((doctors, index) => {
                const {
                  doctor_id,
                  name,
                  profile_picture,
                  bmdc_number,
                  degree,
                  regular_fee,
                  rating,
                  dept_name,
                  experience,
                } = doctors;
                return (
                  <DoctorsList
                    key={index}
                    doctor_id={doctor_id}
                    name={name}
                    profile_picture={profile_picture}
                    bmdc_number={bmdc_number}
                    degree={degree}
                    regular_fee={regular_fee}
                    rating={rating}
                    dept_name={dept_name}
                    experience={experience}
                  />

                  
                );
              })}
            </div>
            
          )}
         {!isReachingEnd && (
            <div className="text-center">
              <button
                className="bg-primary hover:bg-[#26b024] text-white font-normal duration-300 transition  my-2 py-2 px-4 rounded-md shadow hover:shadow-md"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? "Loading..." : "Show More Doctors"}
              </button>
            </div>
          )}
          <Link
            href={"/departments"}
            className="arrow-btn-back text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 flex justify-center md:justify-end underline my-8"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="relative right-2 transition h-5 w-5 rotate-180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0833 14.3957C10.9166 14.229 10.8366 14.0276 10.8433 13.7915C10.85 13.5554 10.9369 13.354 11.1041 13.1873L13.4583 10.8332H4.16665C3.93054 10.8332 3.73248 10.7532 3.57248 10.5932C3.41248 10.4332 3.33276 10.2354 3.33332 9.99984C3.33332 9.76373 3.41332 9.56567 3.57332 9.40567C3.73332 9.24567 3.93109 9.16595 4.16665 9.1665H13.4583L11.0833 6.7915C10.9166 6.62484 10.8333 6.42678 10.8333 6.19734C10.8333 5.96789 10.9166 5.77011 11.0833 5.604C11.25 5.43734 11.448 5.354 11.6775 5.354C11.9069 5.354 12.1047 5.43734 12.2708 5.604L16.0833 9.4165C16.1666 9.49984 16.2258 9.59011 16.2608 9.68734C16.2958 9.78456 16.313 9.88873 16.3125 9.99984C16.3125 10.1109 16.295 10.2151 16.26 10.3123C16.225 10.4096 16.1661 10.4998 16.0833 10.5832L12.25 14.4165C12.0972 14.5693 11.9064 14.6457 11.6775 14.6457C11.4486 14.6457 11.2505 14.5623 11.0833 14.3957Z"
                fill="#B64EC3"
              ></path>
            </svg>{" "}
            Back to all departments
          </Link>
        </div>
      </section>
    </>
  );
};

export default AvailableDoctors;

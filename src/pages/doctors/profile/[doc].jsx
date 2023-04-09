import Axios from "axios";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import DoctorInfo from "../../../../components/DoctorInfo";
import InfoShimmer from "../../../../components/DoctorInfo/InfoShimmer";

const DoctorProfile = () => {
  // console.log("token "+ process.env.API_TOKEN);
  
  
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXRpZW50X2lkIjoxMTMsIm5hbWUiOiJQaGVuaXgiLCJwaG9uZSI6IjAxNzA3MDc4NjM3IiwiZW1haWwiOiJhYmR1cjEwMTE3QGdtYWlsLmNvbSIsImJpcnRoZGF5IjoiMTk5NS0wNi0xNSIsInNleCI6Im1hbGUiLCJ3ZWlnaHQiOiI2NCIsImJsb29kX2dyb3VwIjoiTygrdmUpIiwiYWRkcmVzcyI6IkRoYWthIiwiYWNjb3VudF9zdGF0dXMiOiJhY3RpdmUiLCJwcm9maWxlX3BpY3R1cmUiOiJwYXRpZW50XzA0Mjc2NjRkOWMzNDA1YWJkODUxMzllZTc2NDQyNzBkLmpwZyIsImRldmljZV90b2tlbiI6ImQ3ZWVlNGNmYWVlMTk3ZmMiLCJmY21fdG9rZW4iOiJjMDd6T0tSWlF6aUJZb2llak4zdkQtOkFQQTkxYkZ2U25DanF1czlTei1UeVFYczBQTEpIR1M2Tjdzczd6M3c1X3JKWndzMU5iODgwTmI5T0NMN0NlUmU5Z200OWZ1cERINjFfUHAyR1BhLXAyZDdGYlN3MVVXQnM0NVhHWWNRQlJUY2I5ZUhSOXpuck5JTkExSkppejV5VXJQRmRWUDNkdWtzIiwiYmFubmVkIjowLCJ1c2VyVHlwZSI6InBhdGllbnQiLCJpYXQiOjE2NzkyMzI2NzUsImV4cCI6MTgzNDc1MjY3NX0.5flWhLIj0pP1bPfGrAKaV6h8NXsQM9siAB0fzJyYtAU";
  
  // const token = process.env.API_TOKEN;

  const axiosInstance = Axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(axiosInstance.defaults.headers);
  const router = useRouter();
  const { doc } = router.query;
  const [myData, setData] = useState(null);
  const [myDataB, setDataB] = useState(null);
  const [myDataC, setDataC] = useState(null);
  const [myDataD, setDataD] = useState(null);

  const apiUrl = typeof window !== "undefined" ? process.env.API_URL : "";
  useEffect(() => {
    if (doc) {
      axiosInstance
        .get(`${apiUrl}/profile/doctor/${doc}/info`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.data);
        });

      axiosInstance
        .get(`${apiUrl}/review/doctor/${doc}`)
        .then((res) => {
          setDataB(res.data);
        })
        .catch((err) => {
          console.log(err.data);
        });

      axiosInstance
        .get(`${apiUrl}/profile/${doc}/educations`)
        .then((res) => {
          setDataC(res.data);
        })
        .catch((err) => {
          console.log(err.data);
        });

      axiosInstance
        .get(`${apiUrl}/profile/${doc}/experiences`)
        .then((res) => {
          setDataD(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  }, [doc]);
  return (
    <>
      <Head>
        <title>Doctor's Profile</title>
      </Head>
      <div>
        {myData && myDataB && myDataC && myDataD ? (
          <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 doctors-list bg-pattern">
            <div className="container mx-auto max-w-screen-xl relative overflow-hidden">
              {/* <!-- container start --> */}

              <DoctorInfo
                doctor={myData.doctor}
                review={myDataB.foundReviews}
                educations={myDataC.educations}
                experiences={myDataD.experiences}
              />
            </div>
          </section>
        ) : (
          <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 doctors-list bg-pattern">
            <div className="container mx-auto max-w-screen-xl relative overflow-hidden">
              {/* <!-- container start --> */}
              <InfoShimmer />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DoctorProfile;

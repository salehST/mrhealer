import Axios from "axios";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import DepartmentsApi from "../../../components/Departments";

export default function Departments() {
  const apiUrl = typeof window !== "undefined" ? process.env.API_URL : "";
  const [myData, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    Axios.get(`${apiUrl}/admin/department/all`)
      .then((res) => {
        setData(res.data.departments);
      })
      .catch((err) => {
        console.log(err.data);
        setError("An error occurred while fetching data.");
      });
  }, []);
  return (
    <>
      <Head>
        <title>Departments</title>
      </Head>
      <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 departments bg-pattern">
        <div className="container mx-auto max-w-screen-xl">
          {/* <!-- container start --> */}
          <div className="section-title center-title text-center mb-8">
            <h3 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold  mx-auto w-auto">
              all departments
            </h3>
          </div>
          {error ? (
            // Display an error message if there's an error
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {myData.map((el, index) => {
                const { dept_id, dept_name, image, dept_desc } = el;
                return (
                  <DepartmentsApi
                    key={index}
                    dept_id={dept_id}
                    dept_name={dept_name}
                    image={image}
                    dept_desc={dept_desc}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

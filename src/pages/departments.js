
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Departments(){
  const [myData, setData] = useState([]);
  useEffect(() => {
      Axios.get('https://mrhealerbd.com/api/v1/admin/department/all').then((res) =>{
          setData(res.data);
      }); 
  },[]);
  const objData = Object.entries(myData);
  let allData = []
  for (let value of Object.values(objData)) {
     allData = Object.entries(value)[1][1];    
  }
  return (
    <>
    <Head>
      <title>Departments</title>
    </Head>
    <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 departments strip-top">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
            <div className="section-title center-title text-center mb-8">
                <h3 className='capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold  mx-auto w-auto'>all departments</h3>
            </div>
            <div className="grid gid-cols-1 md:grid-cols-2 gap-7">
            { allData.map((el, index) => {
                        const {dept_id, dept_name, image, dept_desc} = el
                        return  ( 
                          <>
                          <a href="https://play.google.com/store/apps/details?id=com.healer.patient" target={"_blank"}>
                    <div key={index} id={dept_id} className="single-department bg-white p-6 rounded-md shadow-md hover:shadow-lg">
                      <div className="inner-info flex gap-4 items-center justify-start">
                          <Image lazy src={`https://healerspc.sgp1.digitaloceanspaces.com/media/departments/${image}`} alt="icon" width={150} height={150} className="h-36 w-36" />
                          <div className="d-detail">
                            <h3 className="title text-xl text-primary font-semibold pb-2">
                                {dept_name}
                            </h3>
                            <p className="text-sm text-black font-normal">
                                {dept_desc}
                            </p>
                          </div>
                      </div>
                    </div>
                    </a>
                    </>
                       )
                      })  
             }
            </div>
          </div>
    </section>
    </>
  )

}

// import React from 'react'

// const Departments = () => {
//   return (
//     <div>departments</div>
//   )
// }

// export default Departments

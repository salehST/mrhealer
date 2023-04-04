import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import uniqid from 'uniqid'

let id = uniqid();
const DepartmentsApi = ({dept_id, dept_name, image, dept_desc}) => {
  return (
    <>
        <Link href={`/doctors/${dept_id}`} >
                <div className="single-department bg-white p-6 rounded-md shadow-md hover:shadow-lg">
                      <div className="inner-info flex gap-4 items-center justify-start">
                          <Image src={`https://healerspc.sgp1.digitaloceanspaces.com/media/departments/${image}`} alt="icon" width={150} height={150} className="h-36 w-36" />
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
        </Link>
    </>
  )
}

export default DepartmentsApi
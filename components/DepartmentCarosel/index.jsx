import React from "react";
import Link from "next/link";
import Image from "next/image";

const DepartmentCarousel = ({ dept_id, image, dept_name }) => {
  return (
    <Link href={`/doctors/${dept_id}`}>
      <div className="department-info bg-white shadow-md rounded-md hover:shadow-lg transition p-5 text-center">
        <Image
          src={`https://healerspc.sgp1.digitaloceanspaces.com/media/departments/${image}`}
          height={150}
          width={150}
          className=" h-36 w-36 drop-shadow-md"
          alt="icon"
        />
        <h4 className="text-[#B64EC3] text-base md:text-xl font-normal capitalize">
          {dept_name}
        </h4>
      </div>
    </Link>
  );
};

export default DepartmentCarousel;

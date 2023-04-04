import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter();
  return (
  
    <div className="bg-white w-full p-4 font-poppins">
      <div className="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-0 ">
        {/* <!-- container start --> */}
        <nav id="nav"
          className="flex-no-wrap relative flex w-full items-center justify-between  lg:flex-wrap lg:justify-start"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between">
          

            {/* <!-- left elements start --> */}
            <div className="relative flex items-center">
                <Link href={'/'} className="mt-2 mr-2 flex items-center lg:mt-0 cursor-pointer">
                        <Image
                        src="/img/header-logo.svg"
                        alt=""
                        width={190}
                        height={50}
                        className=" w-auto h-12"
                        />
                </Link>
            </div>
            {/* <!-- left elements end --> */}

            {/* <!-- Right elements start --> */}
            <button
              className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div className="!visible hidden flex-grow basis-[100%] justify-end items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1"
              data-te-collapse-item>
              {/* <!-- links --> */}
                <ul
                    className="list-style-none flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref
                >
                    <li className="lg:pr-4" data-te-nav-item-ref>
                        <Link scroll={false}
                            className={router.pathname == "/" ? " active-page" : ""}
                            href={'/'}
                            data-te-nav-link-ref
                        >
                            Home
                        </Link>
                    </li>
                    <li className="lg:pr-4" data-te-nav-item-ref>
                        <Link scroll={false}
                            className={router.pathname == "/departments" ? " active-page" : ""}
                            href={'/departments'}
                            data-te-nav-link-ref
                        >
                            departments
                        </Link>
                    </li>
                    <li className="lg:pr-4" data-te-nav-item-ref>
                        <Link scroll={false}
                            className={router.pathname == "/#service" ? " active-page" : ""}
                            href={'/#service'}
                            data-te-nav-link-ref
                        >
                            services
                        </Link>
                    </li>
                    <li className="lg:pr-4" data-te-nav-item-ref>
                        <Link scroll={false}
                            className={router.pathname == "/#getDoctor" ? " active-page" : ""}
                            href={'/#getDoctor'}
                            data-te-nav-link-ref
                        >
                            get a doctor
                        </Link>
                    </li>
                    <li className="lg:pr-4" data-te-nav-item-ref>
                        <Link scroll={false}
                            className="text-black capitalize"
                            href={'/'}
                            data-te-nav-link-ref
                        >
                            for doctor
                        </Link>
                    </li>
                    <li className="lg:pr-0" data-te-nav-item-ref>
                        <Link scroll={false}
                            className={router.pathname == "/#contact" ? " active-page" : ""}
                            href={'/#contact'}
                            data-te-nav-link-ref
                        >
                            contact us
                        </Link>
                    </li>
                </ul>
              {/* <!-- links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
              {/* <!-- Right elements end --> */}
          </div>
        </nav>
      </div> {/* <!-- container end --> */}
    </div>
  );
};

export default Navbar;

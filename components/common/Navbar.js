import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  // const [open, setOpen] = useState(false)

  // const handleClick = () => {
  //   setOpen(false);
  // };
//   function closeAllSelect(elmnt) {
//     var x, y, i, arrNo = [];
//     x = document.getElementsByClassName("select-items");
//     y = document.getElementsByClassName("select-selected");
//     for (i = 0; i < y.length; i++) {
//         if (elmnt == y[i]) {
//             arrNo.push(i)
//         } else {
//             y[i].classList.remove("select-arrow-active");
//         }
//     }
//     for (i = 0; i < x.length; i++) {
//         if (arrNo.indexOf(i)) {
//             x[i].classList.add("select-hide");
//         }
//     }
// }
// document.addEventListener("click", closeAllSelect);

const [showMenu, setShowMenu] = useState(false);

const handleMenuClick = () => {
  setShowMenu(!showMenu);
};

const handleLinkClick = () => {
  setShowMenu(false);
};

  return (
    <div className="bg-white w-full p-4 font-poppins">
      <div className="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-0 ">
        {/* <!-- container start --> */}
        <nav
          id="nav"
          className="flex-no-wrap relative flex w-full items-center justify-between  lg:flex-wrap lg:justify-start"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between">
            {/* <!-- left elements start --> */}
            <div className="relative flex items-center">
              <Link
                href={"/"}
                className="mt-2 mr-2 flex items-center lg:mt-0 cursor-pointer"
              >
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
              className="!block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:!hidden second-button"
              type="button"
              data-te-collapse-init
              id="navbarSupportedContent1"
              data-te-target="#navbarSupportedContent1"
              aria-expanded="false"
              onClick={handleMenuClick}
            >
              
              <div className={`animated-icon2 ${showMenu ? 'open' : ''}`}><span></span><span></span><span></span><span></span></div>
              
            </button>
            <div
              className={`menu-item ${
                showMenu ? "show-menu" : ""
              } hidden flex-grow basis-[100%] justify-end items-center lg:!flex lg:basis-auto`}
              id="navbarSupportedContent1"
              data-te-collapse-item
            >
              {/* <!-- links --> */}
              
              <ul
                className="list-style-none flex flex-col pl-0 lg:flex-row"
                aria-labelledby="navbarSupportedContent1"
                data-te-navbar-nav-ref
              >
                <li className="lg:pr-4 menu-links" data-te-nav-item-ref>
                  <Link
                    scroll={false}
                    className={router.pathname == "/" ? " active-page" : ""}
                    href={"/"}
                    data-te-nav-link-ref
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="lg:pr-4 menu-links" data-te-nav-item-ref>
                  <Link
                    scroll={false}
                    className={
                      router.pathname == "/departments" ? " active-page" : ""
                    }
                    href={"/departments"}
                    data-te-nav-link-ref
                    onClick={handleLinkClick}
                  >
                    departments
                  </Link>
                </li>
                <li className="lg:pr-4 menu-links" data-te-nav-item-ref>
                  <Link
                    scroll={false}
                    className={
                      router.pathname == "/#service" ? " active-page" : ""
                    }
                    href={"/#service"}
                    data-te-nav-link-ref
                    onClick={handleLinkClick}
                  >
                    services
                  </Link>
                </li>
                <li className="lg:pr-4 menu-links" data-te-nav-item-ref>
                  <Link
                    scroll={false}
                    className={
                      router.pathname == "/#getDoctor" ? " active-page" : ""
                    }
                    href={"/#getDoctor"}
                    data-te-nav-link-ref
                    onClick={handleLinkClick}
                  >
                    get a doctor
                  </Link>
                </li>
                <li className="lg:pr-4 menu-links" data-te-nav-item-ref>
                  <Link
                    scroll={false}
                    className="text-black capitalize"
                    href={"/"}
                    data-te-nav-link-ref
                    onClick={handleLinkClick}
                  >
                    for doctor
                  </Link>
                </li>
                <li className="lg:pr-0 menu-links" data-te-nav-item-ref>
                  <Link
                    scroll={false}
                    className={
                      router.pathname == "/#contact" ? " active-page" : ""
                    }
                    href={"/#contact"}
                    data-te-nav-link-ref
                    onClick={handleLinkClick}
                    
                  >
                    contact us
                  </Link>
                </li>
              </ul>
              </div>
              {/* <!-- links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
            {/* <!-- Right elements end --> */}
        </nav>
      </div>{" "}
      {/* <!-- container end --> */}
      <style jsx>{`
        .hamburger-menu {
          display: none;
        }
        @media only screen and (max-width: 767px) {
          .hamburger-menu {
            display: block;
          }
          .show-menu {
            display: block;
          }
        }
      `}</style>
    </div>
    
  );
};

export default Navbar;
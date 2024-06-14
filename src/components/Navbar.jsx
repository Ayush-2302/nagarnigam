"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Lodgecomplaint from "./Lodgecomplaint";
import { newContext } from "@/context/contextFun";
import { garbageCollectorLogout } from "@/helper/apiservices/garbageCollectorService";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { garbageUser, setGarbageUser } = useContext(newContext);
  const router = useRouter();

  console.log(garbageUser, "navbar");

  const handleLogout = async () => {
    try {
      const result = await garbageCollectorLogout();
      console.log(result);
      if (result.success == true) {
        router.push("/login");
        setGarbageUser(undefined);
      }
    } catch (error) {
      console.log(error);
      toast.error("logout error");
    }
  };
  return (
    <div>
      <div className=" bg-slate-100 grid grid-cols-2 lg:grid-cols-3 p-2">
        <div className="w-full h-auto font-mono font-bold  bg-slate-100 text-primary flex justify-center space-x-2 lg:space-x-5 items-center">
          <div className="flex text-wrap text-center text-2xl md:text-3xl justify-normal lg:justify-center w-1/2 md:w-auto">
            <p>नगर पालिका नूरपुर</p>
          </div>

          <div className="w-auto h-full flex ">
            <Image
              className=""
              src="/Seal_of_Uttar_Pradesh.svg"
              width={100}
              height={60}
            />
          </div>
        </div>

        <div className="w-full   flex justify-center items-center  ">
          <Image
            className=" w-40 h-20"
            src="/flag.gif"
            width={70}
            height={70}
          />
        </div>
        <div className="hidden lg:flex  justify-center space-x-10 m-5 ">
          <Image src="/swachh-bharatlogo.png" width={120} height={80} />
          <Image src="/azadi-mahotsav.png" width={120} height={80} />
        </div>
      </div>
      <nav className=" bg-primary border-gray-200 ">
        <div className=" flex flex-wrap items-center justify-center lg:justify-between  mx-4 p-3">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-primary ">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-black md:text-white md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-black md:p-0"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-black md:p-0"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/barcodegen"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-black md:p-0"
                >
                  Check Status
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-black md:p-0"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:border-0 md:hover:text-black md:p-0"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex ml-0 mt-4 md:mt-2 xl:ml-40">
            <ul className="mx-5">
              {/* <!-- Modal toggle --> */}
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="block text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button"
              >
                Lodge Complaint
              </button>

              <Lodgecomplaint />
            </ul>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="bg-white hover:bg-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Collector
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/garbagecollectordash"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                {garbageUser ? (
                  <li
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/login"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

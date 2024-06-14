import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import React from "react";
const QuickLinks = () => {

  return (
    <>
      {/* Vertical content */}
      <div className="w-4/5 mx-auto p-4">
        <h2 className="text-primary font-bold text-2xl text-center mb-2">
          QUICK LINKS
        </h2>
        <hr className="w-1/2 mx-auto mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150 duration-500">
              <i className="fa fa-ambulance mr-2" aria-hidden="true"></i> Ambulance
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150  duration-500">
              <i className="fa fa-tint mr-2" aria-hidden="true"></i> Blood Bank
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150  duration-500">
              <i className="fa fa-pills mr-2" aria-hidden="true"></i> Chemist
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150  duration-500">
              <i className="fa fa-lightbulb mr-2" aria-hidden="true"></i> Electricity
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150  duration-500">
              <i className="fa fa-eye mr-2" aria-hidden="true"></i> Eye Hospital
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150  duration-500">
              <i className="fa fa-fire mr-2" aria-hidden="true"></i> Fire Brigade 
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150  duration-500">
              <i className="fa fa-hospital mr-2" aria-hidden="true"></i> Hospitals
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150 duration-500">
              <i className="fa fa-shield-alt mr-2" aria-hidden="true"></i> Police
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center bg-white border p-4 hover:bg-activetabs hover:text-white cursor-pointer transition ease-in-out delay-150 duration-500">
              <i className="fa fa-info-circle mr-2" aria-hidden="true"></i> About Gorakhpur
            </div>
          </Link>
        </div>
      </div>
      {/* Horizontal content can go here */}
    </>
  );
};

export default QuickLinks;

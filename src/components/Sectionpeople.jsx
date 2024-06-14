import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "माननीय मुख्यमंत्री (उत्तर प्रदेश)",
    imgSrc: "/team-1-1.jpg",
    alt: "Chief Minister",
    name: "योगी आदित्यनाथ",
  },
  {
    title: "माननीय नगर विकास मंत्री",
    imgSrc: "/ak_sharma001.Jpg",
    alt: "Mayor",
    name: "श्री अरविंद कुमार शर्मा",
  },
  {
    title: "नगर पालिका अध्यक्ष",
    imgSrc: "/m2.jpg",
    alt: "Municipal Commissioner",
    name: "श्डॉ.महेंद्र प्रताप सिंह",
  },
  {
    title: "नगर पालिका कार्यकारी अधिकारी",
    imgSrc: "/m1.jpg",
    alt: "Municipal Commissioner",
    name: "श्संतोष कुमार मिश्रा",
  },
];

function Sectionpeople() {
  return (
    <>
      <h1 className="mt-5 text-primary font-bold uppercase text-2xl text-center mb-4">Members</h1>
      <hr className=" mb-5 w-1/2 mx-auto" />

      <div className="bg-slate-100 p-10 flex justify-center items-center flex-col md:flex-row h-auto space-y-4 md:space-y-0 md:space-x-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="section h-auto md:h-96 overflow-y-auto w-full md:w-1/4 flex flex-col justify-center items-center bg-white rounded-md shadow-lg"
          >
            <div className="h-20 text-red-700 flex justify-center items-center">
              <h1 className="border-b-2 font-bold border-slate-300 pb-2 text-base">
                {section.title}
              </h1>
            </div>
            <div>
              <Image
                className="h-56 w-56 object-cover hover:border-2 rounded-md"
                src={section.imgSrc}
                alt={section.alt}
                width={400}
                height={400}
              />
            </div>
            <div className="h-20  flex justify-center items-center">
              <h4 className="text-lg font-bold">{section.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sectionpeople;

// this section is made by Prashant
import Link from "next/link";
import React from "react";

const MarqueeTag = () => {
  const data = [
    {
      info: "MCD Rates and tariffs levied for various licenses.",
      new: true,
    },
    {
      info: "Townhall Journal (English).",
      new: false,
    },
    {
      info: "Townhall Journal (Hindi).",
      new: true,
    },
    {
      info: "Schedule of levy of Municipal Taxes, Rate and Cesses for FY 2024-25.",
      new: true,
    },
    {
      info: "Townhall Journal (Tamil).",
      new: true,
    },
  ];
  return (
    <div className="bg-secondary h-16 w-full flex justify-between items-center font-bold px-6">
      <Link
        href="https://wa.me/+916204435048"
        target="_blank"
        className="bg-white text-center w-1/6 text-sm py-2 rounded "
      >
        Chat to Whatsapp
      </Link>
      <marquee className="space-x-10 w-3/6 text-base text-white uppercase">
        {data.map((d, i) => (
          <span key={i}>
            {d.new ? (
              <sup className="bg-red-600 text-white text-xs px-2">new</sup>
            ) : (
              <></>
            )}
            &nbsp;
            {d.info}
          </span>
        ))}
      </marquee>
      <Link
        href="tel:+1234567890"
        target="_blank"
        className="bg-white text-center w-1/6 text-sm py-2 rounded "
      >
        Call on Number
      </Link>
    </div>
  );
};

export default MarqueeTag;

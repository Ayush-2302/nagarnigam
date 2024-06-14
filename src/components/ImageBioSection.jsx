import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageBioSection = () => {
  const YOGIJI = "/YOGIADITYANATH.jpg";
  const YodiModi = "/Chiefminister.webp";
  return (
    <>
      <section className=" flex-col flex justify-center items-center sm:flex-row sm:h-[34.5vw] space-x-2">
        <article className="h-1/2 w-full flex sm:justify-start items-center flex-col gap-2 sm:h-full sm:w-1/5">
          <Link
            href="#"
            className="h-4/6 w-4/5 bg-blue-100 rounded flex justify-center items-center sm:w-4/5 sm:h-2/4 sm:mt-2 p-1"
            title="SHRI YOGI ADITYANATH"
          >
            <Image
              className="h-5/6 w-1/4 sm:h-full sm:w-full rounded"
              src={YOGIJI}
              alt="YOGIADITYANATH IMAGE"
              width={300}
              height={300}
            />
          </Link>
          <div className="text-primary font-bold h-2/6 text-lg flex justify-center items-center flex-col sm:leading-5 text-center sm:text-base">
            <span>SHRI YOGI ADITYANATH</span>
            <span className="font-bold text-primary">CHIEF MINISTER</span>
          </div>
        </article>

        <Link
          href="#"
          className="h-1/2 w-full flex justify-center items-center sm:h-[100%] sm:w-4/5 p-2"
          title="Vikalp an Alternative to Plastic Bags"
        >
          <Image
            src={YodiModi}
            alt="YodiModi IMAGE"
            width={1000}
            height={600}
            className="h-full w-full"
          />
        </Link>
      </section>
    </>
  );
};

export default ImageBioSection;

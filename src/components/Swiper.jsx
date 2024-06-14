"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
export default function App() {
  const items = [
    // "/banner1.jpg",
    "/banner3.jpg",
    "/banner2.jpg",
    // Add more image paths as needed
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        preloadImages={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" relative w-full h-60 sm:h-80 md:h-96 lg:h-[60vh] xl:h-[60vh]">
              <Image
                src={item}
                alt={`banner image`}
                fill
                objectPosition="center"
                objectFit="cover"
                className="  object-cover object-center rounded-md transition-transform duration-100 ease-in-out transform"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

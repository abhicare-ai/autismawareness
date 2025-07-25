"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import banerimg from "@/assets/2025_20th-Annv_hero-alt.jpg";
export default function BannerSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-[120%] right-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 text-4xl text-gray-700 hover:text-black md:top-[110%]"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute top-[120%] left-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 text-4xl text-gray-700 hover:text-black md:top-[110%]"
      >
        ❯
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        pagination={{
          type: "fraction",
        }}
        onInit={(swiper) => {
          if (
            typeof swiper.params.navigation === "object" &&
            swiper.params.navigation !== null
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className="text-card"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative cursor-grab">
          <Image src={banerimg} alt="banerimg" className="w-full"/>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative cursor-grab">
          <Image src={banerimg} alt="banerimg" className="w-full"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import banerimg1 from "@/assets/rajverr_banner-3.png";
import banerimg2 from "@/assets/WhatsApp Image 2025-07-29 at 14.46.36_df698a28.jpg";
import banerimg3 from "@/assets/WhatsApp Image 2025-07-29 at 14.56.01_da0b5eff.jpg";
import banerimg4 from "@/assets/WhatsApp Image 2025-07-29 at 15.26.15_d448b2cd.jpg";
export default function BannerSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);



  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}

      <div
        ref={prevRef}
        className="absolute top-[120%] right-[51%] z-10 hidden h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-blue-200 text-4xl text-gray-700 hover:text-black md:top-[110%] md:flex"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute top-[120%] left-1/2 z-10 hidden h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-blue-200 text-4xl text-gray-700 hover:text-black md:top-[110%] md:flex"
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
        <SwiperSlide className="relative cursor-grab">
          <video
        
            src="/vido.mp4"
            autoPlay
            // muted
            loop
            controls
            playsInline
            className="h-[500px] shadow-lg mx-auto"
          />
        
        </SwiperSlide>
        {/* Slide 1 */}
        <SwiperSlide className="relative cursor-grab">
          <Image
            src={banerimg1}
            alt="banerimg"
            className="h-[500px] object-cover md:h-full"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative cursor-grab">
          <Image
            src={banerimg2}
            alt="banerimg"
            className="h-[500px] w-full object-cover md:h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="relative cursor-grab">
          <Image
            src={banerimg3}
            alt="banerimg"
            className="h-[500px] w-full object-cover md:h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="relative cursor-grab">
          <Image
            src={banerimg4}
            alt="banerimg"
            className="h-[500px] w-full object-cover md:h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/bg.jpg",
    title: "It’s Easy To Find Us",
    desc: "Located at The Bencoolen, U-Credit is one of the most convenient licensed moneylenders in central Singapore.",
  },
  {
    image: "/bg.jpg",
    title: "Fast & Reliable Services",
    desc: "Experience quick approvals and flexible repayment options designed around your needs.",
  },
  {
    image: "/bg.jpg",
    title: "We’re Here For You",
    desc: "Our professional team ensures transparency and reliability in every loan service we provide.",
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-screen h-[80vh] overflow-hidden">
      <svg
        viewBox="0 0 1512 796"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ✅ Define the clipping path */}
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.000661, 0.001256)" // (1/1512, 1/796) normalize to [0–1]
              d="M0 0H1512V623.168C1512 623.168 1309.27 796 730.19 796C225.251 796 0 623.168 0 623.168V0Z"
            />
          </clipPath>
        </defs>

        {/* 🖼️ Use the clip path for foreignObject */}
        <foreignObject
          x="0"
          y="0"
          width="1512"
          height="796"
          clipPath="url(#heroClip)"
        >
          <div className="h-full w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              className="h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative flex h-full items-center justify-start bg-cover bg-center px-8 text-white"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D1525]/80 to-transparent" />
                    <div className="relative z-10 max-w-xl">
                      <h1 className="text-5xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-lg mb-6">{slide.desc}</p>
                      <button className="bg-[#E61E4D] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#ff3463] transition">
                        Secure Loan Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default HeroSection;

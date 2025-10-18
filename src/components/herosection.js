"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    image: "/bg.jpg",
    title: (
      <>
        <span className="text-[#FFDADD]">Singapore’s</span>{" "}
        Most Trusted Licensed Money Lender
      </>
    ),
    desc: "U-Credit is a licensed money lender in Singapore, providing legal and transparent loans with no hidden fees.",
  },
  {
    image: "/bg.jpg",
    title: (
      <>
        <span className="text-[#FFDADD]">Fast, Safe &</span>{" "}
        Transparent Loan Solutions
      </>
    ),
    desc: "We make borrowing simple, secure, and stress-free — approved in minutes with clear terms.",
  },
  {
    image: "/bg.jpg",
    title: (
      <>
        <span className="text-[#FFDADD]">Your Trusted</span>{" "}
        Financial Partner in Singapore
      </>
    ),
    desc: "Experience peace of mind with our reliable lending services and customer-first approach.",
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[80vh] sm:min-h-[796px]">
      {/* SVG ClipPath for Curved Bottom */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.000661, 0.001256)"
              d="M0 0H1512V623.168C1512 623.168 1309.27 796 730.19 796C225.251 796 0 623.168 0 623.168V0Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Background Swiper with curved clip-path */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{ clipPath: "url(#curveClip)" }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[80vh] sm:h-[796px] flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt="Hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[70%_center] sm:object-center w-full h-full"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D1525]/95 to-transparent z-[1]" />

                {/* Text Content */}
                <div className="relative z-[2] hero-text flex flex-col justify-center gap-4 sm:gap-6 text-center sm:text-left px-6 sm:px-12 lg:px-20">
                  <h1 className="text-white font-dm-sans text-[26px] sm:text-[44px] md:text-[56px] font-extrabold leading-tight hero-heading">
                    {slide.title}
                  </h1>
                  <p className="text-white font-dm-sans text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed opacity-90 hero-desc">
                    {slide.desc}
                  </p>

                  <div className="flex justify-center sm:justify-start">
                    <button
                      onClick={() => {
                        const section = document.getElementById("loan-calculator");
                        if (section)
                          section.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-[40vh] cursor-pointer flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-lg border border-[#F2004F] bg-white hover:bg-[#FDE7ED] transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                      >
                        <path
                          d="M2 1.5L8 8L2 14.5"
                          stroke="url(#paint0_linear_27_266)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_27_266"
                            x1="2.5"
                            y1="14.5"
                            x2="2.9"
                            y2="1.4"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F2004F" />
                            <stop offset="1" stopColor="#F30000" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <span className="font-dm-sans text-[16px] sm:text-[18px] font-medium bg-gradient-to-r from-[#F2004F] to-[#F30000] bg-clip-text text-transparent">
                        Apply Loan Securely
                      </span>
                    </button>
                  </div>
                </div>

                {/* Sticker (Hidden on small screens) */}
                <div className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2 z-[2]">
                  <Image
                    src="/sticker.png"
                    alt="Apply with Singpass"
                    width={120}
                    height={120}
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;

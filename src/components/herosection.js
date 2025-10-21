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
  <span className="text-[#FFDADD]">Singapore’s <span className="!text-white">Most</span></span>
  <br />
  <span>Trusted Licensed</span>
  <br />
  <span>Money Lender</span>
</>

    ),
    descMobile:
      "U-Credit is a <b>licensed money lender in</br> Singapore,</b> providing legal and transparent</br> loans with <b>no hidden fees.</b>",
    descDesktop:
      "U-Credit is a <b>licensed money lender in Singapore,</b> providing legal</br> and transparent loans with <b>no hidden fees.</b>",
  },
  {
    image: "/bg.jpg",
    title: (
      <>
        It’s Easy To <br />
        <span className="text-[#FFDADD]">Find Us</span>
      </>
    ),
    descMobile:
      "Located at <b>The Bencoolen</b>, U-Credit is one of<br> the most convenient licensed moneylenders<br> in central Singapore, just minutes from <b>Bugis<br> MRT (EW12/DT14)</b>, <b>Bencoolen MRT (DT21)</b>, and<br> <b>Bras Basah MRT (CC2)</b>.",
    descDesktop:
      "Located at <b>The Bencoolen</b>, U-Credit is one of the most convenient licensed</br> moneylenders in central Singapore, just minutes from <b>Bugis MRT (EW12/DT14)</b>,</br> <b>Bencoolen MRT (DT21)</b>, and <b>Bras Basah MRT (CC2)</b>.",
  },
  {
    image: "/bg.jpg",
    title: (
  <>
  <span>Enjoy Expert advice</span>
  <br />
  <span>
    & <span className="text-[#FFDADD]">Affordable Rates</span>
  </span>
</>


    ),
    descMobile:
      "With <b>years of experience</b> in the</br> <b>moneylending sector</b>, we know best how to</br> <b>help our clients.</b>",
    descDesktop:
      "With <b>years of experience</b> in the <b>moneylending sector</b>, we know best</br> how to <b>help our clients.</b>",
  },
];


const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[102vh] sm:min-h-[796px]">
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
              <div className="relative h-[102vh] sm:h-[796px] flex items-start justify-start overflow-hidden">
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
                <div className="relative z-[2] flex flex-col gap-4 sm:gap-6 sm:text-left w-full pl-6 sm:pl-20 pt-[154px] sm:pt-[115px]">
                  <h1 className="text-white font-dm-sans text-[26px] sm:text-[44px] md:text-[56px] font-extrabold leading-tight hero-heading">
                    {slide.title}
                  </h1>
              <p
  className="block md:hidden text-white font-dm-sans text-[16px] leading-relaxed opacity-90"
  dangerouslySetInnerHTML={{ __html: slide.descMobile }}
/>

{/* Desktop Description */}
<p
  className="hidden md:block text-white font-dm-sans text-[20px] leading-relaxed opacity-90"
  dangerouslySetInnerHTML={{ __html: slide.descDesktop }}
/>


                  {/* ✅ Button Restored */}
                  <div className="flex sm:justify-start mt-4 sm:mt-6">
                  <button
  onClick={() => {
    const section = document.getElementById("loan-calculator");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    w-auto cursor-pointer flex items-center justify-center gap-2
    py-3 px-5              /* Small screens: 12px 20px */
    sm:py-4 sm:pr-6 sm:pl-7 /* Large screens: 16px 24px 16px 28px */
    rounded-lg border border-[#F2004F]
    bg-white hover:bg-[#FDE7ED] transition-all duration-300
  "
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

 <span
  className="
    font-dm-sans font-medium
    text-[16px] sm:text-[20px]    /* 16px → 20px */
    leading-6 sm:leading-7        /* 24px → 28px */
    bg-gradient-to-r from-[#F2004F] to-[#F30000]
    bg-clip-text text-transparent
  "
>
  Apply Loan Securely
</span>

</button>

                  </div>
                </div>

                {/* Sticker (Fixed on screen) */}
                {/* <div className="hidden md:block fixed right-[5%] top-1/2 -translate-y-1/2 z-[50]">
                  <img
                    src="/sticker.png"
                    alt="Apply with Singpass"
                    className="drop-shadow-xl w-25 h-35.5"
                  />
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;

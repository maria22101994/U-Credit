'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '@/app/globals.css';

export default function HeroSection() {
  const slides = ['/bg.jpg', '/bg.jpg', '/bg.jpg'];
  const [current, setCurrent] = useState(0);
  const [imgSrc, setImgSrc] = useState('/orangearrow.svg');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleMouseEnter = () => setImgSrc('/rightarrow.svg');
  const handleMouseLeave = () => setImgSrc('/orangearrow.svg');

  return (
    <section className="relative w-full overflow-hidden z-0">
      <div className="relative w-full h-[70vh] sm:h-[75vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1512 796"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              style={{ background: "transparent" }}
            >
              <defs>
                <clipPath id="heroClip">
                  <path d="M0 0H1512V623.168C1512 623.168 1309.27 796 730.19 796C225.251 796 0 623.168 0 623.168V0Z" />
                </clipPath>
                <linearGradient
                  id="paint0_linear_27_65042"
                  x1="1512"
                  y1="313.687"
                  x2="0.0073598"
                  y2="304.15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="transparent" stopOpacity="0" />
                  <stop offset="1" stopColor="#f7f5f9" stopOpacity="0" />
                </linearGradient>
              </defs>
              <foreignObject
                x="0"
                y="0"
                width="1512"
                height="796"
                clipPath="url(#heroClip)"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              </foreignObject>
              <rect
                width="1512"
                height="796"
                fill="url(#paint0_linear_27_65042)"
                opacity="0"
                clipPath="url(#heroClip)"
              />
            </svg>
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-10 md:ml-20 md:mr-20">
              <div className="w-full sm:w-[50%] md:w-[60%] lg:w-[35%] space-y-3 sm:space-y-4">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white leading-snug sm:leading-tight">
                  <span className="text-[#FFDADD]">Singapore’s</span> Most Trusted Licensed Money Lender
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed">
                  U-Credit is a licensed money lender in Singapore, providing legal and transparent loans with no hidden fees.
                </p>
                <div className="flex justify-start">
                  <button
                    className="cursor-pointer border border-[#EC0000] bg-white font-semibold text-[#EC0000] px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-[#EC0000] hover:text-white transition-all duration-300 shadow-md flex items-center text-xs sm:text-sm md:text-base w-fit"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      const section = document.getElementById("loan-calculator");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >

                    <img src={imgSrc} alt="Arrow" className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    Apply Loan Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 z-30 hidden sm:block">
        <Image
          src="/sticker.png"
          alt="Sticker"
          width={70}
          height={70}
          className="w-auto h-auto drop-shadow-lg"
        />
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${index === current ? 'bg-white scale-110' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </section>
  );
}

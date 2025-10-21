"use client";
import { useEffect } from "react";
export default function TopHeader() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
     <div className="w-full bg-[#EC0000] text-white font-dm-sans text-[12px] sm:text-[14px] font-medium not-italic leading-normal capitalize h-[50px] px-[16px] sm:px-[80px] flex items-center">
  <p className="py-[16px]">Moneylender Registered In The Republic Of Singapore License No. 149/2022</p>
</div>

    </>
  );
}


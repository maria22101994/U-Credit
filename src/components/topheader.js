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
      <div className="w-full bg-[#d6001c] text-white text-[11px] sm:text-xs">
        <div className="max-w-full mx-4 sm:mx-10 md:mx-20 px-4 py-1.5">
          Moneylender Registered In The Republic Of Singapore License No. 149/2022
        </div>
      </div>
    </>
  );
}


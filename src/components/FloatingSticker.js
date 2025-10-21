
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingSticker() {
  const [showSticker, setShowSticker] = useState(true);

  // 👇 Detect screen width on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setShowSticker(false);
      } else {
        setShowSticker(true);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👇 If width < 1000px → hide completely
  if (!showSticker) return null;

  const handleScroll = () => {
    const section = document.getElementById("loan-calculator");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed right-[5%] top-[70%] -translate-y-1/2 z-[100]
                 cursor-pointer focus:outline-none hover:scale-105 transition-transform duration-300"
      aria-label="Apply Loan Securely"
    >
     <img
        src="/sticker.png"
        alt="Apply with Singpass"
        className="drop-shadow-xl w-25 h-35.5"
      />
    </button>
  );
}

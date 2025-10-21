"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/loans",
    label: "Loans",
    hasDropdown: true,
    dropdownItems: [
      { href: "/loans/personal", label: "Personal Loan" },
      { href: "/loans/business", label: "Business Loan" },
      { href: "/loans/debt-consolidation", label: "Debt Consolidation" },
    ],
  },
  { href: "/calculator", label: "Calculator" },
  {
    href: "/about",
    label: "About",
    hasDropdown: true,
    dropdownItems: [
      { href: "/about/company", label: "Our Company" },
      { href: "/about/team", label: "Our Team" },
      { href: "/about/careers", label: "Careers" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const isActive = (href) => pathname === href;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* ─────────────── DESKTOP HEADER AREA ─────────────── */}
      <div className={`w-full bg-white ${menuOpen ? "hidden" : "block"}`}>
        {/* ─────────────── UPPER SECTION (Logo + CTA) ─────────────── */}
        <div
          className="flex items-center justify-between px-6 sm:px-20 py-3.5 sm:py-0 sm:h-24"
        >
          <Link href="/">
            <img
              src="./logo.svg"
              alt="U-CREDIT"
              className="flex-shrink-0 h-9 w-40 sm:h-14 sm:w-[15.5rem]"
            />
          </Link>

          {/* Desktop CTA */}
          <div className="hidden sm:flex justify-center">
            <button
              onClick={() => {
                const section = document.getElementById("loan-calculator");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="
        flex cursor-pointer justify-center items-center gap-[10px]
        py-[14px] pl-[20px] pr-[18px] rounded-[8px]
        border border-[#EC0000]
        bg-[linear-gradient(95deg,#EC0000_3.17%,#FF0000_96.18%)]
        text-white font-dm-sans text-[14px] sm:text-[15px] md:text-[16px] font-semibold
        hover:opacity-90 transition-all active:scale-95
      "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
              >
                <path
                  d="M1.5 1.5L6.5 6.5L1.5 11.5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Check My Eligibility</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            onClick={() => setMenuOpen(true)}
            className="sm:hidden cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-md active:scale-95 transition"
          >
            <img src="/mobilemenu.svg" alt="Menu" className="h-8 w-8" />
          </button>
        </div>


        {/* ─────────────── DIVIDER LINE ─────────────── */}
        <div className="flex justify-center bg-white">
          <div
            className="w-full mx-auto border-t-[2px] px-4 sm:px-10 md:px-16 lg:px-20 mr-20 ml-20"
            style={{ borderColor: "rgba(217, 225, 231, 0.3)" }}
          ></div>
        </div>

        {/* ─────────────── LOWER SECTION (Navigation) ─────────────── */}
        <div className="hidden sm:flex items-center justify-center h-[64px] bg-white relative">
          <nav className="w-full mx-auto px-4 sm:px-10 md:px-16 lg:px-20 flex items-center justify-between text-[15px] font-medium relative">
            {LINKS.map((item, i) => (
              <div
                key={item.href}
                className={`relative flex-1 flex items-center ${item.label === "Contact Us" ? "justify-end" : "justify-center"
                  }`}
                onMouseEnter={() =>
                  item.hasDropdown ? setOpenDropdown(item.label) : setOpenDropdown(null)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-all duration-200 ${isActive(item.href)
                    ? "text-[#EC0000] font-semibold"
                    : "text-[#1A1A1A] hover:text-[#EC0000]"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className="ml-[6px] transition-colors duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                    >
                      <path
                        d="M8.80078 1.5L4.80078 5.5L0.800781 1.5"
                        stroke={
                          isActive(item.href) || openDropdown === item.label
                            ? "#EC0000"
                            : "#342643"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Active underline */}
                {isActive(item.href) && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-[34px] z-[0] w-[18px] h-[9px] bg-[#EC0000] rounded-t-full"
                    style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }}
                  />
                )}

                {/* Divider line between items */}
                {i < LINKS.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-[1px] bg-gray-200" />
                )}

                {/* ─────────────── Dropdown Menu ─────────────── */}
                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-[45px] left-1/2 -translate-x-1/2 w-[200px] bg-white shadow-lg border border-gray-100 rounded-lg py-2 z-50">
                    {item.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-[14px] text-gray-700 hover:text-[#EC0000] hover:bg-gray-50"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ─────────────── MOBILE MENU (unchanged) ─────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white sm:hidden z-50 overflow-y-auto transition-all">
          {/* Top Section */}
          <div className="flex items-center justify-between px-5 py-4 bg-white">
            <img
              src="./logo.svg"
              alt="U-CREDIT"
              className="flex-shrink-0 h-9 w-40 sm:h-14 sm:w-62"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="h-9 w-9 cursor-pointer grid place-items-center rounded-md bg-white active:scale-95 transition"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links (unchanged) */}
          {/* Navigation Links (with mobile submenu support) */}
<div className="flex justify-center items-start px-5 py-6 bg-white">
  <div className="relative rounded-[16px] bg-[#FFF3F4] p-5 w-full max-w-[400px] overflow-hidden">
    <div className="relative z-10">
      {LINKS.map((item) => (
        <div key={item.href} className="relative mb-1">
          {/* Parent Item */}
          <div
            className={`flex items-center justify-between px-3 py-3 rounded-[8px] text-[15px] font-medium relative transition-all duration-200 cursor-pointer ${
              isActive(item.href)
                ? "text-[#EC0000]"
                : "text-[#1A1A1A] hover:text-[#EC0000]"
            }`}
            onClick={() => {
              if (item.hasDropdown) {
                setOpenDropdown((prev) =>
                  prev === item.label ? null : item.label
                );
              } else {
                setMenuOpen(false);
              }
            }}
          >
            <span className="flex items-center gap-2 relative">
              {isActive(item.href) && (
                <span className="absolute left-[-34px] top-1/2 -translate-y-1/2 w-[8px] h-[13px] bg-[#EC0000] rounded-r-full"></span>
              )}
              {item.label}
            </span>

            {/* Dropdown Arrow */}
            {item.hasDropdown && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-300 ${
                  openDropdown === item.label ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#342643"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Submenu */}
          {item.hasDropdown && openDropdown === item.label && (
            <div className="ml-5 mt-1 border-l border-[#EC0000]/20">
              {item.dropdownItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 pl-4 text-[14px] text-[#1A1A1A] hover:text-[#EC0000] transition-all"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* CTA Button */}
      <button
        onClick={() => {
          const section = document.getElementById("loan-calculator");
          if (section) section.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }}
        className="w-full mt-5 flex justify-center items-center gap-[10px] py-[12px] px-[20px] rounded-[8px]
        border border-[#EC0000]
        bg-[linear-gradient(95deg,#EC0000_3.17%,#FF0000_96.18%)]
        text-white font-dm-sans text-[14px] sm:text-[16px] font-semibold
        hover:opacity-90 transition-all active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="13"
          viewBox="0 0 9 13"
          fill="none"
        >
          <path
            d="M1.5 1.5L6.5 6.5L1.5 11.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <span>Check My Eligibility</span>
      </button>

      {/* Contact Info */}
      <div className="mt-5 flex flex-col items-center text-center gap-2">
        <a
          href="tel:+6563371768"
          className="flex items-center gap-2 text-[#D6001C] text-[14px] font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 16.92v2a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.18 2 2 0 0 1 5.11 2h2a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"
              stroke="#D6001C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          +65 6337 1768
        </a>
        <p className="text-[#776E81] text-[12px] font-medium mt-1">
          © 2025 U Credit Pte Ltd. All rights reserved.
        </p>
      </div>

      <div className="mt-3 rounded-xl h-auto w-full">
        <img
          className="w-full object-cover opacity-8 mix-blend-multiply from-[#FFF3F4] via-[#FFF3F4]/80 to-transparent"
          src="./mobilebg.png"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

        </div>
      )}
    </header>
  );
}

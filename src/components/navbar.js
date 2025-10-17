"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/loans", label: "Loans", hasDropdown: true },
  { href: "/calculator", label: "Calculator" },
  { href: "/about", label: "About", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
<div className="w-full bg-white border-t border-gray-100 hidden sm:block shadow-sm sticky top-[40px] z-40">
      <div className="w-full h-[60px] flex items-center justify-center">
        <nav className="w-full flex items-center justify-between text-[15px] font-medium">
          {LINKS.map((item, i) => (
            <div
              key={item.href}
              className="relative flex-1 flex justify-center items-center"
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-[#EC0000] font-semibold"
                    : "text-[#1A1A1A] hover:text-[#EC0000]"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <Image
                    src="/arrow-down.svg"
                    alt="arrow"
                    width={10}
                    height={10}
                    className="ml-1 mt-[2px]"
                  />
                )}
              </Link>

              {isActive(item.href) && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-9px] w-[14px] h-[7px] bg-[#EC0000] rounded-t-full"
                  style={{
                    clipPath: "ellipse(50% 100% at 50% 100%)",
                  }}
                />
              )}

              {i < LINKS.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-[1px] bg-gray-200" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

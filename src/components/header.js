"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!menuOpen ? (
        <div className="w-full bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-full mx-4 sm:mx-10 md:mx-20 px-4 sm:px-6 h-14 flex items-center justify-between">
            <img src="/logo.png" alt="U-CREDIT" className="h-8 w-auto" />
            <div className="flex items-center gap-2">
              <button onClick={() => {
                const section = document.getElementById("loan-calculator");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }} className="cursor-pointer hidden sm:inline-flex items-center rounded-md bg-[#d6001c] px-4 py-2 text-white text-sm font-semibold hover:bg-[#b80018]">
                <span className="mr-2">›</span> Check My Eligibility
              </button>
              <button
                aria-label="Open Menu"
                onClick={() => setMenuOpen(true)}
                className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md active:scale-95 transition"
              >
                <img src={'./menuicon.png'}></img>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="U-CREDIT" className="h-7 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="h-9 w-9 grid place-items-center rounded-md border border-gray-200 bg-white active:scale-95 transition"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700">
                  <path d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-3 pb-4">
            <div className="rounded-2xl bg-[#fff5f7] overflow-hidden">
              <nav className="px-3 py-3  overflow-hide">
                <NavItem href="/" label="Home" active={isActive("/")} onClick={() => setMenuOpen(false)} />

                <Accordion
                  title="Loans"
                  items={[
                    { href: "/loans/personal", label: "Personal Loan" },
                    { href: "/loans/medical", label: "Medical Loan" },
                    { href: "/loans/home", label: "Home Loan" },
                    { href: "/loans/business", label: "Business Loan" },
                  ]}
                  isActive={isActive}
                  onClickItem={() => setMenuOpen(false)}
                />

                <NavItem href="/calculator" label="Calculator" active={isActive("/calculator")} onClick={() => setMenuOpen(false)} />

                <Accordion
                  title="About"
                  items={[
                    { href: "/about/company", label: "Company" },
                    { href: "/about/team", label: "Team" },
                  ]}
                  isActive={isActive}
                  onClickItem={() => setMenuOpen(false)}
                />

                {[
                  { href: "/faqs", label: "FAQ’s" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/privacy", label: "Privacy Policy" },
                ].map((i) => (
                  <NavItem key={i.href} href={i.href} label={i.label} active={isActive(i.href)} onClick={() => setMenuOpen(false)} />
                ))}
              </nav>

              <div className="bg-[#fff3f4] p-3">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-[#d6001c] px-4 py-3 text-white text-sm font-semibold shadow active:scale-[0.98] transition">
                  <span className="mr-2">›</span> Check My Eligibility
                </button>
                <a
                  href="tel:+6563371768"
                  className="mt-2 w-full inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[#d6001c] text-sm font-semibold active:scale-[0.98] transition"
                >
                  <PhoneIcon className="mr-2 h-4 w-4" /> +65–6337 1768
                </a>

                <div className="mt-3 rounded-xl h-auto w-full">
                  <img className="w-full" src={'./mobilebg.png'}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ href, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between px-3 py-3 rounded-md text-[15px] ${active ? "text-[#d6001c]" : "text-gray-800 hover:bg-white/70"
        }`}
    >
      <span className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${active ? "bg-[#d6001c]" : "bg-gray-300"}`} />
        {label}
      </span>
    </Link>
  );
}

function Accordion({ title, items, isActive, onClickItem }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-[15px] ${open ? "bg-white text-[#d6001c]" : "text-gray-800 hover:bg-white/70"
          } active:scale-[0.99] transition`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${open ? "bg-[#d6001c]" : "bg-gray-300"}`} />
          {title}
        </span>
        <Chevron className={`transition-transform ${open ? "rotate-180 text-[#d6001c]" : "rotate-0 text-gray-500"}`} />
      </button>
      {open && (
        <div className="mt-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={onClickItem}
              className={`ml-6 block px-3 py-3 rounded-md text-[15px] ${isActive(it.href) ? "text-[#d6001c] bg-white" : "text-gray-800 hover:bg-white/70"
                }`}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function Chevron({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.18 2 2 0 0 1 5.11 2h2a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

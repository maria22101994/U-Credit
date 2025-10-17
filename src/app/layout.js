import "./globals.css";
import HeaderBar from "@/components/header";
import NavBar from "@/components/navbar";
import TopHeader from "@/components/topheader";

export const metadata = {
  title: "U-Credit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#f7f7f7] dark:bg-gray-900 overflow-x-hidden">
        {/* Top header always visible */}
        <TopHeader />

        {/* Sticky container wraps both main headers */}
        <div className="sticky top-0 z-50">
          <HeaderBar />
          <NavBar />
        </div>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

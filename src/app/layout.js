import "./globals.css";
import HeaderBar from "@/components/header";
import TopHeader from "@/components/topheader";
import FloatingSticker from "@/components/FloatingSticker"; // ✅ Add this

export const metadata = {
  title: "U-Credit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        {/* Top header always visible */}
        <TopHeader />

        {/* Sticky header bar */}
        <div className="sticky top-0 z-50">
          <HeaderBar />
        </div>

        {/* Main page content */}
        <main>{children}</main>

        {/* ✅ Floating Sticker CTA (Client Component) */}
        <FloatingSticker />
      </body>
    </html>
  );
}

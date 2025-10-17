import HeroSection from "@/components/herosection";
import LoanCalculatorCard from "@/components/LoadCalculatorCards";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <LoanCalculatorCard />
    </main>
  );
}

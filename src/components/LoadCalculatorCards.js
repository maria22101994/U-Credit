"use client";
import { useState, useMemo, useEffect } from "react";

export default function LoanCalculatorCard() {
  const [amount, setAmount] = useState(2000);
  const [months, setMonths] = useState(20);
  const [monthlyRate, setMonthlyRate] = useState(0.01);

  const fmt = (v) =>
    Number(v.toFixed(2)).toLocaleString("en-SG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const monthlyInstallment = useMemo(() => {
    const P = amount;
    const r = monthlyRate;
    const n = months;
    if (r === 0) return P / n;
    return (P * r) / (1 - Math.pow(1 + r, -n));
  }, [amount, months, monthlyRate]);

  const totalRepayment = monthlyInstallment * months;
  const totalInterest = totalRepayment - amount;
  const rateOptions = [0.01, 0.02, 0.03, 0.04];

  const handleRange = (e, setter) => {
    const el = e.target;
    const val = ((el.value - el.min) / (el.max - el.min)) * 100;
    el.style.setProperty("--range-progress", `${val}%`);
    setter(Number(el.value));
  };

  useEffect(() => {
    document.querySelectorAll(".range-ucredit").forEach((el) => {
      const val = ((el.value - el.min) / (el.max - el.min)) * 100;
      el.style.setProperty("--range-progress", `${val}%`);
    });
  }, []);

  return (
    <section
      id="loan-calculator" className="relative p-5 sm:p-8 md:p-10 rounded-3xl mx-4 sm:mx-8 md:mx-10 mt-[-1vh] mb-5 overflow-hidden"
      style={{
        background:
          "linear-gradient(91deg, rgba(242,0,79,0.96) 0.12%, rgba(243,0,0,0.99) 99.25%)",
        boxShadow: "0 0 16px 4px rgba(153,0,0,0.64)",
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <h2 className="text-center text-white text-base sm:text-xl md:text-2xl mb-1">
          Estimate Loan Easily with
        </h2>
        <h2 className="text-center text-white text-lg sm:text-2xl md:text-3xl font-extrabold mb-2">
          U-Credit Loan Calculator
        </h2>
        <p className="text-center text-white/90 text-xs sm:text-sm md:text-base mb-8">
          Adjust the numbers, explore repayment options and find a plan that fits your
          needs.
        </p>

        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 md:gap-10">
          <div className="flex-1 bg-[#fff5f5] p-5 sm:p-7 md:p-8 rounded-xl relative">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-[#EC0000] text-[12px] sm:text-base md:text-lg">
                  Loan Amount (SGD)
                </label>
                <div className="bg-[#FFF2F3] px-3 sm:px-5 py-1.5 sm:py-2 rounded-md text-[#EC0000] font-bold text-lg sm:text-xl md:text-2xl shadow-sm">
                  <span className="text-[10px] sm:text-[12px] font-normal text-gray-600"> SGD</span> {fmt(amount)}
                </div>
              </div>
              <input
                type="range"
                min="100"
                max="100000"
                value={amount}
                onChange={(e) => handleRange(e, setAmount)}
                className="range-ucredit w-full"
              />
              <div className="flex justify-between text-[10px] sm:text-sm mt-2 text-gray-500">
                <span>SGD 100</span>
                <span>SGD 100,000</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-[#EC0000] text-[12px] sm:text-base md:text-lg">
                  Loan Tenure (Months)
                </label>
                <div className="bg-[#FFF2F3] px-3 sm:px-5 py-1.5 sm:py-2 rounded-md text-[#EC0000] font-bold text-lg sm:text-xl md:text-2xl shadow-sm">
                  {months} <span className="text-[10px] sm:text-[12px] font-normal text-gray-600">Months</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="36"
                value={months}
                onChange={(e) => handleRange(e, setMonths)}
                className="range-ucredit w-full"
              />
              <div className="flex justify-between text-[10px] sm:text-sm mt-2 text-gray-500">
                <span>1 Month</span>
                <span>36 Months</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <label className="text-[#EC0000] text-[12px] sm:text-base md:text-lg mb-3 block">
                Monthly Interest Rate (%)
              </label>
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {rateOptions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setMonthlyRate(r)}
                    className={`py-1.5 sm:py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all cursor-pointer ${monthlyRate === r
                        ? "bg-[#FFF2F3] text-[#EC0000] shadow-sm"
                        : "bg-white border-gray-200 border text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    {(r * 100).toFixed(0)}
                    <span className="text-xs text-gray-600">%</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FFF1F1] to-transparent" />
            <img
              src={"./card-bg.png"}
              className="absolute bottom-0 left-0 w-full h-32 opacity-50 pointer-events-none"
            />
            <div className="relative z-10">
              <div className="bg-[#FFF4F4] rounded-xl px-4 sm:px-6 py-4 sm:py-5 shadow-inner mb-6 text-center">
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium mb-1">
                  Your Total Repayment
                </div>
                <div className="text-[#EC0000] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  <span className="text-[10px] sm:text-[12px] font-normal text-gray-600">
                    SGD
                  </span>{" "}
                  {fmt(totalRepayment)}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[#EC0000] text-[12px] sm:text-base md:text-lg">
                    Monthly Installment
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#EC0000] text-lg sm:text-xl md:text-2xl font-bold">
                    <span className="text-[10px] sm:text-[12px] font-normal text-gray-600">
                      SGD
                    </span>{" "}
                    {fmt(monthlyInstallment)}
                  </div>
                </div>
              </div>

              <hr className="border-t-3 border-[#EFF6F9] w-full mb-3" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[#EC0000] text-[12px] sm:text-base md:text-lg">
                    Total Interest
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#EC0000] text-lg sm:text-xl md:text-2xl font-bold">
                    <span className="text-[10px] sm:text-[12px] font-normal text-gray-600">
                      SGD
                    </span>{" "}
                    {fmt(totalInterest)}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button className="bg-[#EC0000] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-[#c50000] transition-all duration-300 shadow-md flex items-center text-sm sm:text-base">
                  <img src={"./rightarrow.svg"} alt="Arrow" className="mr-2 w-3 sm:w-4" /> Apply Loan Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(2000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(1);

  const MIN_AMOUNT = 100;
  const MAX_AMOUNT = 100000;
  const MIN_TENURE = 1;
  const MAX_TENURE = 36;

  const monthlyRate = interestRate / 100;
  const monthlyPayment =
    loanAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1));
  const totalRepayment = monthlyPayment * loanTenure;
  const totalInterest = totalRepayment - loanAmount;

  const amountPercentage =
    ((loanAmount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;
  const tenurePercentage =
    ((loanTenure - MIN_TENURE) / (MAX_TENURE - MIN_TENURE)) * 100;

  const formatCurrency = (amount) =>
    amount.toLocaleString("en-SG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
  <section
  id="loan-calculator"
  className="loan-section relative flex items-center justify-center w-full bg-background py-[80px] px-4 sm:px-8 md:px-12 lg:px-20 z-10"
>

      {/* Outer Gradient Container */}
      <div className="flex flex-col items-center w-full max-w-[100%] mx-auto px-6 sm:px-[40px] lg:px-[80px] py-[64px] rounded-[32px] bg-gradient-to-r from-[#F2004F] to-[#F30000] shadow-[0_0_16px_4px_rgba(153,0,0,0.64)]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-[8px] mb-[64px] px-2">
          <h2 className="text-white font-dm-sans text-[24px] sm:text-[38px] font-semibold leading-[120%] tracking-[-0.38px]">
            Estimate Loan Easily with
          </h2>
          <h1 className="text-white font-dm-sans text-[32px] sm:text-[48px] md:text-[48px] font-bold leading-[120%] tracking-[-0.48px]">
            U-Credit Loan Calculator
          </h1>
          <p className="text-white font-dm-sans text-[14px] sm:text-[20px] md:text-[20px] leading-[30px] sm:leading-[34px] tracking-[-0.1px] max-w-[800px]">
            Adjust the numbers, explore repayment options and find a plan that fits your needs.
          </p>
        </div>

        {/* Cards Section */}
        <div
          className="
          grid
    grid-cols-1
    xl:grid-cols-2
    gap-[40px]
    w-full
    max-w-[1200px]
    mx-auto
    items-stretch
    justify-items-center
    xl:justify-items-stretch
        "
        >
          {/* Left Card */}
          <div className="bg-white rounded-[20px] px-[32px] sm:px-[48px] md:px-[64px] py-[32px] sm:py-[48px] flex flex-col gap-[32px] w-full max-w-[562px] h-full">
            {/* Loan Amount */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between items-center">
                <span className="text-[#EC0000] text-[14px] sm:text-[20px] font-dm-sans">
                  Loan Amount (SGD)
                </span>
                <div className="bg-[#FFF2F3] px-2 py-1 rounded-md">
                  <span className="text-[#776E81] text-[12px] sm:text-[16px]">SGD </span>
                  <span className="text-[#EC0000] text-[20px] sm:text-[32px] font-bold">
                    {loanAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Range Slider */}
              <div className="relative h-5">
                <div className="h-5 bg-[#EFF6F9] rounded-full overflow-hidden relative z-[1]">
                  <div className="absolute inset-0 flex items-center justify-between px-2 z-[1]">
                    {Array.from({ length: 57 }).map((_, i) => (
                      <div key={i} className="w-px h-2 bg-[#CCC]" />
                    ))}
                  </div>
                  <div
                    className="absolute left-0 top-0 h-full rounded-full z-[2]"
                    style={{
                      width: `${amountPercentage}%`,
                      background:
                        "linear-gradient(90deg, #F2004F 0%, #FF0000 100%)",
                    }}
                  ></div>
                </div>
                <div
                  className="absolute top-1/2 w-8 h-8 -translate-y-1/2 -ml-4 rounded-full flex items-center justify-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] z-[3]"
                  style={{
                    left: `${amountPercentage}%`,
                    background:
                      "radial-gradient(circle at 30% 30%, #FF5B5B 0%, #EC0000 70%)",
                  }}
                >
                  <div className="w-3 h-3 bg-white rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
                </div>
                <input
                  type="range"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={100}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-[10]"
                />
              </div>
              <div className="flex justify-between text-[#342643] opacity-60 text-[14px] sm:text-[16px]">
                <span>SGD {MIN_AMOUNT.toLocaleString()}</span>
                <span>SGD {MAX_AMOUNT.toLocaleString()}</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between items-center">
                <span className="text-[#EC0000] text-[14px] sm:text-[20px] font-dm-sans">
                  Loan Tenure (Months)
                </span>
                <div className="bg-[#FFF2F3] px-2 py-1 rounded-md">
                  <span className="text-[#EC0000] text-[20px] sm:text-[32px] font-bold">
                    {loanTenure}
                  </span>
                  <span className="text-[#776E81] text-[14px] sm:text-[16px]"> Months</span>
                </div>
              </div>

              <div className="relative h-5">
                <div className="h-5 bg-[#EFF6F9] rounded-full overflow-hidden relative z-[1]">
                  <div className="absolute inset-0 flex items-center justify-between px-2 z-[1]">
                    {Array.from({ length: 57 }).map((_, i) => (
                      <div key={i} className="w-px h-2 bg-[#CCC]" />
                    ))}
                  </div>
                  <div
                    className="absolute left-0 top-0 h-full rounded-full z-[2]"
                    style={{
                      width: `${tenurePercentage}%`,
                      background:
                        "linear-gradient(90deg, #F2004F 0%, #FF0000 100%)",
                    }}
                  ></div>
                </div>
                <div
                  className="absolute top-1/2 w-8 h-8 -translate-y-1/2 -ml-4 rounded-full flex items-center justify-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] z-[3]"
                  style={{
                    left: `${tenurePercentage}%`,
                    background:
                      "radial-gradient(circle at 30% 30%, #FF5B5B 0%, #EC0000 70%)",
                  }}
                >
                  <div className="w-3 h-3 bg-white rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
                </div>
                <input
                  type="range"
                  min={MIN_TENURE}
                  max={MAX_TENURE}
                  step={1}
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-[10]"
                />
              </div>
              <div className="flex justify-between text-[#342643] opacity-60 text-[14px] sm:text-[16px]">
                <span>{MIN_TENURE} Month</span>
                <span>{MAX_TENURE} Months</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[#EC0000] text-[14px] sm:text-[20px] sm:text-[20px] font-dm-sans">
                Monthly Interest Rate (%)
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setInterestRate(rate)}
                    className={`flex justify-center items-center gap-[8px] !pt-0 !pb-0 rounded-[6px] py-[10px] sm:px-7 sm:h-14 ${interestRate === rate
                        ? "bg-[#FFF2F3]"
                        : "border border-[#C0BCC5] bg-white"
                      }`}
                  >
                    <span
                      className={`font-dm-sans text-[26px] sm:text-[32px] font-bold ${interestRate === rate
                          ? "text-[#EC0000]"
                          : "text-[#776E81]"
                        }`}
                    >
                      {rate}
                    </span>
                    <span className="text-[#776E81] text-[14px] sm:text-[16px]">%</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative bg-white rounded-[20px] px-[32px] sm:px-[48px] md:px-[64px] py-[32px] sm:py-[48px] flex flex-col justify-between w-full max-w-[562px] overflow-hidden h-full">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain opacity-100"
              style={{
                backgroundImage: "url('/card-bg.png')",
                backgroundSize: "100% auto",
              }}
            ></div>

            <div className="relative z-10 flex flex-col gap-[32px]">
              <div className="flex flex-col justify-center items-center gap-[10px] px-[24px] sm:px-[40px] py-[20px] sm:py-[24px] rounded-[12px] bg-white/70 backdrop-blur-sm bg-[url('/mesh.png')] bg-no-repeat bg-cover shadow-[0_4px_10px_0_rgba(253,229,229,0.8)]">
                <p className="text-[#342643] text-center font-dm-sans text-[14px] sm:text-[20px] font-medium leading-[30px] sm:leading-[34px]">
                  Your Total Repayment
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[#776E81] text-[14px] sm:text-[24px]">
                    SGD{" "}
                  </span>
                  <span className="text-[#EC0000] text-[20px] sm:text-[48px] font-bold leading-[50px] sm:leading-[58px] whitespace-nowrap">
                    {formatCurrency(totalRepayment)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#EC0000] text-[14px] sm:text-[20px] font-dm-sans">
                  Monthly Installment
                </span>
                <div>
                  <span className="text-[#776E81] text-[14px] sm:text-[16px]">SGD </span>
                  <span className="text-[#EC0000] text-[16px] sm:text-[24px] font-semibold">
                    {formatCurrency(monthlyPayment)}
                  </span>
                </div>
              </div>
 <div className="flex justify-center bg-white">
          <div
            className="w-full mx-auto border-t-[3px]"
            style={{ borderColor: "rgba(217, 225, 231, 0.3)" }}
          ></div>
        </div>

              <div className="flex justify-between items-center">
                <span className="text-[#EC0000] text-[14px] sm:text-[20px] sm:text-[20px] font-dm-sans">
                  Total Interest
                </span>
                <div>
                  <span className="text-[#776E81] text-[14px] sm:text-[16px]">SGD </span>
                  <span className="text-[#EC0000] text-[16px] sm:text-[24px] font-semibold">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="flex items-center justify-center gap-2 rounded-[8px] border border-[#EC0000] bg-[linear-gradient(95deg,#EC0000_3.17%,#FF0000_96.18%)] text-white font-dm-sans text-[14px] sm:text-[16px] font-semibold pt-3 pr-6 pb-3 pl-6 hover:opacity-90 transition w-fit">
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
                  <span className="text-[16px]">Apply Loan Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

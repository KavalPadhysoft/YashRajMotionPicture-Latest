import React from "react";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";
import { packages } from "../data";

interface InvestmentProps {
  onPackageSelect: (packageName: string) => void;
}

export const Investment: React.FC<InvestmentProps> = ({ onPackageSelect }) => {
  const paymentMilestones = [
    {
      step: "01",
      percentage: "50% Booking Advance",
      title: "Conceptualization & Secure Dates",
      description: "A formal agreement secures your preferred shooting dates in Ahmedabad or across Gujarat. We set off color moodboards, location scouts, and outfit recommendations.",
      timing: "Week 1",
    },
    {
      step: "02",
      percentage: "30% Mid-Approval",
      title: "Shoots & Draft Reels Review",
      description: "Once capturing is concluded, we compile raw footage edits and select key frames. The client approves cinematic soundtrack selections and first drafts of wedding films.",
      timing: "Week 3",
    },
    {
      step: "03",
      percentage: "20% On Final Delivery",
      title: "Color Grading & Heirloom Prints",
      description: "Final delivery of ultra-HD 4K cinematic films, synced audio reels, digital cloud lockers, and bespoke custom leather bound embossed print albums.",
      timing: "Week 4–5",
    },
  ];

  return (
    <section
      className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20 relative text-left"
      id="pricing-milestones"
    >
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#d4af64]/10 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block">
            INVESTMENT TIERS & FLOW
          </span>
          <h2 className="text-[42px] md:text-[48px] font-serif font-bold text-[#FFFFFF] mt-2 tracking-[-0.01em] leading-[1.1] uppercase">
            Pricing & <i className="italic font-normal text-[#C9A84C]">Payment</i> Milestones
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
        </div>

        {/* Pricing Tiers Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          id="pricing-tiers-grid"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between p-8 bg-[#141414] border transition-all duration-300 rounded-none ${
                pkg.popular
                  ? "border-[#C9A84C] shadow-2xl"
                  : "border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]/40"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] font-semibold text-[11px] tracking-[0.15em] uppercase px-4 py-1.5 flex items-center gap-1.5 rounded-none leading-[1.5]">
                  <Sparkles className="w-3.5 h-3.5 fill-[#0A0A0A] text-[#0A0A0A]" />
                  <span> Ahmedabad Favorite </span>
                </div>
              )}

              <div>
                <span className="font-mono text-[11px] font-normal tracking-[0.15em] text-[#C9A84C] uppercase block mb-1">
                  {pkg.subtitle}
                </span>
                <h3 className="text-[18px] font-sans font-semibold text-[#FFFFFF] uppercase mb-3 tracking-[0.08em] leading-[1.1]">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-1 my-5">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#FFFFFF] tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-[#A89F8C] text-xs tracking-wider">
                    / Excl. GST
                  </span>
                </div>
                <div className="h-[1px] bg-[rgba(201,168,76,0.15)] my-4" />
                <ul className="space-y-3 mt-6 mb-8 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 leading-[1.8] text-[15px] font-normal text-[#D4D0C8]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C9A84C] mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onPackageSelect(pkg.title)}
                className={`w-full py-4 text-[13px] tracking-[0.15em] font-sans font-semibold uppercase text-center transition cursor-pointer rounded-none outline-none leading-[1.5] ${
                  pkg.popular
                    ? "bg-[#C9A84C] hover:bg-[#E2C97E] text-black"
                    : "bg-transparent border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#FFFFFF] hover:bg-white/5"
                }`}
                id={`pkg-select-${pkg.id}`}
              >
                Inquire For This Package
              </button>
            </div>
          ))}
        </div>

        {/* Milestone Steps Timeline Card */}
        <div
          className="bg-[#141414] border border-[rgba(201,168,76,0.15)] p-4 sm:p-12 rounded-none"
          id="budget-milestones-card"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block">
                THE PRE-PRODUCTION DISCIPLINE
              </span>
              <h3 className="text-[34px] sm:text-[42px] font-serif font-bold text-[#FFFFFF] uppercase mt-1 tracking-[-0.01em] leading-[1.1]">
                Timeline & <i className="italic font-normal text-[#C9A84C]">Milestones</i>
              </h3>
            </div>

            <div className="p-4 bg-[#0A0A0A] border border-[rgba(201,168,76,0.15)] inline-flex items-center gap-3 rounded-none">
              <Clock className="w-5 h-5 text-[#C9A84C]" />
              <div className="text-left">
                <p className="font-mono text-[11px] font-normal text-[#A89F8C] tracking-[0.1em] uppercase leading-[1.5]">
                  Delivery Timeframe
                </p>
                <p className="text-xs font-semibold text-[#FFFFFF] tracking-[0.15em] uppercase leading-[1.5]">
                  4 to 5 Weeks Complete
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
            id="milestones-progressive-grid"
          >
            {paymentMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between"
                id={`milestone-${milestone.step}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-5xl text-white/5 select-none font-bold">
                      {milestone.step}
                    </span>
                    <span className="px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/25 font-mono text-[11px] font-normal tracking-[0.12em] text-[#C9A84C] rounded-none">
                      {milestone.percentage}
                    </span>
                  </div>
                  <h4 className="text-[18px] font-sans font-semibold uppercase text-[#FFFFFF] mb-2 tracking-[0.08em] leading-[1.2]">
                    {milestone.title}
                  </h4>
                  <p className="text-[15px] font-normal text-[#D4D0C8] leading-[1.75] tracking-[0.01em]">
                    {milestone.description}
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-[rgba(201,168,76,0.15)] flex items-center justify-between font-mono text-[11px] font-normal tracking-[0.1em] text-[#A89F8C] uppercase leading-[1.5]">
                  <span>PHASE SEQUENCE</span>
                  <span className="text-[#C9A84C] font-semibold tracking-normal">
                    {milestone.timing}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[1px] bg-[rgba(201,168,76,0.15)] my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5a5650] mt-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#D4D0C8] text-[15px] font-normal">
                Contract-backed, guaranteed high-fidelity production by Yash Raj.
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#A89F8C] text-right font-normal tracking-[0.1em]">
              * All rates subject to standard contract agreements.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

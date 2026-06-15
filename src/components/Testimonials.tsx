import React from "react";
import { Star, Instagram, Heart, MessageCircle, User, Camera } from "lucide-react";
import { testimonials, instagramPosts } from "../data";
import { MotionWrapper } from "./MotionWrapper";

export const Testimonials: React.FC = () => {
  return (
    <section
      className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20 relative overflow-hidden"
      id="social-proof-section"
    >
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[30%] bg-[#d4af64]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials Header */}
        <MotionWrapper direction="up" distance={30} delay={0.05}>
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block">
              INDELIBLE EXPERIENCES OF <i className="italic font-normal">YOUR</i> JOURNEYS
            </span>
            <h2 className="text-[42px] sm:text-[48px] font-serif font-bold text-white uppercase mt-2 tracking-[-0.01em] leading-[1.1]">
              Heirloom <i className="italic font-normal text-[#C9A84C]">Testimonials</i>
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
          </div>
        </MotionWrapper>

        {/* Testimonials Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          id="testimonials-grid"
        >
          {testimonials.map((test, index) => (
            <MotionWrapper
              key={test.id}
              direction="up"
              distance={25}
              delay={index * 0.1}
              className="h-full"
            >
              <div
                className="bg-[#141414] border border-[rgba(201,168,76,0.15)] p-8 flex flex-col justify-between h-full relative group rounded-none hover:border-[#C9A84C]/40 transition-colors duration-350"
                id={`testimonial-card-${test.id}`}
              >
                <span className="absolute top-2 right-4 text-[9rem] font-serif font-light text-[#C9A84C]/10 select-none leading-none h-12 overflow-hidden pointer-events-none">
                  “
                </span>

                <div>
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]"
                      />
                    ))}
                  </div>

                  <p className="text-[15px] font-normal text-[#D4D0C8] leading-[1.8] mb-8 italic text-left">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-[rgba(201,168,76,0.15)]">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#C9A84C]/10 border border-[rgba(201,168,76,0.2)] text-[#C9A84C]">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[18px] font-sans font-semibold text-[#FFFFFF] uppercase tracking-[0.08em] leading-[1.1]">
                      {test.name}
                    </h4>
                    <p className="font-mono text-[11px] text-[#A89F8C] tracking-[0.1em] uppercase mt-1 leading-[1.5]">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

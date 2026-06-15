import React, { useRef } from "react";
import { motion } from "motion/react";
import { PageBanner } from "./PageBanner";
import { MotionWrapper } from "./MotionWrapper";
import { TeamSection } from "./TeamSection";
import { MissionVisionValues } from "./MissionVisionValues";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="bg-[#0a0a0a] overflow-hidden text-white"
      id="about-us-module"
      ref={containerRef}
    >
      <PageBanner
        title="About Us"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Storytelling split */}
      <section
        className="bg-[#0a0a0a] py-24 border-t border-[#5a5650]/20"
        id="about-storytelling-split"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Asymmetrical Frame with Parallax */}
          <div
            className="relative flex justify-center items-center h-[500px] sm:h-[600px] overflow-hidden rounded-none border border-[#5a5650]/20"
            id="asymmetrical-image-frame"
          >
            <div className="absolute inset-0 bg-luxury-gold/5 blur-[100px] pointer-events-none rounded-none" />
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full absolute top-0 left-0 z-10 transition-shadow duration-[800ms] rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200"
                alt="High-resolution traditional wedding ceremony portrait"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] hover:scale-[1.03] transition-all duration-[1200ms] ease-out rounded-none"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20 pointer-events-none" />

              {/* Tag overlay */}
              <div className="absolute bottom-6 left-6 z-35 bg-black/85 border border-luxury-gold/20 p-4 rounded-none flex items-center gap-3">
                <span className="w-2 h-2 bg-luxury-gold animate-pulse" />
                <div className="text-left">
                  <span className="text-[9px] font-sans tracking-[3px] text-luxury-gold uppercase block">
                    Lead Director
                  </span>
                  <span className="text-xs font-serif text-[#f0ece4] font-bold block mt-0.5">
                    Yash Raj Shah
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left flex flex-col justify-center"
          >
            <MotionWrapper stagger={true} direction="up" distance={20} className="space-y-6">
              <div className="space-y-2">
                <span
                  className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block"
                  id="biography-tag"
                >
                  OUR CONTEXT
                </span>
                <h2 className="font-serif text-[34px] sm:text-[42px] font-bold text-white uppercase tracking-[-0.01em] leading-[1.1]">
                  AHMEDABAD’S PREMIER <i className="italic font-normal text-[#C9A84C]">CINEMATOGRAPHIC</i> HAND
                </h2>
                <div className="h-[1px] bg-[#C9A84C]/60 w-16 mt-4" />
              </div>

              <div
                className="space-y-4 text-[15px] font-normal text-[#D4D0C8] leading-[1.8] tracking-[0.01em] max-w-[550px]"
                id="biography-p-container"
              >
                <p>
                  Since 2012, Yash Raj Shah has documented over 300+ couples across Ahmedabad, Delhi, and Rajasthan, transforming fleeting traditional values into monumental visual cinema.
                </p>
                <p>
                  Our photography captures the architectural soul of Indian tradition, freezing true presence rather than manufactured poses. Every frame is treated as a museum artifact, balanced with cinematic color depth.
                </p>
                <p className="text-[#A89F8C]">
                  Our flagship office is dynamically stationed near Sindhu Bhavan Road, Bodakdev, enabling prompt production planning meetings. From high-fashion editorial texture matching to standard traditional rituals at Taj Skyline or premium setups at GIFT City, we handle everything with extreme precision.
                </p>
              </div>

              {/* Statistics Grid */}
              <div
                className="grid grid-cols-3 gap-5 pt-8 border-t border-[#5a5650]/20 max-w-[550px]"
                id="intro-authority-stat-grid"
              >
                <div className="flex flex-col text-left group">
                  <span className="text-2xl sm:text-3xl font-serif text-[#C9A84C] tracking-wider transition-transform duration-300 font-bold">
                    12+ Yrs
                  </span>
                  <span className="font-mono text-[11px] text-[#A89F8C] tracking-[0.1em] uppercase mt-1 leading-[1.5]">
                    Artistry Era
                  </span>
                </div>
                <div className="flex flex-col text-left group">
                  <span className="text-2xl sm:text-3xl font-serif text-[#C9A84C] tracking-wider transition-transform duration-300 font-bold">
                    300+
                  </span>
                  <span className="font-mono text-[11px] text-[#A89F8C] tracking-[0.1em] uppercase mt-1 leading-[1.5]">
                    Weddings File
                  </span>
                </div>
                <div className="flex flex-col text-left group">
                  <span className="text-[14px] font-sans font-bold text-[#FFFFFF] tracking-[0.12em] leading-tight self-start mt-2 uppercase">
                    GUJARAT
                  </span>
                  <span className="font-mono text-[11px] text-[#A89F8C] tracking-[0.1em] uppercase mt-1 leading-[1.5]">
                    HQ Coordinates
                  </span>
                </div>
              </div>
            </MotionWrapper>
          </motion.div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <TeamSection />

      {/* Mission, Vision & Values Section */}
      <MissionVisionValues />
    </div>
  );
};

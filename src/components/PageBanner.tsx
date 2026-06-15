import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <div
      className="relative h-[250px] sm:h-[350px] w-full bg-[#020202] overflow-hidden flex flex-col justify-end text-left"
      id={`page-banner-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={backgroundImage}
          alt={`${title} banner background`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/85 via-transparent to-[#020202]/85 z-10" />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.06] scanlines" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-2xl"
        >
          {subtitle && (
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#C9A84C]" />
              <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5]">
                {subtitle}
              </span>
            </div>
          )}
          <h1 className="font-serif text-2xl sm:text-[42px] md:text-[48px] font-bold text-white uppercase tracking-[-0.01em] leading-[1.1] break-words">
            {title}
          </h1>
          <div className="w-12 h-[1px] bg-[#C9A84C] mt-3" />
        </motion.div>
      </div>
    </div>
  );
};

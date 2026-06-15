import React from "react";
import { Sparkles, Film, Camera, Heart, Award, Gem, Flame } from "lucide-react";

export const MarqueeStrip: React.FC = () => {
  const marqueeItems = [
    { text: "WEDDING FILMS & CINEMATOGRAPHY", icon: Film },
    { text: "PRE-WEDDING TEASERS & STORYBOARDS", icon: Heart },
    { text: "ANAMORPHIC CELLULOID TRAILERS", icon: Flame },
    { text: "HERITAGE PORTRAIT SESSIONS", icon: Camera },
    { text: "HIGH-BOLLYWOOD DRAMATIC SEQUENCES", icon: Sparkles },
    { text: "COUTURE LOOKBOOKS & STYLING CAMPAIGNS", icon: Gem },
    { text: "ROYAL GUJARATI HEIRLOOMS", icon: Award },
    { text: "SIGNATURE MIDNIGHT-GOLD COLOR GRADES", icon: Sparkles },
  ];

  return (
    <div
      id="gold-marquee-strip"
      className="relative bg-[#C9A84C] py-4 border-y border-[#C9A84C]/30 overflow-hidden flex select-none"
    >
      {/* Dynamic Keyframes for smooth infinite slide injected safely */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-slide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .animate-marquee-strip {
              animation: marquee-slide 32s linear infinite;
            }
          `,
        }}
      />

      {/* Ticker track */}
      <div className="flex whitespace-nowrap gap-12 animate-marquee-strip items-center">
        {/* We repeat the array multiple times to ensure continuous, gapless scrolling */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-center gap-4.5">
              <span className="text-[11px] sm:text-xs tracking-[4px] font-sans font-extrabold text-black uppercase">
                {item.text}
              </span>
              <IconComponent className="w-4 h-4 text-black stroke-[2.5px] opacity-90 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeStrip;

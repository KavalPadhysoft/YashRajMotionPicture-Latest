import React, { useRef, useCallback } from "react";
import { Target, Eye, Heart } from "lucide-react";
import { MotionWrapper } from "./MotionWrapper";

interface MVVCardProps {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: string }>;
  heading: string;
  content: string;
  index: number;
}

const MVVCard: React.FC<MVVCardProps> = ({ icon: Icon, heading, content, index }) => {
  return (
    <MotionWrapper
      direction="up"
      delay={index * 0.15}
      className="h-full flex"
    >
      <div
        role="article"
        className="w-full flex flex-col items-center text-center p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-none transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:bg-white/[0.08] hover:border-[#C9A84C]/45 hover:shadow-[0_20px_50px_rgba(201,168,76,0.12)] select-none group min-h-[250px]"
        style={{
          willChange: "transform, border-color, background-color, box-shadow",
        }}
      >
        {/* Icon */}
        <div 
          className="flex items-center justify-center w-14 h-14 bg-[#C9A84C]/10 rounded-full border border-[#C9A84C]/25 group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 transition-colors duration-300 mb-6"
        >
          <Icon aria-hidden="true" className="w-7 h-7 text-[#C9A84C] group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Heading */}
        <h4 className="font-serif text-[22px] sm:text-[24px] font-bold text-white uppercase tracking-[0.06em] mb-4">
          {heading}
        </h4>

        {/* Content */}
        <p className="font-sans text-[14px] sm:text-[15px] text-[#D4D0C8] leading-relaxed group-hover:text-white transition-colors duration-300 flex-grow">
          {content}
        </p>

        {/* Dynamic ambient gold spark bar */}
        <div className="w-8 h-[1.5px] bg-[#C9A84C]/30 group-hover:bg-[#C9A84C] group-hover:w-16 transition-all duration-300 mt-6" />
      </div>
    </MotionWrapper>
  );
};

export const MissionVisionValues: React.FC = () => {
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const subtitleText = "Our Philosophy";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    // Disable parallax effect on touch/no-hover devices
    if (window.matchMedia("(hover: none)").matches) return;

    const letters = subtitleRef.current?.querySelectorAll(".p-letter");
    letters?.forEach((node) => {
      const letter = node as HTMLSpanElement;
      const rect = letter.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;
      const distX = e.clientX - letterCenterX;
      const distY = e.clientY - letterCenterY;
      const dist = Math.sqrt(distX ** 2 + distY ** 2);
      const maxDist = 120;
      
      if (dist < maxDist) {
        const force = Math.max(0, (maxDist - dist) / maxDist);
        const moveX = (distX / dist || 0) * force * 18;
        const moveY = (distY / dist || 0) * force * 18;
        
        letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
        // Fluid color shift from golden yellow to bright gold / soft amber
        letter.style.color = `hsl(${35 + force * 20}, 90%, ${55 + force * 25}%)`;
        letter.style.transition = "transform 0.08s ease-out, color 0.08s ease-out";
      } else {
        letter.style.transform = "translate(0, 0)";
        letter.style.color = "";
        letter.style.transition = "transform 0.3s ease, color 0.3s ease";
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const letters = subtitleRef.current?.querySelectorAll(".p-letter");
    letters?.forEach((node) => {
      const letter = node as HTMLSpanElement;
      letter.style.transform = "translate(0, 0)";
      letter.style.color = "";
      letter.style.transition = "transform 0.4s ease, color 0.4s ease";
    });
  }, []);

  const cards = [
    {
      icon: Target,
      heading: "Our Mission",
      content: "To craft visual stories that transcend the ordinary — preserving your most precious moments with artistry, passion, and precision.",
    },
    {
      icon: Eye,
      heading: "Our Vision",
      content: "To be the most trusted name in creative photography and filmmaking, known for transforming fleeting moments into timeless memories.",
    },
    {
      icon: Heart,
      heading: "Our Values",
      content: "Authenticity · Creativity · Excellence · Trust · Dedication",
    },
  ];

  return (
    <section
      className="bg-[#0a0a0a] py-24 border-t border-[#5a5650]/20"
      id="about-mvv-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Parallax Subtitle & Title Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            ref={subtitleRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-label={subtitleText}
            className="inline-block font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] cursor-default select-none pb-2"
          >
            {subtitleText.split("").map((char, index) => {
              if (char === " ") {
                return (
                  <span key={index} aria-hidden="true">
                    &nbsp;
                  </span>
                );
              }
              return (
                <span
                  key={index}
                  className="p-letter inline-block transition-transform duration-150"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </span>
              );
            })}
          </span>

          <MotionWrapper direction="up" distance={30}>
            <h2 className="font-serif text-[42px] md:text-[48px] font-bold text-[#FFFFFF] uppercase mt-2 tracking-[-0.01em] leading-[1.1]">
              Mission, Vision &amp; Values
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
          </MotionWrapper>
        </div>

        {/* 3-Column Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          id="about-mvv-cards-grid"
        >
          {cards.map((card, idx) => (
            <div key={idx} className="flex h-full">
              <MVVCard
                icon={card.icon}
                heading={card.heading}
                content={card.content}
                index={idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

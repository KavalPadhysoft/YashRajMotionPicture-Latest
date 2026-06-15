import React, { useCallback, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceParallaxCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  f?: number;
  r?: string;
  onClick?: () => void;
}

export const ServiceParallaxCard: React.FC<ServiceParallaxCardProps> = ({
  icon: Icon,
  title,
  description,
  f = 0.1,
  r = "10px",
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Rotate 20 degrees maximum based on offset
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.04)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  return (
    <div
      ref={cardRef}
      role="article"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-between p-8 sm:p-10 h-[280px] sm:h-[300px] bg-[#141414]/90 backdrop-blur-md border border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]/45 transition duration-150 ease-out cursor-pointer group rounded-none select-none overflow-hidden hover:shadow-[0_12px_40px_rgba(201,168,76,0.06)]"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, border-color 0.3s ease, shadow 0.3s ease",
      }}
    >
      {/* Dynamic ambient gold background glow behind icon when hovered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#C9A84C]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Frame decoration corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 transition-colors duration-300" />

      {/* Centered Large Icon */}
      <div 
        className="flex items-center justify-center w-16 h-16 bg-[#111111]/80 border border-[#C9A84C]/10 rounded-full group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/5 transition-all duration-300 mb-4"
        style={{ transform: "translateZ(30px)" }}
      >
        <Icon 
          aria-hidden="true" 
          className="w-8 h-8 text-[#C9A84C] group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      {/* Text group */}
      <div 
        className="text-center flex flex-col justify-end flex-grow gap-2.5 z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-white uppercase tracking-[0.06em] leading-tight group-hover:text-[#C9A84C] transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-[12px] sm:text-[13px] text-[#A89F8C] group-hover:text-[#D4D0C8] leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle indicator token on bottom edge */}
      <div className="w-6 h-[1.5px] bg-[#C9A84C]/20 group-hover:bg-[#C9A84C] transition-all duration-300 mt-5 mx-auto" />
    </div>
  );
};

import React from "react";

interface LogoProps {
  variant?: "header" | "footer";
}

export const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
  return (
    <div
      className={`flex items-center font-sans group select-none ${
        variant === "header"
          ? "gap-1.5 xs:gap-2 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3.5 2xl:gap-5"
          : "gap-3.5 sm:gap-5"
      }`}
      id={`studio-logo-${variant}`}
    >
      {/* First child container (div:nth-of-type(1)) for the logo badge */}
      <div className={`relative flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 ${
        variant === "header"
          ? "w-[30px] h-[30px] xs:w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] md:w-[50px] md:h-[50px] lg:w-[38px] lg:h-[38px] xl:w-[44px] xl:h-[44px] 2xl:w-[58px] 2xl:h-[58px]"
          : "w-[52px] h-[52px] sm:w-[62px] sm:h-[62px]"
      }`}>
        {/* The target span for Selector 1 and Selector 3 (span:nth-of-type(1)) */}
        <span className="absolute inset-0 block w-full h-full" id={`${variant}-logo-badge-span`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              {/* Outer gold border gradient */}
              <linearGradient id={`${variant}-goldGradOuter`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffeecc" />
                <stop offset="35%" stopColor="#d4af64" />
                <stop offset="70%" stopColor="#b3914e" />
                <stop offset="100%" stopColor="#6b5021" />
              </linearGradient>
              {/* Inner gold border gradient */}
              <linearGradient id={`${variant}-goldGradInner`} x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ffe69c" />
                <stop offset="50%" stopColor="#d4af64" />
                <stop offset="100%" stopColor="#806228" />
              </linearGradient>
              {/* Map pin gold gradient */}
              <linearGradient id={`${variant}-goldGradPin`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff6df" />
                <stop offset="50%" stopColor="#d4af64" />
                <stop offset="100%" stopColor="#967433" />
              </linearGradient>
            </defs>
            
            {/* Glossy dark base background */}
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              rx="22"
              fill="#050505"
              stroke={`url(#${variant}-goldGradOuter)`}
              strokeWidth="4.5"
            />
            
            {/* Fine gold inner frame accent */}
            <rect
              x="11"
              y="11"
              width="78"
              height="78"
              rx="17"
              fill="transparent"
              stroke={`url(#${variant}-goldGradInner)`}
              strokeWidth="1"
              opacity="0.75"
            />

            {/* Premium Location Pin with Camera Shutter aperture cutout (Even-Odd fill Rule) */}
            <path
              d="M 50 19 C 33 19 20 32 20 49 C 20 66.5 50 83 50 83 C 50 83 80 66.5 80 49 C 80 32 67 19 50 19 Z M 50 34 C 58.28 34 65 40.72 65 49 C 65 57.28 58.28 64 50 64 C 41.72 64 35 57.28 35 49 C 35 40.72 41.72 34 50 34 Z"
              fill={`url(#${variant}-goldGradPin)`}
              fillRule="evenodd"
            />

            {/* Camera Lens ring details inside the map pin head */}
            <circle
              cx="50"
              cy="49"
              r="12.5"
              stroke={`url(#${variant}-goldGradInner)`}
              strokeWidth="1"
              fill="none"
              opacity="0.8"
            />
            <circle
              cx="50"
              cy="49"
              r="9"
              stroke={`url(#${variant}-goldGradPin)`}
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />

            {/* Camera lens diagonal shutter blade segment lines */}
            <path
              d="M 50 36.5 L 44 42 M 41.5 45.2 L 40 52 M 42.2 55.5 L 48 59.5 M 53.5 59.5 L 59 55.5 M 60 50.5 L 59.5 43.5 M 57 39 L 51 37"
              stroke={`url(#${variant}-goldGradPin)`}
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.95"
            />
          </svg>
        </span>
      </div>

      {/* Second child container (div:nth-of-type(2)) for brand letters & descriptors */}
      <div className="text-left flex flex-col justify-center gap-0.5">
        {/* 'YASH RAJ' title in heavy metallic font with wide letter-spacing */}
        <span className={`font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8a8] via-[#d4af64] to-[#997c45] uppercase leading-none transition-all duration-300 group-hover:brightness-110 ${
          variant === "header"
            ? "text-[11px] xs:text-[13px] sm:text-[17px] md:text-[20px] lg:text-[13px] xl:text-[16px] 2xl:text-[21px] tracking-[0.16em] lg:tracking-[0.12em] xl:tracking-[0.18em] 2xl:tracking-[0.22em]"
            : "text-[17px] sm:text-[21px] md:text-[23px] tracking-[0.22em]"
        }`}>
          YASH RAJ
        </span>

        {/* Subtitle containing 'MOTION PICTURE • AHMEDABAD' in a single elegant line */}
        <div className="flex items-center mt-0.5 sm:mt-1">
          <span className={`font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#e0c080] via-[#d4af64] to-[#b3914e] uppercase leading-none whitespace-nowrap ${
            variant === "header"
              ? "text-[6.5px] xs:text-[7.5px] sm:text-[9px] md:text-[10px] lg:text-[7.5px] xl:text-[8.5px] 2xl:text-[11px] tracking-[0.16em] lg:tracking-[0.12em] xl:tracking-[0.18em] 2xl:tracking-[0.22em]"
              : "text-[9px] sm:text-[11px] md:text-[12px] tracking-[0.22em]"
          }`}>
            MOTION PICTURE • AHMEDABAD
          </span>
        </div>
      </div>
    </div>
  );
};


import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

interface SlideContent {
  headlineParts: { text: string; italicGold: boolean }[];
  subtext: string;
  ctaPrimary: { label: string; action: () => void };
  ctaSecondary: { label: string; action: () => void };
  imageDesktop: string;
  imageMobile: string;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  // Timer settings
  const slideDuration = 5000; // 5 seconds auto-advance
  const intervalRef = useRef<any>(null);

  const slides: SlideContent[] = [
    {
      headlineParts: [
        { text: "EVERY", italicGold: false },
        { text: "FRAME", italicGold: false },
        { text: "TELLS A", italicGold: false },
        { text: "STORY", italicGold: true },
      ],
      subtext: "Cinematic wedding films & fine art photography, Ahmedabad",
      ctaPrimary: { label: "VIEW OUR WORK", action: onExploreClick },
      ctaSecondary: { label: "BOOK A CONSULTATION", action: onBookClick },
      imageDesktop: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600",
      imageMobile: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=75&w=640&h=1138",
    },
    {
      headlineParts: [
        { text: "CRAFTING", italicGold: false },
        { text: "YOUR", italicGold: false },
        { text: "FOREVER", italicGold: true },
        { text: "LEGACY", italicGold: false },
      ],
      subtext: "Preserving high-stakes emotional moments in cinematic celluloid.",
      ctaPrimary: { label: "RESERVE SHOOT", action: onBookClick },
      ctaSecondary: { label: "VIEW PORTFOLIO", action: onExploreClick },
      imageDesktop: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600",
      imageMobile: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=75&w=640&h=1138",
    },
    {
      headlineParts: [
        { text: "YOUR", italicGold: false },
        { text: "STORY,", italicGold: false },
        { text: "TOLD IN", italicGold: true },
        { text: "FILM", italicGold: false },
      ],
      subtext: "Editorial lookbooks and portraits with our signature midnight-gold grade.",
      ctaPrimary: { label: "BOOK A SESSION", action: onBookClick },
      ctaSecondary: { label: "VIEW LOOKBOOKS", action: onExploreClick },
      imageDesktop: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
      imageMobile: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=75&w=640&h=1138",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Manage timer progress & slide transitions
  useEffect(() => {
    // Force browser to fetch and cache all slides immediately upon mounting
    slides.forEach((slide) => {
      const imgD = new Image();
      imgD.src = slide.imageDesktop;
      const imgM = new Image();
      imgM.src = slide.imageMobile;
    });
  }, []);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    // Only autoplay if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, slideDuration);

    intervalRef.current = timer;

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isHovered, currentSlide]);

  return (
    <div
      id="cinematic-hero-slider"
      className="relative h-screen w-full bg-[#0A0A0A] overflow-hidden flex flex-col justify-between"
      style={{
        minHeight: "100svh"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides Render with Crossfade */}
      <div className="absolute inset-0 z-0 bg-black">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: idx === 0 ? 1 : 0, scale: 1.05 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.0 : 1.05,
              }}
              transition={{
                opacity: { duration: 1.0, ease: "easeInOut" },
                scale: { duration: isActive ? 6.0 : 0.4, ease: "easeOut" },
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                zIndex: isActive ? 5 : 1,
                pointerEvents: "none",
              }}
            >
              <picture className="absolute inset-0 w-full h-full block">
                {/* Mobile: smaller, portrait-cropped image under 120KB */}
                <source
                  media="(max-width: 768px)"
                  srcSet={slide.imageMobile}
                />
                {/* Desktop: full-width landscape image under 300KB */}
                <source
                  media="(min-width: 769px)"
                  srcSet={slide.imageDesktop}
                />
                <img
                  src={slide.imageDesktop}
                  alt={`Yash Raj Cinematic - Slide ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </motion.div>
          );
        })}
        {/* Dark overlay (~60%) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 z-10 pointer-events-none" />
      </div>

      {/* Cinematic Film-Grain & Gold Streak Overlays */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay"
        }}
      />
      <div className="absolute top-[-10%] right-[12%] w-[1.5px] h-[130%] bg-gradient-to-b from-transparent via-[#C9A84C]/35 to-transparent rotate-[15deg] pointer-events-none z-10" />

      {/* Floating Content Interface - Bottom-left third */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          <div className="lg:col-span-7 flex flex-col justify-end space-y-6 text-left">
            <div>
              {/* Eyebrow */}
              <p className="font-mono text-[10px] sm:text-[11px] font-normal tracking-[0.4em] text-[#C9A84C] uppercase flex items-center gap-4 mb-2 select-none">
                <span className="w-10 h-[1.5px] bg-[#C9A84C] block shrink-0" />
                <span>Luxury Cinema & Photography</span>
              </p>

              {/* Headline with Staggered Word Entry */}
              <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] text-white leading-[1.08] tracking-[-0.01em] uppercase font-bold">
                <AnimatePresence mode="popLayout">
                  <span className="flex flex-wrap gap-x-3.5 sm:gap-x-4.5">
                    {slides[currentSlide].headlineParts.map((part, wordIdx) => (
                      <motion.span
                        key={`${currentSlide}-word-${wordIdx}`}
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          type: "spring",
                          damping: 18,
                          stiffness: 90,
                          delay: wordIdx * 0.08,
                        }}
                        className={`inline-block select-none ${
                          part.italicGold
                            ? "text-[#E2C97E] italic font-serif lowercase first-letter:uppercase font-normal"
                            : "text-white"
                        }`}
                      >
                        {part.text}
                      </motion.span>
                    ))}
                  </span>
                </AnimatePresence>
              </h1>

              {/* Subtext - Fades in 400ms after the headline finishes */}
              <div className="mt-4 min-h-[60px] sm:min-h-[56px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentSlide}-subtext`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.65,
                    }}
                    className="text-[#D4D0C8] text-[15px] sm:text-[16px] font-normal font-sans max-w-[520px] leading-[1.8] tracking-[0.01em]"
                  >
                    {slides[currentSlide].subtext}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* CTAs slide up 200ms after subtext completes validation */}
            <div className="min-h-[56px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentSlide}-ctas`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.95,
                  }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={slides[currentSlide].ctaPrimary.action}
                    className="bg-[#C9A84C] hover:bg-[#E2C97E] hover:scale-102 text-black font-sans font-semibold text-[11px] tracking-[0.25em] uppercase px-10 py-4.5 transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2 leading-[1.5]"
                  >
                    <span>{slides[currentSlide].ctaPrimary.label}</span>
                  </button>
                  <button
                    onClick={slides[currentSlide].ctaSecondary.action}
                    className="group border border-white/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 text-white hover:text-[#C9A84C] font-sans font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-4.5 bg-transparent transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2.5 leading-[1.5]"
                  >
                    <span className="w-8 h-[1px] bg-white group-hover:bg-[#C9A84C] transition duration-300" />
                    <span>{slides[currentSlide].ctaSecondary.label}</span>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup Luxury Statistics Columns (Desktop absolute right-16) */}
      <div className="hidden lg:flex flex-col gap-6 absolute right-16 bottom-28 z-20 text-right select-none">
        <div className="group">
          <div className="font-serif text-[44px] md:text-[48px] font-light text-[#C9A84C] leading-none">
            500<sup className="text-[20px] font-sans ml-0.5">+</sup>
          </div>
          <div className="text-[9px] font-sans font-semibold tracking-[0.25em] text-[#888880] uppercase mt-1">
            Events Covered
          </div>
        </div>
        <div className="group">
          <div className="font-serif text-[44px] md:text-[48px] font-light text-[#C9A84C] leading-none">
            8
          </div>
          <div className="text-[9px] font-sans font-semibold tracking-[0.25em] text-[#888880] uppercase mt-1">
            Years of Experience
          </div>
        </div>
        <div className="group">
          <div className="font-serif text-[44px] md:text-[48px] font-light text-[#C9A84C] leading-none">
            100<sup className="text-[20px] font-sans ml-0.5">%</sup>
          </div>
          <div className="text-[9px] font-sans font-semibold tracking-[0.25em] text-[#888880] uppercase mt-1">
            Client Satisfaction
          </div>
        </div>
      </div>

      {/* Slim Dot Indicators (bottom-center) & Ghost Previous/Next Arrows */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 lg:px-16 pointer-events-none">
        
        {/* Left Arrow Button (hidden on mobile) */}
        <div className="hidden sm:block pointer-events-auto">
          <button
            onClick={prevSlide}
            className="group/btn p-3 border border-white/10 hover:border-[#C9A84C] bg-black/20 hover:bg-black/50 text-white hover:text-[#C9A84C] rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
            aria-label="Previous Cinematic Slide"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
          </button>
        </div>

        {/* Slim Gold Dot Indicators (Center aligned, user interactive) */}
        <div className="flex gap-3 mx-auto lg:mx-0 pointer-events-auto items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
              className="group py-3 px-1 cursor-pointer focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-1 transition-all duration-300 rounded-none ${
                  currentSlide === index
                    ? "w-8 bg-[#C9A84C]"
                    : "w-3.5 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right Arrow Button (hidden on mobile) */}
        <div className="hidden sm:block pointer-events-auto">
          <button
            onClick={nextSlide}
            className="group/btn p-3 border border-white/10 hover:border-[#C9A84C] bg-black/20 hover:bg-black/50 text-white hover:text-[#C9A84C] rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
            aria-label="Next Cinematic Slide"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

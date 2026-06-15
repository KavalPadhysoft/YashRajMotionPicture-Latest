import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, X, Eye } from "lucide-react";
import { portfolioItems } from "../data";

// Type definitions
type FilterType = "all" | "wedding" | "pre-wedding" | "fashion" | "corporate";

interface TechnicalSpec {
  lens: string;
  aperture: string;
  shutter: string;
  elevation: string;
}

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  // Elite camera focal / cinematic details
  const technicalSpecs: Record<string, TechnicalSpec> = {
    "pt-1": { lens: "ANAMORPHIC 85MM T1.5", aperture: "f/1.4", shutter: "1/48", elevation: "RED RAPTOR S35" },
    "pt-2": { lens: "ZEISS COOKE prime 35MM", aperture: "f/2.2", shutter: "1/96", elevation: "ARRI ALEXA LF" },
    "pt-3": { lens: "LEICA NOCTILUX 50MM F0.95", aperture: "f/0.95", shutter: "1/48", elevation: "SONY VENICE 2" },
    "pt-4": { lens: "SUPER-WIDE OLYMPUS 24MM", aperture: "f/4.0", shutter: "1/200", elevation: "RED MONSTRO 8K" },
    "pt-5": { lens: "ANAMORPHIC CINE 50MM T1.8", aperture: "f/1.8", shutter: "1/48", elevation: "ARRI MINI LF" },
    "pt-6": { lens: "HASSELBLAD PORTRAIT 100MM", aperture: "f/2.2", shutter: "1/120", elevation: "ALEXA 65" },
  };

  // Predefined geometric ratios to maintain rhythmic masonry layout
  const aspectRatios: Record<string, string> = {
    "pt-1": "aspect-[3/4]",
    "pt-2": "aspect-[16/10]",
    "pt-3": "aspect-[2/3]",
    "pt-4": "aspect-[16/9]",
    "pt-5": "aspect-square",
    "pt-6": "aspect-[3/4]",
  };

  const filteredItems = portfolioItems.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  const getCount = (catId: string) => {
    return catId === "all"
      ? portfolioItems.length
      : portfolioItems.filter((i) => i.category === catId).length;
  };

  const handleNext = () => {
    if (activeIdx !== null && filteredItems.length > 0) {
      setDirection(1);
      const nextIdx = (activeIdx + 1) % filteredItems.length;
      setActiveIdx(nextIdx);
      window.location.hash = `photo-${filteredItems[nextIdx].id}`;
    }
  };

  const handlePrev = () => {
    if (activeIdx !== null && filteredItems.length > 0) {
      setDirection(-1);
      const prevIdx = (activeIdx - 1 + filteredItems.length) % filteredItems.length;
      setActiveIdx(prevIdx);
      window.location.hash = `photo-${filteredItems[prevIdx].id}`;
    }
  };

  const triggerOpenLightbox = (index: number) => {
    setActiveIdx(index);
    window.location.hash = `photo-${filteredItems[index].id}`;
  };

  const triggerCloseLightbox = () => {
    setActiveIdx(null);
    history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  // Body scroll locking when lightbox is active
  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIdx]);

  // URL Hash Synchronizer: Open photo from hash direct connection
  useEffect(() => {
    const syncWithHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#photo-")) {
        const photoId = hash.replace("#photo-", "");
        const matchedItem = portfolioItems.find((it) => it.id === photoId);
        
        if (matchedItem) {
          // If item's category does not match active filter, force reset filter to 'all' to ensure visibility
          if (filter !== "all" && matchedItem.category !== filter) {
            setFilter("all");
            return; // State triggers update, next execution of this effect will find index correctly
          }
          const matchedIdx = filteredItems.findIndex((it) => it.id === photoId);
          if (matchedIdx !== -1 && activeIdx !== matchedIdx) {
            setActiveIdx(matchedIdx);
          }
        }
      }
    };

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, [filter, filteredItems, activeIdx]);

  // Keyboard navigation & Escape key binder
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx !== null) {
        if (e.key === "Escape") {
          triggerCloseLightbox();
        } else if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "ArrowLeft") {
          handlePrev();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, filteredItems]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 60) {
      if (swipeDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentItem = activeIdx !== null ? filteredItems[activeIdx] : null;

  // Custom 300ms fade duration for filtering tab update animation
  const filterTransition = { duration: 0.3, ease: "easeInOut" };

  return (
    <section
      id="gallery-exhibition"
      className="py-24 bg-[#0A0A0A] relative text-center select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Page Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          {/* Badge Above */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black border border-[#C9A84C]/25 rounded-none mb-6">
            <span className="font-mono text-[11px] font-normal text-[#C9A84C] tracking-[0.2em] leading-[1.5] uppercase">
              ✦ PRESTIGIOUS DIGITAL WORKBOOK
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-serif font-bold text-white tracking-[-0.01em] leading-[1.1] uppercase text-center max-w-2xl">
            EXHIBITION of <br />
            <span className="text-[#C9A84C] italic font-normal font-serif lowercase">celluloid</span> <br />
            HEIRLOOMS
          </h2>

          {/* Thin Gold Divider */}
          <div className="w-24 h-[1px] bg-[#C9A84C]/60 my-6" />

          {/* Muted Subtext */}
          <p className="font-mono text-[11px] font-normal text-[#A89F8C] tracking-[0.1em] max-w-xl mx-auto leading-[1.5]">
            Structural symmetry. Elite lighting. Deep emotional connectivity.
          </p>
        </div>

        {/* Dynamic Filter Tabs List */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 mb-16 max-w-4xl mx-auto border-b border-[#C9A84C]/15 pb-6">
          {[
            { id: "all", label: "ALL COLLECTIONS" },
            { id: "wedding", label: "WEDDINGS" },
            { id: "pre-wedding", label: "PRE-WEDDINGS" },
            { id: "fashion", label: "HIGH FASHION" },
            { id: "corporate", label: "CORPORATE" },
          ].map((cat, idx, arr) => {
            const isActive = filter === cat.id;
            const itemQty = getCount(cat.id);
            return (
              <React.Fragment key={cat.id}>
                <button
                  onClick={() => {
                    setFilter(cat.id as FilterType);
                    setActiveIdx(null);
                  }}
                  className={`font-mono text-[11px] font-normal tracking-[0.15em] uppercase py-1.5 transition-all duration-300 relative cursor-pointer ${
                    isActive ? "text-[#C9A84C]" : "text-[#A89F8C] hover:text-[#D4D0C8]"
                  }`}
                >
                  <span>
                    {cat.label} · {itemQty}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="galleryTabUnderline"
                      className="absolute bottom-[-6px] left-0 right-0 h-[1.5px] bg-[#C9A84C]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
                {idx < arr.length - 1 && (
                  <span className="text-gray-700 font-mono text-[11px] select-none px-1">
                    /
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="w-full relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={filterTransition}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
            >
              {filteredItems.map((item, index) => {
                const absoluteIdx = filteredItems.findIndex((it) => it.id === item.id);
                const itemSpecs = technicalSpecs[item.id] || { lens: "CINE PRIME 50MM", aperture: "f/1.8", shutter: "1/48", elevation: "CINE ARCHIVE" };
                
                // Determine responsive Column Spans based on index for the prestigious asymmetric look
                let colSpanClass = "md:col-span-12 h-[350px]";
                if (filteredItems.length >= 6) {
                  if (index === 0) colSpanClass = "md:col-span-7 md:row-span-2 min-h-[380px] md:min-h-[520px]";
                  else if (index === 1 || index === 2) colSpanClass = "md:col-span-5 min-h-[248px]";
                  else colSpanClass = "md:col-span-4 min-h-[256px]";
                } else if (filteredItems.length === 5) {
                  if (index === 0) colSpanClass = "md:col-span-8 md:row-span-2 min-h-[380px] md:min-h-[520px]";
                  else if (index === 1) colSpanClass = "md:col-span-4 min-h-[248px]";
                  else colSpanClass = "md:col-span-4 min-h-[256px]";
                } else if (filteredItems.length === 4) {
                  if (index === 0) colSpanClass = "md:col-span-8 min-h-[380px]";
                  else if (index === 1) colSpanClass = "md:col-span-4 min-h-[380px]";
                  else colSpanClass = "md:col-span-6 min-h-[280px]";
                } else if (filteredItems.length === 3) {
                  colSpanClass = "md:col-span-4 min-h-[320px]";
                } else if (filteredItems.length === 2) {
                  colSpanClass = "md:col-span-6 min-h-[360px]";
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => triggerOpenLightbox(absoluteIdx)}
                    className={`relative group rounded-none overflow-hidden cursor-pointer bg-black/60 border border-[#C9A84C]/10 hover:border-[#C9A84C]/50 transition-all duration-500 ease-out flex flex-col justify-between ${colSpanClass}`}
                    id={`portfolio-card-${item.id}`}
                  >
                    {/* Natural Ratio Pure Image Fill */}
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover block transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.85] contrast-[1.02] group-hover:brightness-[0.45]"
                      loading="lazy"
                    />

                    {/* Corner accents representing hand-aligned custom framing */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#C9A84C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#C9A84C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Lightbox Trigger Corner Spec Accent */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 border border-[#C9A84C]/45 text-[9px] font-mono text-[#C9A84C] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none">
                      {itemSpecs.elevation || "CINE ARCHIVE"}
                    </div>

                    {/* Left-Top: Default Static Mini Tag for high luxury reference */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#0a0a0a]/90 text-[9.5px] font-mono text-[#C9A84C] tracking-[0.14em] border border-[rgba(201,168,76,0.15)] group-hover:border-[#C9A84C]/40 transition-colors pointer-events-none">
                      {item.category.toUpperCase()}
                    </div>

                    {/* On Hover Cinematic Dark Gradient & Interactive metadata */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6 pb-6 pt-16 flex flex-col justify-end text-left pointer-events-none">
                      {/* Interactive slide-up contents panel */}
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-1.5">
                        <span className="font-mono text-[10px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.1] block">
                          {item.location.toUpperCase()}
                        </span>
                        <h4 className="font-serif text-[22px] sm:text-[24px] font-bold text-white uppercase tracking-wide leading-tight">
                          {item.title}
                        </h4>
                        <p className="font-sans text-[12px] sm:text-[13px] text-[#A89F8C] line-clamp-2 leading-relaxed pt-1 font-light">
                          {item.description}
                        </p>
                        <div className="inline-flex items-center gap-1.5 text-[#C9A84C] font-mono text-[9px] tracking-[2.5px] uppercase pt-2">
                          <span>VIEW FRAME STILL</span>
                          <span className="text-[12px]">✦</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <span className="text-[10px] tracking-[3px] font-mono text-gray-500 uppercase">
                No archived portfolios matched.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* LUXURIOUS LIGHTBOX VIEWER WITH SCALED BLUR DETAILED BACKDROP */}
      <AnimatePresence>
        {activeIdx !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={triggerCloseLightbox}
            className="fixed inset-0 z-[1000] bg-black/92 backdrop-blur-md flex flex-col justify-between"
            id="gallery-lightbox-overlay"
          >
            {/* Preload dynamic indicators for next/prev pages */}
            <div className="hidden border-0 p-0 m-0 w-0 h-0 invisible select-none">
              {filteredItems[(activeIdx - 1 + filteredItems.length) % filteredItems.length] && (
                <img
                  src={filteredItems[(activeIdx - 1 + filteredItems.length) % filteredItems.length].url}
                  referrerPolicy="no-referrer"
                  aria-hidden="true"
                />
              )}
              {filteredItems[(activeIdx + 1) % filteredItems.length] && (
                <img
                  src={filteredItems[(activeIdx + 1) % filteredItems.length].url}
                  referrerPolicy="no-referrer"
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Lightbox Header Close Utility */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-b from-black/60 to-transparent absolute top-0 left-0 right-0 z-[1001] pointer-events-none">
              <div className="pointer-events-auto">
                <span className="text-[10px] tracking-[4px] font-mono text-[#C9A84C] uppercase font-bold">
                  Yash Raj Gallery / frame {activeIdx + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  triggerCloseLightbox();
                }}
                className="p-2 sm:p-3 bg-black/40 border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#C9A84C] hover:text-[#0A0A0A] hover:bg-[#C9A84C] cursor-pointer transition-all duration-300 rounded-none pointer-events-auto flex items-center justify-center shadow-lg"
                aria-label="Secure close exhibition still"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Main Picture Viewport */}
            <div
              className="flex-1 w-full h-full flex items-center justify-center px-4 sm:px-12 relative select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Previous Floating Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-6 md:left-8 p-2.5 sm:p-3 bg-black/60 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] cursor-pointer transition-all duration-300 rounded-none z-[1010] shadow-lg backdrop-blur-sm flex items-center justify-center"
                aria-label="Previous Frame Still"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2px]" />
              </button>

              {/* Central Dynamic Animated Picture Container */}
              <div className="flex-1 flex items-center justify-center h-full max-h-[78vh] xl:max-h-[82vh] relative select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                    className="max-w-[90vw] max-h-[85vh] flex items-center justify-center pointer-events-auto"
                  >
                    <img
                      src={currentItem.url}
                      alt={currentItem.title}
                      referrerPolicy="no-referrer"
                      className="max-w-[90vw] max-h-[72vh] object-contain select-none pointer-events-none rounded-none shadow-[0_30px_70px_rgba(0,0,0,0.95)] border border-white/5"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Floating Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-6 md:right-8 p-2.5 sm:p-3 bg-black/60 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] cursor-pointer transition-all duration-300 rounded-none z-[1010] shadow-lg backdrop-blur-sm flex items-center justify-center"
                aria-label="Next Frame Still"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2px]" />
              </button>
            </div>

            {/* Bottom Metadata Panel Shelf */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050505] border-t border-[#C9A84C]/25 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-[1020] text-left"
            >
              <div>
                <span className="font-mono text-[11px] font-normal text-[#C9A84C] uppercase tracking-[0.15em] mb-2 block leading-[1.5]">
                  {currentItem.category} Collection
                </span>
                <h3 className="text-[18px] font-sans font-semibold text-[#FFFFFF] uppercase tracking-[0.08em] leading-[1.1]">
                  {currentItem.title}
                </h3>
              </div>

              <div className="text-right">
                <p className="font-mono text-[11px] font-normal text-[#A89F8C] tracking-[0.1em] uppercase leading-[1.5]">
                  {(technicalSpecs[currentItem.id] || { lens: "CINE PRIME 50MM" }).lens} • {(technicalSpecs[currentItem.id] || { aperture: "F1.4" }).aperture} • {(technicalSpecs[currentItem.id] || { elevation: "RED DIGITAL" }).elevation}
                </p>
              </div>
            </div>

            {/* Mobile swipe indicator info helper */}
            <div className="absolute bottom-[108px] left-0 right-0 flex justify-center md:hidden pointer-events-none">
              <span className="text-[8px] font-mono tracking-[2px] text-gray-500 uppercase bg-black/70 px-2 py-1 rounded-none">
                ← SWIPE TO BROWSE →
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

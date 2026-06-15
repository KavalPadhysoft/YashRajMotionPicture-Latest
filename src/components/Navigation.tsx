import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavigationProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  setTab,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "investment", label: "Investment" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleTabChange = (tabId: string) => {
    setTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mt-0 mb-0 ml-0 ${
        scrolled
          ? "bg-black/90 backdrop-blur-[12px] border-b border-[#C9A84C]/25 shadow-2xl pt-[12px] pb-[10px]"
          : currentTab === "home"
          ? "bg-transparent border-b border-transparent pt-[12px] pb-[10px]"
          : "bg-black/85 backdrop-blur-[12px] border-b border-white/10 pt-[12px] pb-[10px]"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex items-center justify-between gap-2 md:gap-4 lg:gap-3 xl:gap-6">
          <div
            className="cursor-pointer group hover:opacity-95 transition duration-300 shrink-0"
            onClick={() => handleTabChange("home")}
            id="brand-logo"
          >
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 shrink-0" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`relative font-sans font-medium uppercase py-5 transition duration-300 cursor-pointer whitespace-nowrap lg:text-[11px] lg:tracking-[0.08em] xl:text-[12.5px] xl:tracking-[0.1em] 2xl:text-[13px] 2xl:tracking-[0.12em] ${
                  currentTab === item.id
                    ? "text-[#C9A84C]"
                    : "text-white hover:text-[#C9A84C]"
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-2 left-0 right-0 h-[1.5px] bg-[#C9A84C]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Book Session Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onOpenBooking}
              className="bg-transparent hover:bg-[#C9A84C] border border-[#C9A84C] text-white hover:text-black font-sans font-semibold transition-all duration-300 cursor-pointer uppercase rounded-none leading-[1.5] whitespace-nowrap lg:text-[11px] lg:tracking-[0.1em] lg:px-3.5 lg:py-2 xl:text-[12.5px] xl:tracking-[0.12em] xl:px-4.5 xl:py-2.5 2xl:text-[13px] 2xl:tracking-[0.15em] 2xl:px-6"
              id="header-cta-booking"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center lg:hidden gap-2.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 border border-white/10 bg-[#141414]/60 text-gray-300 hover:text-white rounded-full transition duration-300 backdrop-blur-md"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Pane */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 border-t border-[#C9A84C]/20 flex flex-col p-6 gap-5 shadow-2xl bg-black/95 backdrop-blur-[15px]"
            id="mobile-nav-pane"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`text-left text-[13px] tracking-[0.12em] font-sans font-medium uppercase py-1.5 transition ${
                    currentTab === item.id
                      ? "text-[#C9A84C] border-l border-[#C9A84C] pl-3"
                      : "text-white hover:text-[#C9A84C]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="text-center font-mono text-[11px] text-[#A89F8C] tracking-[0.1em] leading-[1.5]">
              Ahmedabad & Gujarat Premier Cinema Studio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

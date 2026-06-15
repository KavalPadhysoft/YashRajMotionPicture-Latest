import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ServiceDetails } from "./components/ServiceDetails";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Investment } from "./components/Investment";
import { PageBanner } from "./components/PageBanner";
import { EnquiryForm } from "./components/EnquiryForm";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { Footer } from "./components/Footer";
import { MotionWrapper } from "./components/MotionWrapper";
import { Mail, Phone, MapPin, Clock, X } from "lucide-react";
import { services } from "./data";

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>(
    "Wedding Films & Photography"
  );
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const handleTabChange = (tabId: string) => {
    if (services.some((s) => s.id === tabId)) {
      setCurrentTab("services");
      setActiveServiceId(tabId);
    } else {
      setCurrentTab(tabId);
      if (tabId === "services") {
        setActiveServiceId(null);
      }
    }
    // Smooth scroll to top for standard tab updates and detail openings
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleQuoteRequest = (serviceName: string) => {
    setSelectedQuoteService(serviceName);
    handleTabChange("contact");
    setTimeout(() => {
      const panel = document.getElementById("enquiry-lead-panel");
      if (panel) {
        panel.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 150);
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#f0ece4] font-sans min-h-screen flex flex-col justify-between selection:bg-[#d4af64] selection:text-black">
      {/* Navigation */}
      <Navigation
        currentTab={currentTab}
        setTab={handleTabChange}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Core Router */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {/* Home Tab */}
          {currentTab === "home" && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero
                onBookClick={handleOpenBooking}
                onExploreClick={() => {
                  handleTabChange("portfolio");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              />

              {/* bento grid highlights section */}
              <section className="py-24 bg-[#0a0a0a] border-y border-[#5a5650]/20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <MotionWrapper direction="up" distance={25} delay={0.05}>
                    <div className="text-center max-w-xl mx-auto mb-16">
                      <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block">
                        STUDIO EXCELLENCE INDEX
                      </span>
                      <h2 className="text-[42px] md:text-[48px] font-serif font-bold text-[#FFFFFF] mt-2 tracking-[-0.01em] leading-[1.1] uppercase">
                        Production <i className="italic font-normal text-[#C9A84C]">Highlights</i>
                      </h2>
                      <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
                    </div>
                  </MotionWrapper>

                  <MotionWrapper
                    stagger={true}
                    direction="up"
                    distance={30}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    id="home-bento-grid"
                  >
                    <div className="p-8 h-full bg-[#141414] border border-[rgba(201,168,76,0.15)] hover:border-[#d4af64]/40 rounded-none transition group relative overflow-hidden text-left">
                      <span className="font-mono text-[11px] font-normal tracking-[0.15em] text-[#C9A84C] block mb-2.5 leading-[1.5]">
                        01 / DISCIPLINE
                      </span>
                      <h3 className="text-[18px] font-sans font-semibold text-[#FFFFFF] uppercase mb-3 tracking-[0.08em] leading-[1.1]">
                        Architectural Symmetry
                      </h3>
                      <p className="text-[15px] font-normal text-[#D4D0C8] leading-[1.75] tracking-[0.01em] max-w-[420px] transition-colors">
                        Every frame is mapped mathematically. We align our lens paths with Ahmedabad's majestic historical symmetries to construct powerful, royal heirlooms.
                      </p>
                    </div>

                    <div className="p-8 h-full bg-[#141414] border border-[rgba(201,168,76,0.15)] hover:border-[#d4af64]/40 rounded-none transition group relative overflow-hidden text-left">
                      <span className="font-mono text-[11px] font-normal tracking-[0.15em] text-[#C9A84C] block mb-2.5 leading-[1.5]">
                        02 / COLOR SUITE
                      </span>
                      <h3 className="text-[18px] font-sans font-semibold text-[#FFFFFF] uppercase mb-3 tracking-[0.08em] leading-[1.1]">
                        Midnight Gold Texture
                      </h3>
                      <p className="text-[15px] font-normal text-[#D4D0C8] leading-[1.75] tracking-[0.01em] max-w-[420px] transition-colors">
                        Our unique color-spaces emphasize soft ambient candlelight, deep shadows, and pure warm metallic hues, guaranteeing stunning visual depth suited for elite screens.
                      </p>
                    </div>

                    <div className="p-8 h-full bg-[#141414] border border-[rgba(201,168,76,0.15)] hover:border-[#d4af64]/40 rounded-none transition group relative overflow-hidden text-left">
                      <span className="font-mono text-[11px] font-normal tracking-[0.15em] text-[#C9A84C] block mb-2.5 leading-[1.5]">
                        03 / COURIER CODE
                      </span>
                      <h3 className="text-[18px] font-sans font-semibold text-[#FFFFFF] uppercase mb-3 tracking-[0.08em] leading-[1.1]">
                        Guaranteed Delivery
                      </h3>
                      <p className="text-[15px] font-normal text-[#D4D0C8] leading-[1.75] tracking-[0.01em] max-w-[420px] transition-colors">
                        Backing our creative outputs with rigorous organization. Final processed files and leather-bound premium albums are delivered securely within exactly 4 to 5 weeks.
                      </p>
                    </div>
                  </MotionWrapper>
                </div>
              </section>

              {/* Service catalog row */}
              <ServiceDetails
                onQuoteRequested={handleQuoteRequest}
                activeServiceId={null}
                onSelectService={(serviceId) => {
                  if (serviceId) {
                    handleTabChange(serviceId);
                  } else {
                    setActiveServiceId(null);
                  }
                }}
              />

              {/* Gallery elements */}
              <Gallery />

              {/* Redesigned Home Page Sections: About us subset block, systematic process grid, and core CTA consultation band */}
              
              {/* About us narrative */}
              <section className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/15 relative overflow-hidden text-left" id="home-about-narrative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Frame column */}
                    <div className="lg:col-span-5 relative" id="about-visual-column">
                      <div className="relative border border-[#C9A84C]/30 p-2 bg-[#020202]">
                        <img 
                          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
                          alt="Wedding Film Director Yash Raj" 
                          referrerPolicy="no-referrer"
                          className="w-full h-[450px] object-cover filter brightness-[0.8] contrast-[1.05]"
                        />
                        {/* Luxury absolute badge */}
                        <div className="absolute bottom-6 right-6 bg-[#0A0A0A] border border-[#C9A84C] px-5 py-3 select-none">
                          <p className="font-serif text-[24px] text-[#C9A84C] font-light leading-none">8+</p>
                          <p className="font-mono text-[8px] tracking-widest text-white uppercase mt-1">Yrs Excellence</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Narrative column */}
                    <div className="lg:col-span-7 space-y-6" id="about-text-column">
                      <span className="font-mono text-[10px] tracking-[0.4em] text-[#C9A84C] uppercase block mb-1">
                        The Art of Seeing the Unseen
                      </span>
                      <h2 className="font-serif text-[34px] sm:text-[42px] font-bold text-white uppercase tracking-wide leading-tight">
                        Crafting Timeless <br />
                        <span className="text-[#C9A84C] italic font-normal font-serif lowercase">fine-art</span> Narratives
                      </h2>
                      <div className="w-16 h-[1.5px] bg-[#C9A84C] my-4" />
                      <p className="text-[15px] sm:text-[16px] text-[#A89F8C] font-normal leading-relaxed max-w-2xl">
                        Our focus is simple: to create visuals that don’t just record a milestone, but evoke the complete weight of its emotional atmosphere. Centered in Ahmedabad and operating globally, we are a boutique team of elite directors, cinematographers, and fine-art colorists dedicated to preserving grand heritages.
                      </p>

                      {/* parameters bento small list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-[#5a5650]/20">
                        <div>
                          <h4 className="text-sm font-sans font-semibold text-white tracking-widest uppercase mb-1">Symphonic Lighting</h4>
                          <p className="text-xs text-[#888880] leading-relaxed">Emphasizing delicate ambient shadows and pure golden candlelight textures.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-sans font-semibold text-white tracking-widest uppercase mb-1">Elite Cinema Systems</h4>
                          <p className="text-xs text-[#888880] leading-relaxed">Recorded with industry-leading RED Digital and Zeiss prime lenses.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Systematic process bento timeline */}
              <section className="py-24 bg-[#020202] border-t border-[#5a5650]/15 text-left" id="home-process-grid">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-[10px] tracking-[0.4em] text-[#C9A84C] uppercase leading-none block">
                      OUR COUTURE PROCESS
                    </span>
                    <h2 className="font-serif text-[34px] sm:text-[42px] font-bold text-white uppercase tracking-wider mt-3">
                      From Script to Screen
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative" id="process-steps">
                    {/* Step 1 */}
                    <div className="p-8 bg-[#0a0a0a] border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 transition-all duration-300">
                      <span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] font-semibold block mb-4">01 / CONSULTATION</span>
                      <h4 className="text-base font-sans font-bold text-white uppercase tracking-wider mb-2">Initial Storyboard</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        We sit together near Sindhu Bhavan Road HQ to map out your unique timeline, traditional scales, and specific mood boards.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="p-8 bg-[#0a0a0a] border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 transition-all duration-300">
                      <span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] font-semibold block mb-4">02 / RESERVATION</span>
                      <h4 className="text-base font-sans font-bold text-white uppercase tracking-wider mb-2">Creative Package</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Lock in specialized coverage packages, certified aerial drone pilots, master colorists, and fine art books.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="p-8 bg-[#0a0a0a] border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 transition-all duration-300">
                      <span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] font-semibold block mb-4">03 / THE EVENT SHOOT</span>
                      <h4 className="text-base font-sans font-bold text-white uppercase tracking-wider mb-2">Artful Directing</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Experiencing discrete and natural cinematic direction on set guided to maintain raw authentic smiles and moments.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="p-8 bg-[#0a0a0a] border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 transition-all duration-300">
                      <span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] font-semibold block mb-4">04 / SECURE DELIVERY</span>
                      <h4 className="text-base font-sans font-bold text-white uppercase tracking-wider mb-2">Elite Masterwork</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Your final post-processed graded cinematic teaser films and luxury physical albums delivered safely in 4 to 5 weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social layout & comments feed */}
              <Testimonials />

              {/* Luxury CTA consultation band */}
              <section className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/15 relative overflow-hidden text-center" id="home-cta-band">
                {/* Visual backdrop watermark */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
                  <span className="font-mono text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase block mb-2">
                    READY TO BEGIN YOUR EPIC JOURNEY?
                  </span>
                  <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-white uppercase leading-tight tracking-wide">
                    Let’s Create Something <span className="text-[#E2C97E] italic font-normal font-serif lowercase">historic</span> Together
                  </h2>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#A89F8C] max-w-xl mx-auto leading-relaxed">
                    Slots are highly limited per traditional calendar season in Gujarat to ensure unmatched direct executive dedication. Connect to reserve your session.
                  </p>
                  
                  {/* Buttons group */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                    <button
                      onClick={handleOpenBooking}
                      className="bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-sans font-semibold text-[11px] tracking-[0.25em] uppercase px-12 py-4.5 transition-all duration-300 rounded-none cursor-pointer"
                    >
                      Book a Consultation
                    </button>
                    
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-white/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 text-white hover:text-[#C9A84C] font-sans font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-4.5 bg-transparent transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2.5"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* About Us Tab */}
          {currentTab === "about" && (
            <motion.div
              key="about-tab-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}

          {/* Services Tab */}
          {currentTab === "services" && (
            <motion.div
              key="services-tab-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title={
                  services.find((s) => s.id === activeServiceId)?.title.toUpperCase() || "Services"
                }
                backgroundImage={
                  services.find((s) => s.id === activeServiceId)?.bannerImage ||
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
                }
              />
              <div className="py-12 bg-[#0a0a0a]">
                <ServiceDetails
                  onQuoteRequested={handleQuoteRequest}
                  activeServiceId={activeServiceId}
                  onSelectService={setActiveServiceId}
                />
              </div>
            </motion.div>
          )}

          {/* Portfolio Tab */}
          {currentTab === "portfolio" && (
            <motion.div
              key="portfolio-tab-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title="Portfolio"
                backgroundImage="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12 bg-[#0a0a0a]">
                <Gallery />
              </div>
            </motion.div>
          )}

          {/* Investment Tab */}
          {currentTab === "investment" && (
            <motion.div
              key="investment-tab-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title="Investment"
                backgroundImage="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12 bg-[#0a0a0a]">
                <Investment onPackageSelect={handleQuoteRequest} />
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {currentTab === "contact" && (
            <motion.div
              key="contact-tab-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title="CONTACT US"
                backgroundImage="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2000"
              />

              <div className="pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
                <div className="text-center mb-16">
                  <span className="text-[10px] tracking-[0.4em] font-mono font-medium text-luxury-gold uppercase block mb-3">
                    Direct Connections
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#f0ece4] uppercase tracking-wider">
                    Let's Create Historic Visuals
                  </h2>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left"
                  id="contact-bento-grid"
                >
                  {/* Direct line */}
                  <div
                    className="bg-[#020202] border border-[#5a5650]/20 p-8 sm:p-10 flex flex-col justify-between"
                    id="contact-bento-phone"
                  >
                    <div>
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        DIRECT AUDIO LINE
                      </span>
                      <h3 className="text-xl font-serif text-[#f0ece4] uppercase tracking-wide">
                        Call Back Coordinator
                      </h3>
                      <p className="text-xs text-gray-500 font-light mt-3 leading-relaxed">
                        Talk with Yash Raj on slot availability matching your traditional event dates. We recommend booking 6-12 months in advance.
                      </p>
                    </div>
                    <div className="mt-8">
                      <a
                        href="tel:+919876543210"
                        className="inline-flex items-center justify-center gap-3 w-full bg-[#d4af64] hover:bg-[#b3914e] text-black text-[10px] tracking-[3px] font-sans font-semibold py-4.5 uppercase rounded-none transition duration-300"
                      >
                        <Phone className="w-4 h-4 fill-black text-black shrink-0" />
                        <span>Call +91 XXXXX XXXXX</span>
                      </a>
                    </div>
                  </div>

                  {/* Location card */}
                  <div
                    className="bg-[#020202] border border-[#5a5650]/20 p-8 sm:p-10 flex flex-col justify-between"
                    id="contact-bento-location"
                  >
                    <div>
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        STUDIO LOCATION
                      </span>
                      <h3 className="text-xl font-serif text-[#f0ece4] uppercase tracking-wide">
                        Ahmedabad HQ
                      </h3>
                      <div className="flex items-start gap-2.5 text-xs text-gray-300 font-light mt-4 leading-relaxed">
                        <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                        <span>
                          Crescent Commercial Arts Hub,
                          <br />
                          Near Sindhu Bhavan Road, Bodakdev,
                          <br />
                          Ahmedabad, Gujarat 380054
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 border-t border-[#5a5650]/20 pt-6">
                      <span className="text-[9px] tracking-[2px] font-mono text-luxury-gold uppercase block mb-2">
                        Timings
                      </span>
                      <p className="text-xs text-gray-400">10:30 AM – 7:30 PM (IST)</p>
                    </div>
                  </div>

                  {/* Digital coordinates */}
                  <div
                    className="bg-[#020202] border border-[#5a5650]/20 p-8 sm:p-10 flex flex-col justify-between"
                    id="contact-bento-digital"
                  >
                    <div>
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        DIGITAL CHANNELS
                      </span>
                      <h3 className="text-xl font-serif text-[#f0ece4] uppercase tracking-wide">
                        Email & Socials
                      </h3>
                      <p className="text-xs text-gray-500 font-light mt-3 leading-relaxed">
                        For commercial inquiries, brand editorials, family milestones, or cinematic collaborations, write to us directly.
                      </p>
                    </div>
                    <div className="mt-8 space-y-4 border-t border-[#5a5650]/20 pt-6">
                      <a
                        href="mailto:hello@yashrajmp.com"
                        className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-[#d4af64] transition"
                      >
                        <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                        <span className="break-all font-mono">hello@yashrajmp.com</span>
                      </a>
                      <a
                        href="https://www.instagram.com/YashRajMotionPicture"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-[#d4af64] transition"
                      >
                        <span className="text-[10px] font-mono uppercase text-[#d4af64] tracking-widest">Instagram:</span>
                        <span className="font-mono">@YashRajMotionPicture</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer currentTab={currentTab} setTab={handleTabChange} />

      {/* Quick Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020202]/95 flex items-center justify-center p-4 backdrop-blur-md"
            id="quick-booking-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-2xl w-full bg-[#0a0a0a] border border-[#d4af64]/35 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-none text-left shadow-none animate-fadeIn"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 p-2 cursor-pointer bg-white/5 hover:bg-white/10 border border-[#5a5650]/20 text-white rounded-none z-10 outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="mb-6 border-b border-[#5a5650]/15 pb-4 text-left">
                <span className="text-[9px] font-sans tracking-[3px] text-luxury-gold uppercase block">
                  FAST-TRACK RESERVATION
                </span>
                <h3 className="text-xl font-serif text-[#f0ece4] uppercase mt-0.5">
                  Secure Your Cinematic Session
                </h3>
                <p className="text-[11px] text-gray-400 font-light mt-1">
                  Securing dates in Ahmedabad requires a 50% booking advance. Please fill details below to coordinate.
                </p>
              </div>
              <EnquiryForm
                initialService={selectedQuoteService}
                isMinimal={true}
                onSubmitted={() => {
                  setTimeout(() => {
                    setIsBookingModalOpen(false);
                  }, 2500);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default App;

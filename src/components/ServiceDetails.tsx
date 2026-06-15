import React from "react";
import { ArrowLeft, Video, Camera, Award, Package, Check, ChevronRight } from "lucide-react";
import { services } from "../data";
import { MotionWrapper } from "./MotionWrapper";
import { ServicesSection } from "./ServicesSection";

interface ServiceDetailsProps {
  onQuoteRequested: (serviceName: string) => void;
  activeServiceId: string | null;
  onSelectService: (serviceId: string | null) => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  onQuoteRequested,
  activeServiceId,
  onSelectService,
}) => {
  if (activeServiceId) {
    const service = services.find((s) => s.id === activeServiceId);
    if (!service) return null;

    return (
      <section
        className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20 relative overflow-hidden"
        id={`service-detail-${service.id}`}
      >
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[45%] bg-[#d4af64]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onSelectService(null)}
            className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold tracking-[0.12em] text-[#C9A84C] hover:text-white transition uppercase mb-12 group cursor-pointer leading-[1.5]"
            id="back-to-services-hub"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
            <span>Back to Services Catalog</span>
          </button>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            {/* Visual Media Block */}
            <MotionWrapper
              className="w-full lg:w-1/2 flex flex-col gap-6"
              direction="left"
              distance={30}
            >
              {service.videoUrl && (
                <div className="w-full aspect-video bg-[#020202] border border-[#C9A84C]/15 relative overflow-hidden group rounded-none">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    referrerPolicy="no-referrer"
                    poster={service.bannerImage}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    style={{ filter: "brightness(0.92) contrast(1.03)" }}
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute top-3 left-3 bg-[#0a0a0a] border border-[#C9A84C]/30 text-[#C9A84C] font-mono text-[11px] font-normal uppercase tracking-[0.15em] px-2.5 py-1 z-10 flex items-center gap-1.5 rounded-none">
                    <Video className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C] animate-pulse" />
                    <span>Featured Film</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3" id="service-photos-grid">
                {service.galleryImages.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-[#020202] border border-[rgba(201,168,76,0.15)] overflow-hidden group/img relative rounded-none"
                  >
                    <img
                      src={img}
                      alt={`${service.title} captured frame`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover scale-100 group-hover/img:scale-105 transition-transform duration-500 rounded-none"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-60 group-hover/img:opacity-10 transition-opacity" />
                  </div>
                ))}
              </div>
            </MotionWrapper>

            {/* Structured Specifications Info */}
            <MotionWrapper
              className="w-full lg:w-1/2 flex flex-col justify-center gap-4 animate-fadeIn"
              direction="right"
              distance={30}
              stagger={true}
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className="p-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-none">
                  <Camera className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <span className="font-mono text-[11px] font-normal text-[#C9A84C] uppercase tracking-[0.15em] leading-[1.5]">
                  {service.pricing}
                </span>
              </div>

              <h1 className="font-serif text-[42px] md:text-[48px] font-bold text-[#FFFFFF] uppercase mt-2 tracking-[-0.01em] leading-[1.1]">
                Explore <i className="italic font-normal text-[#C9A84C]">your</i> {service.title}
              </h1>
              <p className="text-sm font-serif italic text-[#D4D0C8] tracking-wide mb-4">
                "{service.subtitle}"
              </p>
              <div className="h-[1px] bg-[rgba(201,168,76,0.15)] my-2" />
              <p className="text-[15px] font-normal text-[#D4D0C8] leading-[1.8] tracking-[0.01em] mb-6">
                {service.longDescription}
              </p>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-left"
                id="service-specifications"
              >
                <div>
                  <h4 className="flex items-center gap-2 font-mono text-[11px] font-normal text-[#C9A84C] uppercase mb-4 tracking-[0.15em] leading-[1.5]">
                    <Award className="w-4 h-4 text-[#C9A84C]" />
                    <span>FEATURES INCLUDED</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-[1.8] text-[15px] font-normal text-[#D4D0C8]"
                      >
                        <span className="w-1.5 h-1.5 mt-1.5 bg-[#C9A84C] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-mono text-[11px] font-normal text-[#C9A84C] uppercase mb-4 tracking-[0.15em] leading-[1.5]">
                    <Package className="w-4 h-4 text-[#C9A84C]" />
                    <span>DELIVERABLES</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((deliv, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-[1.8] text-[15px] font-normal text-[#D4D0C8]"
                      >
                        <Check className="w-3.5 h-3.5 mt-0.5 text-[#C9A84C] shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row items-stretch gap-4 pt-4 border-t border-[rgba(201,168,76,0.15)]"
                id="service-ctas"
              >
                <button
                  onClick={() => onQuoteRequested(service.title)}
                  className="px-6 py-4 bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold tracking-[0.15em] text-[13px] uppercase cursor-pointer rounded-none leading-[1.5]"
                  id={`detail-quote-btn-${service.id}`}
                >
                  Request Quote
                </button>
                <a
                  href="tel:+919876543210"
                  className="px-6 py-4 border border-[rgba(201,168,76,0.25)] hover:border-[#C9A84C] text-[#FFFFFF] hover:text-[#0A0A0A] hover:bg-[#C9A84C] font-semibold tracking-[0.15em] text-[13px] uppercase text-center flex items-center justify-center gap-2 bg-[#0A0A0A] transition rounded-none leading-[1.5]"
                >
                  <span>Call Lead Director</span>
                </a>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    );
  }

  // Fallback: full catalog hub grid
  return (
    <ServicesSection onSelectService={onSelectService} />
  );
};

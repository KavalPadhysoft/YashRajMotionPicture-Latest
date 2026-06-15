import React from "react";
import { 
  Heart, 
  Camera, 
  Briefcase, 
  CalendarDays, 
  Sparkles, 
  Package, 
  Plane, 
  Video,
  LucideIcon
} from "lucide-react";
import { ServiceParallaxCard } from "./ui/service-parallax-card";
import { services } from "../data";
import { MotionWrapper } from "./MotionWrapper";

interface ServicesSectionProps {
  onSelectService: (serviceId: string | null) => void;
}

// Map service IDs to lucide icons
const iconMap: Record<string, LucideIcon> = {
  "wedding-photography": Heart,
  "pre-wedding-shoots": Camera,
  "corporate-visuals": Briefcase,
  "events-coverage": CalendarDays,
  "fashion-editorial": Sparkles,
  "product-photography": Package,
  "drone-cinematography": Plane,
  "reels-short-form": Video,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="services-hub-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block">
              INDELIBLE CINEMATIC SPECTRUM
            </span>
            <h2 className="font-serif text-[42px] md:text-[48px] font-bold text-[#FFFFFF] uppercase mt-2 tracking-[-0.01em] leading-[1.1]">
              Selected <i>Couture</i> Services
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
          </div>
        </MotionWrapper>

        {/* 3D Parallax Hover Grid: responsive layout */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" 
          id="services-parallax-grid"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.id] || Camera;
            return (
              <MotionWrapper
                key={service.id}
                direction="up"
                delay={index * 0.05}
                className="h-full"
              >
                <ServiceParallaxCard
                  icon={IconComponent}
                  title={service.title}
                  description={service.subtitle || service.shortDescription}
                  onClick={() => {
                    onSelectService(service.id);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                />
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

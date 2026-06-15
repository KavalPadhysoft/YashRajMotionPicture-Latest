import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { MotionWrapper } from "./MotionWrapper";

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  image: string; // Unsplash URL
  socials?: { instagram?: string; linkedin?: string };
}

const teamMembers: TeamMember[] = [
  {
    name: "Yashraj Shah",
    role: "Founder & Lead Photographer",
    tagline: "10+ years capturing life's finest moments with pristine visual heritage direction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    name: "Aryan Mehta",
    role: "Lead Cinematographer",
    tagline: "Master of motion, anamorphic optics, and cinematic storytelling",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    name: "Karan Shah",
    role: "Drone Pilot & Lead Editor",
    tagline: "Aerial visions, certified dual-operator, and ground-level precision editing",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    name: "Ananya Roy",
    role: "Fashion & Product Photographer",
    tagline: "Symmetrical compositions, lighting choreography, and couture campaign styling",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    socials: { instagram: "#", linkedin: "#" }
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section 
      className="bg-[#0a0a0a] py-24 border-t border-[#5a5650]/20" 
      id="about-team-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-[#C9A84C] uppercase leading-[1.5] block">
              THE VISIONARY GUJARAT CREATIVE CELL
            </span>
            <h2 className="font-serif text-[42px] md:text-[48px] font-bold text-[#FFFFFF] uppercase mt-2 tracking-[-0.01em] leading-[1.1]">
              Meet The Team
            </h2>
            <p className="font-sans text-[14px] text-[#A89F8C] italic mt-2 tracking-wide">
              The creative minds behind every frame
            </p>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
          </div>
        </MotionWrapper>

        {/* Members Grid */}
        <MotionWrapper
          stagger={true}
          direction="up"
          distance={25}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          id="about-team-grid"
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              role="article"
              aria-label={`${member.name} - ${member.role}`}
              className="group relative flex flex-col items-center bg-[#111111] overflow-hidden border border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]/60 hover:shadow-[0_10px_35px_rgba(201,168,76,0.08)] transition-all duration-500 ease-out select-none will-change-transform"
              style={{
                transitionProperty: "border-color, transform, box-shadow",
              }}
            >
              {/* Image Frame with Aspect Aspect-[3/4] */}
              <div className="w-full aspect-[3/4] relative overflow-hidden" id={`team-img-frame-${idx}`}>
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[0.55] transition-all duration-700 ease-out"
                />

                {/* Corner Accents on Card Frame */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C9A84C]/35 opacity-70 group-hover:border-[#C9A84C] group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C9A84C]/35 opacity-70 group-hover:border-[#C9A84C] group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C9A84C]/35 opacity-70 group-hover:border-[#C9A84C] group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C9A84C]/35 opacity-70 group-hover:border-[#C9A84C] group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

                {/* Overlay details that slide up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-550 ease-out">
                  {/* Text sliding up */}
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2">
                    <h3 className="font-serif text-[20px] font-bold text-white uppercase tracking-wider leading-tight">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] uppercase text-[#C9A84C] tracking-widest font-normal">
                      {member.role}
                    </p>
                    <p className="font-sans text-[12px] text-[#A89F8C] leading-relaxed mt-1">
                      {member.tagline}
                    </p>

                    {/* Social links appearing on hover */}
                    {member.socials && (
                      <div className="flex gap-4 mt-3" id={`team-socials-${idx}`}>
                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s Instagram`}
                            className="text-[#A89F8C] hover:text-[#C9A84C] hover:scale-110 transition-all duration-200"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s LinkedIn`}
                            className="text-[#A89F8C] hover:text-[#C9A84C] hover:scale-110 transition-all duration-200"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Default Static visible overlay label underneath image for non-hovered state / Mobile devices */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent p-5 group-hover:opacity-0 transition-opacity duration-350 ease-out pointer-events-none">
                  <h3 className="font-serif text-[18px] font-bold text-white uppercase tracking-wide leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[9.5px] uppercase text-[#C9A84C] tracking-[0.14em] font-normal mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
};

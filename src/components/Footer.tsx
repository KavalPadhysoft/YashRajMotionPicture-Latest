import React from "react";
import { ShieldCheck, Clock, MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  currentTab: string;
  setTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentTab, setTab }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://yashrajmotionpictures.com/#localbusiness",
        "name": "Yash Raj Motion Picture",
        "image": "https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=800",
        "telephone": "+919876543210",
        "email": "contact@yashrajmotionpictures.com",
        "priceRange": "INR 35000 - 150000",
        "url": "https://yashrajmotionpictures.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "301, Crescent Commercial Arts Hub, near Sindhu Bhavan Road, Bodakdev",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380054",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.039572",
          "longitude": "72.507624",
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "10:00",
          "closes": "20:00",
        },
      },
      {
        "@type": "Photographer",
        "@id": "https://yashrajmotionpictures.com/#photographer",
        "name": "Yash Raj Shah",
        "jobTitle": "Lead Cinematic Director",
        "knowsAbout": [
          "Wedding Filming",
          "Pre-Wedding Shoots Gujarat",
          "Haute Couture Editorials",
          "Cinematography Ahmedabad",
        ],
        "homeLocation": "Ahmedabad, Gujarat",
      },
    ],
  };

  const handleTabClick = (tabId: string) => {
    setTab(tabId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[rgba(201,168,76,0.15)] text-[#A89F8C] pt-16 pb-2 sm:pb-3 font-sans relative text-left"
      id="studio-footer"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16"
          id="footer-bento-grid"
        >
          {/* Brand Info */}
          <div className="flex flex-col gap-4 text-left" id="footer-col-about">
            <div
              className="cursor-pointer hover:opacity-95 transition duration-300 w-fit"
              onClick={() => handleTabClick("home")}
              id="studio-logo-footer"
            >
              <h3 className="font-serif font-extrabold text-[#F5F0E8] text-2xl uppercase tracking-[0.06em] leading-none select-none">
                Yash Raj
              </h3>
              <p className="font-sans font-bold text-[#C9A84C] text-[12px] tracking-[0.25em] uppercase mt-1 leading-none select-none">
                Motion Picture
              </p>
            </div>
            <p className="text-[14px] text-[#A89F8C] leading-[1.8] font-normal mt-2 max-w-sm">
              Luxury photography and cinematography studio based in Ahmedabad, Gujarat. Capturing life's most precious moments with artistry, intention, and heart.
            </p>
          </div>

          {/* Services Column */}
          <div className="text-left" id="footer-col-services">
            <h4 className="text-[11px] tracking-[0.3em] font-mono font-normal text-[#C9A84C] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] shrink-0" />
              <span>SERVICES</span>
            </h4>
            <ul className="space-y-3 text-[14px] text-[#A89F8C] font-normal">
              <li>
                <button
                  onClick={() => handleTabClick("services")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Wedding Photography
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("services")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Cinematic Films
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("services")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Pre-Wedding Shoots
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("services")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Event Coverage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("services")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Portrait Sessions
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-left" id="footer-col-company">
            <h4 className="text-[11px] tracking-[0.3em] font-mono font-normal text-[#C9A84C] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] shrink-0" />
              <span>COMPANY</span>
            </h4>
            <ul className="space-y-3 text-[14px] text-[#A89F8C] font-normal">
              <li>
                <button
                  onClick={() => handleTabClick("about")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("portfolio")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleTabClick("home");
                    setTimeout(() => {
                      document.getElementById("instagram-grid-row-2")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("investment")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("contact")}
                  className="hover:text-white transition cursor-pointer text-left outline-none"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-left" id="footer-col-contact">
            <h4 className="text-[11px] tracking-[0.3em] font-mono font-normal text-[#C9A84C] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] shrink-0" />
              <span>CONTACT</span>
            </h4>
            <ul className="space-y-3 text-[14px] text-[#A89F8C] font-normal">
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition block"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@yashrajmp.com"
                  className="hover:text-white transition block break-all"
                >
                  hello@yashrajmp.com
                </a>
              </li>
              <li>
                <span className="block text-[#A89F8C]">
                  Ahmedabad, Gujarat
                </span>
              </li>
              <li className="pt-3">
                <a
                  href="https://www.instagram.com/YashRajMotionPicture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-block mr-4 text-xs font-mono uppercase tracking-wider text-[#C9A84C]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-block text-xs font-mono uppercase tracking-wider text-[#C9A84C]"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global copyright subbar */}
        <div
          className="border-t border-[rgba(201,168,76,0.15)] pt-8 flex flex-col md:flex-row items-center justify-between text-center text-[12px] font-mono tracking-[0.1em] text-[#888880] gap-4"
          id="footer-copyright-subbar"
        >
          <p>© 2026 Yash Raj Motion Picture. All rights reserved.</p>
          <p className="text-[#555]">Crafted with passion in Ahmedabad</p>
        </div>
      </div>
    </footer>
  );
};

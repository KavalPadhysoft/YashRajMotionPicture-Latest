import React, { useState } from "react";
import { Phone, MapPin, Mail, Instagram, AlertCircle, Check, Send, Clock, ExternalLink } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
    venue: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    fullName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const studioPhone = "+919876543210";
  const studioEmail = "hello@yashrajmp.com";
  const studioInstagram = "YashRajMotionPicture";
  const studioAddress = "Crescent Commercial Arts Hub, Near Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054";
  const gmapsUrl = `https://maps.google.com/?q=${encodeURIComponent(studioAddress)}`;

  // Field validation logic
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        return !value.trim() ? "Full name is required." : "";
      case "phone":
        if (!value.trim()) {
          return "Phone number is required.";
        }
        // Basic format: min 10 digits/characters
        if (!/^\d{10}$/.test(value.trim())) {
          return "Please enter a valid 10-digit phone number.";
        }
        return "";
      case "email":
        if (!value.trim()) {
          return "Email address is required.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return "";
      case "eventDate":
        return !value ? "Event date is required." : "";
      case "eventType":
        return !value ? "Please select an event type." : "";
      default:
        return "";
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error inline as user starts correct input typing
    if (errors[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation for all inputs
    const newErrors = {
      fullName: validateField("fullName", form.fullName),
      phone: validateField("phone", form.phone),
      email: validateField("email", form.email),
      eventDate: validateField("eventDate", form.eventDate),
      eventType: validateField("eventType", form.eventType),
    };

    setErrors(newErrors);

    // Check if there are any invalid fields
    const hasErrors = Object.values(newErrors).some((err) => err !== "");

    if (hasErrors) {
      // Find the first invalid element and focus on it for web accessibility
      const firstInvalidField = Object.keys(newErrors).find(
        (key) => newErrors[key as keyof typeof newErrors] !== ""
      );
      if (firstInvalidField) {
        const element = document.getElementById(firstInvalidField);
        if (element) {
          element.focus();
        }
      }
      return;
    }

    setLoading(true);
    setSubmitError("");

    // Simulated luxury-grade form submission (POST action simulating backend intake handler)
    setTimeout(() => {
      // 98% success rate simulation
      if (Math.random() > 0.98) {
        setSubmitError("Something went wrong with the dispatch. Please try again or tap our Direct Audio line.");
        setLoading(false);
      } else {
        setLoading(false);
        setSubmitted(true);
      }
    }, 1800);
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen">
      {/* 1. Header / Intro Section */}
      <section 
        className="w-full text-center relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12"
        id="contact-intro-header"
      >
        <span className="font-mono text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase block mb-3 font-semibold select-none">
          RESERVE YOUR TRADITIONAL SAGA
        </span>
        <h1 className="font-serif font-extrabold text-[36px] sm:text-[48px] text-white uppercase tracking-[0.02em] leading-[1.1] mb-4">
          Let's create timeless visuals
        </h1>
        <p className="font-sans text-[14px] sm:text-[16px] text-[#A89F8C] font-normal leading-relaxed max-w-xl mx-auto">
          Tell us about your celebration — we typically respond within 24 hours.
        </p>
        <div className="w-16 h-[1.5px] bg-[#C9A84C]/40 mx-auto mt-6" />
      </section>

      {/* 2. Responsive Core Two-Column Wrapper */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" 
        id="contact-interactive-grid"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: ~38% width on desktop. On mobile, order-2 to show below the inquiry form */}
          <div 
            className="w-full lg:w-[38%] order-2 lg:order-1 flex flex-col gap-6"
            id="contact-left-card-deck"
          >
            {/* Card A — Direct audio line */}
            <div 
              className="bg-[#111111] border border-[#5a5650]/20 rounded-[12px] p-6 flex flex-col justify-between transition duration-300 hover:border-[#C9A84C]/30 h-full"
              id="info-card-audio"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase block mb-1 font-semibold select-none">
                  Direct audio line
                </span>
                <h3 className="font-serif font-bold text-xl text-white uppercase tracking-wide">
                  Call back coordinator
                </h3>
                <p className="font-sans text-[14px] text-[#A89F8C] leading-relaxed mt-3">
                  Talk with Yash Raj about slot availability for your dates. We recommend booking 6–12 months in advance for wedding season.
                </p>
              </div>
              <div className="mt-6 pt-2">
                <a
                  href={`tel:${studioPhone}`}
                  className="inline-flex items-center justify-center gap-3 w-full bg-[#C9A84C] hover:bg-[#E2C97E] text-black text-[11px] tracking-[0.2em] font-sans font-bold py-4 uppercase rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)] active:scale-[0.98]"
                  id="direct-call-link"
                >
                  <Phone className="w-4 h-4 fill-black text-black shrink-0" />
                  <span>Call +91 98765 43210</span>
                </a>
              </div>
            </div>

            {/* Card B — Studio location */}
            <div 
              className="bg-[#111111] border border-[#5a5650]/20 rounded-[12px] p-6 flex flex-col justify-between transition duration-300 hover:border-[#C9A84C]/30 h-full"
              id="info-card-location"
            >
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase block mb-1 font-semibold select-none">
                    Studio location
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white uppercase tracking-wide">
                    Ahmedabad HQ
                  </h3>
                </div>
                
                <div className="flex items-start gap-3.5 text-[14px] text-[#D4D0C8] font-normal leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span>
                    Crescent Commercial Arts Hub, Near Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054
                  </span>
                </div>

                <div className="border-t border-[#5a5650]/15 pt-4">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[#C9A84C] uppercase block mb-1 font-semibold select-none">
                    Timings
                  </span>
                  <p className="text-[13px] text-[#A89F8C] font-mono">
                    Mon–Sat · 10:30 AM – 7:30 PM IST
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full border border-[#C9A84C] hover:bg-[#C9A84C]/5 text-[#C9A84C] text-[11px] tracking-[0.2em] font-sans font-bold py-4 uppercase rounded-none transition-all duration-300"
                  id="get-directions-link"
                >
                  <span>Get directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card C — Digital channels */}
            <div 
              className="bg-[#111111] border border-[#5a5650]/20 rounded-[12px] p-6 flex flex-col justify-between transition duration-300 hover:border-[#C9A84C]/30 h-full"
              id="info-card-digital"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase block mb-1 font-semibold select-none">
                  Digital channels
                </span>
                <h3 className="font-serif font-bold text-xl text-white uppercase tracking-wide">
                  Email & socials
                </h3>
                <p className="font-sans text-[14px] text-[#A89F8C] leading-relaxed mt-2 text-luxury-muted mb-4 pb-2 border-b border-[#5a5650]/15">
                  For commercial inquiries, brand editorials, or cinematic collaborations, write to us directly.
                </p>

                <div className="space-y-3.5 text-[14px]">
                  {/* Email */}
                  <a
                    href={`mailto:${studioEmail}`}
                    className="flex items-center gap-3 text-[#D4D0C8] hover:text-[#C9A84C] transition"
                    id="direct-email-link"
                  >
                    <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span className="font-mono break-all">{studioEmail}</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={`https://instagram.com/${studioInstagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#D4D0C8] hover:text-[#C9A84C] transition"
                    id="instagram-profile-link"
                  >
                    <Instagram className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span className="font-mono">@{studioInstagram}</span>
                  </a>
                </div>
              </div>

              {/* Inline inside Card WhatsApp Pill Button - given offset spacing from absolute floating widget */}
              <div className="mt-6 pt-2">
                <a
                  href={`https://wa.me/${studioPhone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-white text-[11px] tracking-[0.15em] uppercase font-sans font-bold transition-all duration-300 hover:scale-[1.04] text-center w-full"
                  style={{
                    backgroundColor: "#25D366",
                    boxShadow: "0 4px 12px rgba(37,211,102,0.2)"
                  }}
                  id="inline-card-whatsapp-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M12.004 2c-5.517 0-9.996 4.48-9.996 9.997 0 1.764.459 3.49 1.332 5.011L2 22l5.129-1.346c1.467.8 3.12 1.22 4.811 1.22a9.994 9.994 0 0 0 9.996-9.997C22.005 6.48 17.525 2 12.004 2zm5.72 13.901c-.244.693-1.223 1.26-1.688 1.341-.453.079-.893.102-3.003-.78-2.693-1.127-4.407-3.903-4.542-4.085-.13-.18-1.077-1.442-1.077-2.753a2.8 2.8 0 0 1 .84-2.008c.257-.258.557-.323.74-.323.18 0 .363.002.52.01.168.01.393-.064.614.475.226.549.771 1.884.838 2.023.067.135.111.293.02.476-.09.183-.135.293-.27.457-.136.16-.285.358-.407.49-.138.146-.282.306-.118.588.162.28.72 1.189 1.545 1.921 1.058.941 1.947 1.233 2.222 1.272.274.04.437-.015.578-.178.14-.163.614-.717.778-.962.162-.244.329-.204.551-.12.225.083 1.424.672 1.668.795.244.12.407.181.466.284.06.102.06.591-.184 1.284h.001z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ~62% width on desktop. On mobile, order-1 to place Booking Form on very top for higher conversion */}
          <div 
            className="w-full lg:w-[62%] order-1 lg:order-2 self-start"
            id="contact-right-form-panel"
          >
            <div className="bg-[#111111] border border-[#5a5650]/20 rounded-[12px] p-6 sm:p-8 md:p-10 relative">
              
              {submitted ? (
                /* Success screen replacing the form entirely for crisp neat outcome */
                <div 
                  className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6"
                  role="alert"
                  aria-live="polite"
                  id="booking-form-success-state"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-[#25D366]">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-[#25D366] uppercase">
                      INQUIRY SECURED
                    </span>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white uppercase mt-2 tracking-wide">
                      Thank you — we'll be in touch within 24 hours.
                    </h2>
                    <p className="font-sans text-[14px] text-[#A89F8C] leading-relaxed max-w-md mx-auto mt-4">
                      Our booking coordinator is verifying season availability for your dates and will connect with you on your email (<span className="text-white font-mono">{form.email}</span>) and phone line.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: "",
                        phone: "",
                        email: "",
                        eventDate: "",
                        eventType: "",
                        venue: "",
                        message: "",
                      });
                    }}
                    className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9A84C] hover:text-white transition-colors border-b border-[#C9A84C]/30 hover:border-white pb-1"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form Stage */
                <div>
                  <div className="text-left mb-8">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase inline-block mb-1.5 font-semibold">
                      Send an inquiry
                    </span>
                    <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white uppercase mt-0.5 tracking-wide">
                      We'd love to hear about your event.
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C9A84C]/45 mt-3" />
                  </div>

                  {submitError && (
                    <div 
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/25 flex items-start gap-3 rounded-none text-left" 
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-[13px] text-red-300 font-sans leading-relaxed">{submitError}</p>
                    </div>
                  )}

                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6" 
                    noValidate
                    id="celebration-booking-form"
                  >
                    {/* row 1: Full name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
                      {/* Name field */}
                      <div className="flex flex-col gap-2">
                        <label 
                          htmlFor="fullName" 
                          className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                        >
                          Full name <span className="text-red-500" title="Required">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={form.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g., Rajveer Jadeja"
                          className={`w-full text-[14px] font-sans bg-[#0c0c0c] border py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all ${
                            errors.fullName 
                              ? "border-red-500 focus:border-red-500" 
                              : "border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C]"
                          }`}
                        />
                        {errors.fullName && (
                          <div 
                            className="bg-red-500/10 p-2 border-l-2 border-red-500 flex items-center gap-2 mt-1 text-red-400 text-xs"
                            role="alert"
                            aria-live="polite"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.fullName}</span>
                          </div>
                        )}
                      </div>

                      {/* Phone field */}
                      <div className="flex flex-col gap-2">
                        <label 
                          htmlFor="phone" 
                          className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                        >
                          Phone number <span className="text-red-500" title="Required">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g., 9876543210"
                          maxLength={10}
                          className={`w-full text-[14px] font-sans bg-[#0c0c0c] border py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all ${
                            errors.phone 
                              ? "border-red-500 focus:border-red-500" 
                              : "border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C]"
                          }`}
                        />
                        {errors.phone && (
                          <div 
                            className="bg-red-500/10 p-2 border-l-2 border-red-500 flex items-center gap-2 mt-1 text-red-400 text-xs"
                            role="alert"
                            aria-live="polite"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* row 2: Email + Event date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
                      {/* Email field */}
                      <div className="flex flex-col gap-2">
                        <label 
                          htmlFor="email" 
                          className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                        >
                          Email address <span className="text-red-500" title="Required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g., yourname@example.com"
                          className={`w-full text-[14px] font-sans bg-[#0c0c0c] border py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all ${
                            errors.email 
                              ? "border-red-500 focus:border-red-500" 
                              : "border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C]"
                          }`}
                        />
                        {errors.email && (
                          <div 
                            className="bg-red-500/10 p-2 border-l-2 border-red-500 flex items-center gap-2 mt-1 text-red-400 text-xs"
                            role="alert"
                            aria-live="polite"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>

                      {/* Event date field */}
                      <div className="flex flex-col gap-2">
                        <label 
                          htmlFor="eventDate" 
                          className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                        >
                          Event date <span className="text-red-500" title="Required">*</span>
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          value={form.eventDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full text-[14px] font-sans bg-[#0c0c0c] border py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all [color-scheme:dark] ${
                            errors.eventDate 
                              ? "border-red-500 focus:border-red-500" 
                              : "border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C]"
                          }`}
                        />
                        {errors.eventDate && (
                          <div 
                            className="bg-red-500/10 p-2 border-l-2 border-red-500 flex items-center gap-2 mt-1 text-red-400 text-xs"
                            role="alert"
                            aria-live="polite"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.eventDate}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* row 3: Event Type selection */}
                    <div className="flex flex-col gap-2 text-left">
                      <label 
                        htmlFor="eventType" 
                        className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                      >
                        Event type <span className="text-red-500" title="Required">*</span>
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={form.eventType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full text-[14px] font-sans bg-[#0c0c0c] border py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all appearance-none cursor-pointer ${
                          errors.eventType 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C]"
                        }`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C9A84C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundPosition: "right 16px center",
                          backgroundSize: "20px",
                          backgroundRepeat: "no-repeat",
                          paddingRight: "40px"
                        }}
                      >
                        <option value="" disabled>Select event scale/type</option>
                        <option value="Wedding">Wedding Shoot (Stills & Cinema)</option>
                        <option value="Pre-wedding shoot">Pre-Wedding Shoot (Cinematics Film)</option>
                        <option value="Engagement">Engagement or Sangeet Shoot</option>
                        <option value="Commercial / brand film">Commercial / Brand Film</option>
                        <option value="Other">Other Personal Celebration</option>
                      </select>
                      {errors.eventType && (
                        <div 
                          className="bg-red-500/10 p-2 border-l-2 border-red-500 flex items-center gap-2 mt-1 text-red-400 text-xs"
                          role="alert"
                          aria-live="polite"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.eventType}</span>
                        </div>
                      )}
                    </div>

                    {/* row 4: Venue / City (optional) */}
                    <div className="flex flex-col gap-2 text-left">
                      <label 
                        htmlFor="venue" 
                        className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                      >
                        Venue / city <span className="text-[10px] text-gray-500 tracking-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={form.venue}
                        onChange={handleChange}
                        placeholder="e.g., Hyatt Regency, Ahmedabad"
                        className="w-full text-[14px] font-sans bg-[#0c0c0c] border border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C] py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all"
                      />
                    </div>

                    {/* row 5: Message (optional) */}
                    <div className="flex flex-col gap-2 text-left">
                      <label 
                        htmlFor="message" 
                        className="font-sans text-[12px] font-semibold text-[#F5F0E8] uppercase tracking-wider"
                      >
                        Tell us about your event <span className="text-[10px] text-gray-500 tracking-normal lowercase">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Venue, guest count, must-have shots, anything else we should know"
                        className="w-full text-[14px] font-sans bg-[#0c0c0c] border border-[#5a5650]/25 hover:border-[#C9A84C]/35 focus:border-[#C9A84C] py-3 px-4 text-[#F5F0E8] rounded-none focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-2 text-left">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-sans font-bold tracking-[0.2em] px-8 py-4 uppercase text-[12px] rounded-none transition-all duration-300 cursor-pointer disabled:opacity-75 outline-none leading-[1.5] w-fit"
                        id="submit-enquiry-btn-contact"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 rounded-none border-2 border-black border-t-transparent animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Embedded Google Map Section */}
      <section 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-24"
        id="contact-map-embed-section"
      >
        <div className="border border-[#5a5650]/20 rounded-[12px] overflow-hidden" id="gmap-card-container">
          <iframe
            src="https://maps.google.com/maps?q=Crescent+Commercial+Arts+Hub,+Near+Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad,+Gujarat+380054&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ 
              border: 0, 
              display: "block",
              filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)"
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Yash Raj Motion Picture studio location in Bodakdev, Ahmedabad"
            id="gmaps-iframe"
          />
        </div>
      </section>
    </div>
  );
};

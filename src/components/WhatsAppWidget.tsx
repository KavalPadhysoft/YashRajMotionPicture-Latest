import React from "react";

export const WhatsAppWidget: React.FC = () => {
  // Yash Raj Motion Picture Ahmedabad WhatsApp contact configuration
  const phoneNumber = "919876543210";
  const defaultMessage = "Hello Yash Raj Motion Picture! I'm interested in your cinematic photography and luxury shooting packages.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[32px] right-[32px] z-[999] flex items-center justify-center cursor-pointer transition-all duration-300 select-none ease-out hover:scale-[1.08] hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] w-[56px] h-[56px] rounded-full"
      style={{
        backgroundColor: "#25D366",
      }}
      aria-label="Contact us on WhatsApp"
      id="whatsapp-floating-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
        style={{
          width: "28px",
          height: "28px",
        }}
        id="whatsapp-icon-svg"
      >
        <path d="M12.004 2c-5.517 0-9.996 4.48-9.996 9.997 0 1.764.459 3.49 1.332 5.011L2 22l5.129-1.346c1.467.8 3.12 1.22 4.811 1.22a9.994 9.994 0 0 0 9.996-9.997C22.005 6.48 17.525 2 12.004 2zm5.72 13.901c-.244.693-1.223 1.26-1.688 1.341-.453.079-.893.102-3.003-.78-2.693-1.127-4.407-3.903-4.542-4.085-.13-.18-1.077-1.442-1.077-2.753a2.8 2.8 0 0 1 .84-2.008c.257-.258.557-.323.74-.323.18 0 .363.002.52.01.168.01.393-.064.614.475.226.549.771 1.884.838 2.023.067.135.111.293.02.476-.09.183-.135.293-.27.457-.136.16-.285.358-.407.49-.138.146-.282.306-.118.588.162.28.72 1.189 1.545 1.921 1.058.941 1.947 1.233 2.222 1.272.274.04.437-.015.578-.178.14-.163.614-.717.778-.962.162-.244.329-.204.551-.12.225.083 1.424.672 1.668.795.244.12.407.181.466.284.06.102.06.591-.184 1.284h.001z" />
      </svg>
    </a>
  );
};

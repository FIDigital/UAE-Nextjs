"use client";

import Image from "next/image";

export default function Logo({ variant = "theme", width = "160px", height = "48px" }) {
  return (
    <div className={`logo-container variant-${variant}`} style={{ display: "flex", alignItems: "center", height: "100%", position: "relative" }}>
      {/* Logo Image Wrapper */}
      <div className="icon-wrapper" style={{ position: "relative", width, height, flexShrink: 0 }}>
        {/* Logo for Light Theme (rendered on light backgrounds) */}
        <div className="logo-img light-theme-logo">
          <Image
            src="/img/logo-on-light1.png"
            alt="FI Digital Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Logo for Dark Theme (rendered on dark backgrounds or white variant) */}
        <div className="logo-img dark-theme-logo">
          <Image
            src="/img/logo-on-dark1.png"
            alt="FI Digital Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          transition: transform 0.3s ease;
        }
        .logo-img {
          position: absolute;
          inset: 0;
          transition: opacity 0.3s ease;
        }
        
        /* Light Theme (Default: Logo for light background is visible) */
        .dark-theme-logo { opacity: 0; }
        .light-theme-logo { opacity: 1; }
        
        /* Force White/Dark Variant (Visible on dark backgrounds) */
        .variant-white .dark-theme-logo { opacity: 1; }
        .variant-white .light-theme-logo { opacity: 0; }
        
        /* Dark Theme Detection for 'theme' variant */
        :global([data-theme='dark']) .variant-theme .dark-theme-logo {
          opacity: 1;
        }
        :global([data-theme='dark']) .variant-theme .light-theme-logo {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react'

export default function Footer() {

  return (
    <footer className="w-full">
     
   

      {/* Bottom Bar */}
      <section className="bg-[#1e332a] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-white/70 text-xs">
            Copyright © 2026 Venuelocity. All Rights Reserved.
          </p>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <a
              href="#"
              className="text-white/70 text-xs hover:text-white transition-colors"
            >
              Accessibility Statement
            </a>
            <span className="text-white/40 text-xs">•</span>
            <a
              href="#"
              className="text-white/70 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/40 text-xs">•</span>
            <a
              href="#"
              className="text-white/70 text-xs hover:text-white transition-colors"
            >
              Sitemap
            </a>
            <span className="text-white/40 text-xs">•</span>
            <a
              href="#"
              className="text-white/70 text-xs hover:text-white transition-colors"
            >
              Do Not Sell My Data
            </a>
            <span className="text-white/40 text-xs">•</span>
            <a
              href="#"
              className="text-white/70 text-xs hover:text-white transition-colors"
            >
              Consent Preferences
            </a>
          </nav>

          {/* Venuelocity Logo */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-5 h-5 text-white/80"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-white/80 text-sm font-light tracking-wide">
              venuelocity
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}
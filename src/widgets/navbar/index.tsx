import React from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 shadow-inner-top">
      <div className="bg-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-4">
            {/* Chap: Telefon va Email */}
            <div className="flex items-center gap-8">
              <a
                href="tel:+998907583833"
                className="flex items-center gap-2 text-zinc-100 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="tracking-wide text-sm sm:text-base">
                  +998(90)75838333
                </span>
              </a>

              <a
                href="mailto:info@bmgsoft.com"
                className="flex items-center gap-2 text-zinc-100 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="tracking-wide text-sm sm:text-base">
                  info@bmgsoft.com
                </span>
              </a>
            </div>

            {/* O‘ng: Til tanlash va Avatar */}
            <div className="flex items-center gap-5">
              <button
                className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-zinc-100 hover:bg-white/10 transition"
              >
                <span className="text-lg leading-none">🇷🇺</span>
                <span className="hidden sm:inline">Русский</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/20 hover:ring-white/40 transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none h-2 w-full bg-gradient-to-b from-white/20 to-transparent" />
    </header>
  );
};

export default Navbar;

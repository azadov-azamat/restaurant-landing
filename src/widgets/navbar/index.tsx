import React from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import Image from "../../components/custom/image";

const Navbar: React.FC = () => {
  return (
    <header className="z-50 ">
        <div className="container">
          <div className="flex h-12 items-center justify-between gap-4">
            {/* Chap: Telefon va Email */}
            <div className="flex items-center gap-8">
              <a
                href="tel:+998907583833"
                className="flex items-center gap-2 text-black transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="tracking-wide text-sm sm:text-base">
                  +998(90)75838333
                </span>
              </a>

              <a
                href="mailto:info@bmgsoft.com"
                className="flex items-center gap-2 text-text-black transition-colors"
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
                className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-text-black transition"
              >
                <span className="text-lg leading-none">🇷🇺</span>
                <span className="hidden sm:inline">Русский</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/20 hover:ring-white/40 transition"
              >
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </button>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Navbar;

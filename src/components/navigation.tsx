import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  navLinks: NavLink[];
  className?: string;
}

export default function Navigation({
  navLinks = [],
  className = "",
}: NavigationProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`w-full mt-8 bg-transparent text-black relative z-50 ${className}`}>
        <div className="w-full">
          <div className="flex items-center relative justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="font-bold text-3xl tracking-wider w-[210px]"
              >
                <img
                    src="/images/logo.png"
                    className="w-[212px] -ml-8"
                    alt="navigation-logo-background"
                    loading="lazy"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block -ml-8">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className={`px-3 py-2 font-normal transition-colors duration-200 hover:text-red-400 ${
                      link.href === pathname ? "text-red-400" : "text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <img
                    src="/icons/favorite.png"
                  width={34}
                    alt="footer-logo-background"
                    loading="lazy"
                />
                 <img
                    src="/icons/circle-basket.png"
                    width={34}
                    alt="footer-logo-background"
                    loading="lazy"
                />
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                    <img
                        src="/icons/favorite.png"
                        width={34}
                        alt="footer-logo-background"
                        loading="lazy"
                    />
                      <img
                        src="/icons/circle-basket.png"
                        width={34}
                        alt="footer-logo-background"
                        loading="lazy"
                    />
                </div>

              <button
                onClick={toggleMenu}
                className="text-black p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeMenu}
          />

          {/* Mobile menu panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col pt-20 px-6 space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={closeMenu}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-red-400 py-2 ${
                    link.href === pathname ? "text-red-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

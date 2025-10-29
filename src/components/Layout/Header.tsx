import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import jfLogo from "../../assets/favicon-removebg-preview.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const hospitals = [
    {
      name: "Foscote Hospital",
      link: "https://thefoscotehospital.co.uk/enquire-online/",
    },
    {
      name: "Spire Harpenden Hospital",
      link: "https://www.spirehealthcare.com/spire-harpenden-hospital/how-to-book/",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/treatments", label: "Treatments" },
    { to: "/publications", label: "Publications" },
    { to: "/insurance-fees", label: "Insurance & Fees" },
    { to: "/contact", label: "Contact" },
  ];

  return (
      <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-white transition-all duration-300"
      style={{ width: "100%" }}
    >
      {/* ✅ Match Home layout — 95% width container with bg-[#FAF9F7] */}
      <div className="w-[95%] max-w-[2999px] bg-[#FAF9F7]">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 ml-5">
            <img
              src={jfLogo}
              alt="logo"
              className="rounded-full object-cover"
              style={{ height: 65, width: 65 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-10 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-light transition-colors hover:text-[#31708F] ${
                  location.pathname === link.to
                    ? "text-[#31708F]"
                    : "text-[#414141]"
                }`}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Book Appointment Button */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="outline"
                className="py-4 px-0 w-[180px] mr-7 transition-all duration-300 border border-[#31708F] text-[#31708F] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Book Appointment
              </Button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {hospitals.map((hospital, index) => (
                    <a
                      key={index}
                      href={hospital.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31708F]/10 hover:text-[#31708F]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {hospital.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-4 space-y-4 px-5 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block font-light transition-colors hover:text-[#31708F] ${
                  location.pathname === link.to
                    ? "text-[#31708F]"
                    : "text-[#414141]"
                }`}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <Button
                variant="outline"
                className="w-full border-[#31708F] text-[#31708F] hover:bg-[#31708F] hover:text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Book Appointment
              </Button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {hospitals.map((hospital, index) => (
                    <a
                      key={index}
                      href={hospital.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31708F]/10 hover:text-[#31708F]"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {hospital.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

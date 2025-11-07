import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import jfLogo from "@/assets/logo_jf__1_-removebg-preview.png";

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
    { to: "/research", label: "Research" },
    { to: "/insurance-fees", label: "Insurance & Fees" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-white transition-all duration-300  bg-[#FAF9F7] "
      style={{ width: "100%" }}
    >
      <div className="w-[95%] bg-[#FAF9F7] ">
        <div className="w-[95%] max-w-[1200px] mx-auto mt-4 mb-4">
          <nav className="flex items-center justify-between py-2 pl-[12px]">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 ">
              <img
                src={jfLogo}
                alt="logo"
                className=" object-contain"
                style={{ height: 40, width: 40 }}
              />
              <span className="text-[11px] lg:text-xs xl:text-base font-medium whitespace-nowrap text-[#1E5089]">
                Joshua Franklyn Consultant Surgeon
              </span>
            </Link>

            {/* Desktop Navigation - Increased gap between links */}
            <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-8 ml-6 xl:ml-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[11px] lg:text-xs xl:text-sm font-light transition-colors hover:text-[#1E5089] whitespace-nowrap ${
                    location.pathname === link.to
                      ? "text-[#1E5089]"
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
                  className="py-2 px-0 w-[140px] lg:w-[150px] xl:w-[180px] text-[11px] lg:text-xs xl:text-sm transition-all duration-300 border border-[#1E5089] text-[#1E5089] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)] whitespace-nowrap"
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
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1E5089]/10 hover:text-[#1E5089]"
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
            <div className="lg:hidden mt-2 pb-4 space-y-4 pl-[15px] pr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block font-light transition-colors hover:text-[#1E5089] ${
                    location.pathname === link.to
                      ? "text-[#1E5089]"
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
                  className="w-full border-[#1E5089] text-[#1E5089] hover:bg-[#1E5089] hover:text-white"
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
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1E5089]/10 hover:text-[#1E5089]"
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
      </div>
    </header>
  );
};

export default Header;

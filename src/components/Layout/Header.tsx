import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import jfLogo from "../../assets/favicon-removebg-preview.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 👇 Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Hospital list
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7] transition-all duration-300 
  `}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              style={{ height: 100, width: 100 }}
              src={jfLogo}
              alt="logo"
              className=" rounded-full object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden lg:flex items-center space-x-10"> */}
          <div className="hidden lg:flex items-center space-x-10" style={{}}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-sm font-light transition-colors hover:text-[#31708F] ${
                  location.pathname === link.to
                    ? "text-[#31708F]"
                    : "text-[#414141]"
                }`}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
                // style={{ fontFamily: '"Brandon Grot W01 Light", "Work Sans", sans-serif' ,fontSize:'17px'}}

                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ Book Appointment Dropdown */}
            <div className="relative" ref={dropdownRef}>
              {/* <Button
                variant="outline"
                size="sm"
                className="border-[#31708F] text-[#31708F] hover:bg-[#31708F] hover:text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              > */}
              <h3
                className="text-[17px] sm:text-[17px] leading-relaxed"
                style={{}}
              >
                <Button
                  variant="outline"
                  className="mb-2 px-8 py-6 w-[200px] transition-all duration-300 border border-[#31708F] text-[#31708F] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                  style={{
                    fontFamily:
                      '"Brandon Grot W01 Light", "Work Sans", sans-serif',
                  }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // 👈 This line enables the dropdown toggle
                >
                  Book Appointment
                </Button>
              </h3>
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block font-light transition-colors hover:text-[#31708F] ${
                  location.pathname === link.to
                    ? "text-[#31708F]"
                    : "text-[#414141]"
                }`}
                style={{ fontFamily: ' "Montserrat", sans-serif;' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ Mobile Dropdown */}
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
      </nav>
    </header>
  );
};

export default Header;

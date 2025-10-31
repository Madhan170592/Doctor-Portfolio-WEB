import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#83A9BC] text-[#FAF9F7]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3
              className=" mb-4"
              style={{
                color: "#FFFFFF",
                fontSize: "28px",
                fontFamily: '"Worksans-extralight","Work Sans", sans-serif',
              }}
            >
              Joshua Franklyn
            </h3>
            <p className="text-sm leading-relaxed">
              Consultant General and Colorectal Surgeon specializing in robotic
              surgery, hernia repair, and advanced bowel treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className=" mb-4"
              style={{
                color: "#FFFFFF",
                fontSize: "28px",
                fontFamily: '"Worksans-extralight","Work Sans", sans-serif',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm  hover:text-[#612512] transition-colors"
                >
                  About Joshua Franklyn
                </Link>
              </li>
              <li>
                <Link
                  to="/treatments"
                  className="text-sm  hover:text-[#612512] transition-colors"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-sm  hover:text-[#612512] transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance-fees"
                  className="text-sm  hover:text-[#612512] transition-colors"
                >
                  Insurance & Fees
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm  hover:text-[#612512] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="mb-4"
              style={{
                color: "#FFFFFF",
                fontSize: "28px",
                fontFamily: '"Worksans-extralight","Work Sans", sans-serif',
              }}
            >
              Contact Information
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="text-[#FAF9F7] mt-0.5 flex-shrink-0"
                />
                <span className="text-sm">+447 480734964</span>
              </li>
              {/* <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#FAF9F7] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Contact via form</span>
              </li> */}
              <li className="flex items-start space-x-3">
                <Mail
                  size={18}
                  className="text-[#FAF9F7] mt-0.5 flex-shrink-0"
                />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=contact@joshuafranklyn.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm  hover:text-[#612512] transition-colors"
                >
                  contact@joshuafranklyn.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#FAF9F7]/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Joshua Franklyn. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <Link
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm  hover:text-[#612512] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm  hover:text-[#612512] transition-colors"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
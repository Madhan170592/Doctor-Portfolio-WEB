import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#83A9BC] text-[#FAF9F7]">
      <div className="container mx-auto px-4 py-12">
       

        {/* Bottom Bar */}
        <div >
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
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import heroImage from "@/assets/franklynHeroSection.jpeg";
// import joshuaProfile from '@/assets/JoshuaProfile circle.png';
import joshuaProfile from "@/assets/JoshuaProfileGeneral.png";

const Home = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <>
      <SEO />
      <main className="min-h-screen mt-8">
        <section className="relative min-h-screen flex items-center justify-center bg-[#FAF9F7] overflow-hidden">
          {/* Wrapper with 73% width */}
          <div className="relative w-[73%] flex flex-col md:flex-row items-center">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 flex items-center justify-center pr-6 sm:pr-10 md:pr-12 lg:pr-16 relative z-20">
              <div className="max-w-md text-left text-[#222] relative z-20">
                <h1
                  className="text-[24px] sm:text-[38px] md:text-[56px] font-light leading-tight mb-2 whitespace-nowrap"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    lineHeight: "1.2",
                    color: "#31708F",
                  }}
                >
                  Joshua Franklyn
                  <span className="text-[16px] sm:text-[18px] font-light ml-2 text-[#31708F]">
                    MS FRCS
                  </span>
                </h1>

                <p
                  className="mb-6"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: "#31708F",
                    fontSize: "23px",
                    // opacity:0.8,
                    fontWeight: 300,
                  }}
                >
                  Consultant Robotic General and Colorectal Surgeon
                </p>

                <p
                  className="leading-relaxed mb-8"
                  style={{
                    color: "#31708F",
                    fontSize: "20px",
                    fontFamily: '"Work Sans", sans-serif',
                    fontWeight: 300,
                  }}
                >
                  A dedicated and skilled consultant surgeon, working closely
                  with each patient to choose the most appropriate treatment for
                  their individual needs.
                </p>

                <div
                  className="sm:flex-row items-start justify-start gap-4"
                  ref={dropdownRef}
                >
                  <p
                    className="text-[17px] sm:text-[17px] leading-relaxed"
                    // style={{ fontFamily: '"Montserrat", sans-serif' }}
                  >
                    <Button
                      variant="outline"
                      className="mb-2 px-8 py-6 w-[220px] transition-all duration-300 border border-[#31708F] text-[#31708F] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                      style={{ fontFamily: '"Montserrat", sans-serif' }}
                    >
                      View Treatments
                    </Button>
                  </p>
                  <p
                    className="text-[17px] sm:text-[17px] leading-relaxed"
                    // style={{ fontWeight: 100 }}
                  >
                    <Button
                      className="bg-[#31708F] hover:bg-[#717171] text-white px-8 py-6 text-base w-[220px]"
                      style={{ fontFamily: '"Montserrat", sans-serif' }}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)} // 👈 This line enables the dropdown toggle
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
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-[80vh]">
              <img
                src={heroImage}
                alt="Dr. Joshua Franklyn"
                className="w-full h-full object-cover"
              />
              {/* overlay visible only for left half */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* General Colorectal Surgery Section */}
        <section className="py-16 sm:py-20 bg-[#fAf9f7]">
          <div className="w-full px-6 sm:px-12 md:px-[112px] lg:px-[200px] space-y-12">
            <div className="text-center md:text-left space-y-6 reveal">
              <h2
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: "26px",
                  color: "#31708F",
                  fontWeight: 395,
                }}
              >
                General Colorectal Services
              </h2>

              <p
                className="text-[14px] sm:text-[15px] leading-relaxed"
                style={{
                  color: "#612512",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: "100px",
                  opacity: 0.8, // makes it visually thinner
                }}
              >
                Mr Joshua Franklyn is a consultant General and Colorectal
                Surgeon working in Hertfordshire and Oxfordshire.{" "}
                <span className="font-bold">Mr. Franklyn</span> believes in
                building a strong, trusting relationship with each patient,
                ensuring you feel heard and cared for throughout your treatment
                while receiving timely, effective care.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 reveal items-center rounded-2xl p-6 md:p-10"
              style={{ backgroundColor: "#FAF9F7" }}
            >
              {/* Left Column - Image */}
              <div className="flex justify-center md:justify-start">
                <div className="rounded-full w-[180px] sm:w-[250px] md:w-[320px] h-[180px] sm:h-[250px] md:h-[320px] overflow-hidden">
                  <img
                    src={joshuaProfile}
                    alt="Dr. Joshua Franklyn"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right Column - List */}
              <div className="text-center md:text-left space-y-2">
                <h2
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: "20px",
                    color: "#414141",
                    fontWeight: 300,
                  }}
                >
                  General Surgery Consultations
                </h2>

                <ul className="list-disc ml-5 space-y-2 inline-block text-left">
                  <p
                    className="text-[14px] sm:text-[15px] leading-relaxed"
                    style={{
                      color: "#612512",
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: "100px",
                      opacity: 0.8, // makes it visually thinner
                    }}
                  >
                    <li>Hernias</li>
                    <li>Haemorrhoids</li>
                    <li>Fistulas and Fissures</li>
                    <li>Gut wellness</li>
                    <li>
                      Diagnostic procedures: Colonoscopy and sigmoidoscopy
                    </li>
                    <li>Robotic General and Colorectal surgery</li>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-16 sm:py-20 bg-[#31708F] text-white text-center">
          <div className="w-full px-6 sm:px-12 md:px-[112px] lg:px-[200px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              Ready to Start Your Treatment Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90">
              Most appointments available within 1-2 weeks. Fast access to expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#285d77] hover:bg-[#224d64] text-white">
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#31708F]"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Home;

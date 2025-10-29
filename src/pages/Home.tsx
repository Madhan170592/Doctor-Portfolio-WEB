import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import heroImage from "@/assets/joshua-hero-section.jpg";
import joshuaProfile from "@/assets/JoshuaProfileGeneral.png";

const Home = () => {
  const featuresRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  return (
    <>
      <SEO />
      <main className="min-h-screen bg-white ">
        {/* ✅ Full width white background with 80% centered #FAF9F7 strip */}
        <div className="flex justify-center">
          <div className="w-[95%] bg-[#FAF9F7]">
            {/* ==================== Hero Section ==================== */}
            <section className="relative flex justify-center items-center pt-4 min-h-screen overflow-hidden">
              <div className="relative w-[95%] max-w-[1200px] mx-auto flex justify-center items-center overflow-hidden hero-container">
                <img
                  src={heroImage}
                  alt="Dr. Joshua Franklyn"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/80 md:bg-white/60"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col mt-10 justify-center md:items-start items-center text-center md:text-left pt-10 sm:pt-12 md:pt-0 z-20 pl-[15px]">
                  <div className="max-w-xl w-full md:ml-0 sm:ml-0 ml-0 px-0">
                    <h1
                      className="text-[26px] sm:text-[30px] md:text-[60px] font-light mb-2 leading-tight  mt-[50px] sm:mt-0"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        color: "#31708F",
                      }}
                    >
                      Joshua Franklyn{" "}
                      <span className="text-[16px] sm:text-[18px] md:text-[20px] font-light ml-1 text-[#31708F]">
                        MS FRCS
                      </span>
                    </h1>

                    <p
                      className="mb-4 text-[16px] sm:text-[20px] md:text-[25px] font-light"
                      style={{
                        color: "#31708F",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    >
                      Consultant Robotic General <br />
                      and Colorectal Surgeon
                    </p>

                    <p
                      className="leading-relaxed mb-8 text-[14px] sm:text-[18px] md:text-[20px]"
                      style={{
                        color: "#31708F",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    >
                      A dedicated and skilled <br /> consultant surgeon, working{" "}
                      <br />
                      closely with each patient <br />
                      to choose the most appropriate <br />
                      treatment for their individual needs.
                    </p>

                    <div
                      className="sm:flex-row items-start justify-start gap-4"
                      ref={dropdownRef}
                    >
                      {/* ✅ Buttons Section (stacked vertically) */}
                      <div
                        className="flex flex-col gap-4 relative items-center   md:items-start"
                        ref={dropdownRef}
                      >
                        {/* View Treatments Button */}
                        <Link to="/treatments">
                          <Button
                            variant="outline"
                            className=" py-6 w-[220px] transition-all duration-300 border border-[#31708F] text-[#31708F] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                            style={{ fontFamily: '"Montserrat", sans-serif' }}
                          >
                            View Treatments
                          </Button>
                        </Link>

                        {/* Book Appointment Button */}
                        <div className="relative">
                          <Button
                            className="bg-[#31708F] hover:bg-[#717171] text-white py-6 text-base w-[220px]"
                            style={{ fontFamily: '"Montserrat", sans-serif' }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            Book Appointment
                          </Button>

                          {/* Dropdown */}
                          {isDropdownOpen && (
                            <div className="absolute left-0 bottom-full mb-2 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== General Surgery Section ==================== */}
            <section className="pb-16 sm:pb-20 mx-8 bg-[#FAF9F7]">
              <div className="w-full px-6 sm:px-12 md:px-[92px] lg:px-[95px] space-y-12">
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
                      opacity: 0.8,
                    }}
                  >
                    Mr Joshua Franklyn is a consultant General and Colorectal
                    Surgeon working in Hertfordshire and Oxfordshire.{" "}
                    <span className="font-bold">Mr. Franklyn</span> believes in
                    building a strong, trusting relationship with each patient,
                    ensuring you feel heard and cared for throughout your
                    treatment while receiving timely, effective care.
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 reveal items-center p-6 md:p-10"
                  style={{ backgroundColor: "#FAF9F7" }}
                >
                  <div className="flex justify-center md:justify-start">
                    <div className="rounded-full w-[180px] sm:w-[250px] md:w-[320px] h-[180px] sm:h-[250px] md:h-[320px] overflow-hidden">
                      <img
                        src={joshuaProfile}
                        alt="Dr. Joshua Franklyn"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

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
                          opacity: 0.8,
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

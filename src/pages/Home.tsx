import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

import heroImage from "@/assets/Herosection2 1 (1).png";
import joshuaProfile from "@/assets/JoshuaProfileGeneral.png";
import Header from "@/components/Layout/Header";

const Home = () => {
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
      {/* <Header /> */}
      <main className="min-h-screen bg-white ">
        <div className="flex justify-center">
          <div className="w-[95%] bg-[#FAF9F7]">
            {/* Hero Section */}
            {/* <section className="relative flex justify-center items-center md:items-start md:pt-20 pt-20">
           
              <div className="relative w-[95%] max-w-[1200px] mx-auto flex justify-center items-center md:items-start overflow-hidden hero-container">
                <img
                  src={heroImage}
                  alt="Dr. Joshua Franklyn"
                  className="absolute inset-0 pl-3 w-full h-[80%] sm:h-[50%] md:h-[85%] object-cover object-[58%_center] md:object-center "
                />

                <div className="absolute inset-0 flex flex-col   text-start md:text-left  xl:pt-4 sm:pt-12 md:pt-10 md:mt-8 z-20 pl-[12px]">
                 
                  <div
                    className="max-w-xl w-full md:ml-0 sm:ml-0 ml-0 px-0 "
                    style={{ marginLeft: "20px" }}
                  >
                    <h1
                      className="text-[26px] sm:text-[30px] md:text-[60px] font-light mb-2 leading-tight  mt-[50px] sm:mt-0"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        color: "#1E5089",
                      }}
                    >
                      Joshua Franklyn{" "}
                      <span className="text-[16px] sm:text-[18px] md:text-[20px] font-light ml-1 text-[#1E5089]">
                        MS FRCS
                      </span>
                    </h1>

                    <p
                      className="mb-4 text-[16px] sm:text-[20px] md:text-[25px] font-light"
                      style={{
                        color: "#1E5089",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    >
                      Consultant Robotic General <br />
                      and Colorectal Surgeon
                    </p>

                    <p
                      className="leading-relaxed mb-8 text-[14px] sm:text-[18px] md:text-[20px]"
                      style={{
                        color: "#1E5089",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    ></p>

                    <div
                      className="flex flex-col gap-4 relative items-center md:items-start "
                      ref={dropdownRef}
                    >
                      <Link to="/treatments">
                        <Button
                          variant="outline"
                          className=" py-6 w-[220px] transition-all duration-300 border border-[#1E5089] text-[#1E5089] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                          style={{ fontFamily: '"Montserrat", sans-serif' }}
                        >
                          View Treatments
                        </Button>
                      </Link>

                      <div className="relative">
                        <Button
                          className="bg-[#1E5089] hover:bg-[#717171] text-white py-6 text-base w-[220px]"
                          style={{ fontFamily: '"Montserrat", sans-serif' }}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          Book Appointment
                        </Button>

                        {isDropdownOpen && (
                          <div className="absolute left-0 bottom-full mb-2 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
                  </div>
                </div>
              </div>
            </section> */}
            <section className="relative flex justify-center items-center md:items-start md:pt-20 pt-20">
              <div className="relative w-[95%] max-w-[1200px] mx-auto flex justify-center items-center md:items-start overflow-hidden hero-container">
                <img
                  src={heroImage}
                  alt="Dr. Joshua Franklyn"
                  className="absolute inset-0 pl-3 w-full h-[70%] sm:h-[50%] md:h-[85%] object-cover object-[58%_center] md:object-center"
                />

                <div className="absolute inset-0 flex flex-col items-center text-center md:items-start md:text-left xl:pt-4 sm:pt-12 md:pt-10 md:mt-8 z-20 pl-0 md:pl-[12px]">
                  <div
                    className="max-w-xl w-full md:ml-0 sm:ml-0 ml-0 px-4 md:px-8 "
                    style={{ marginLeft: "0px" }}
                  >
                    <h1
                      className="ml-[16px] md:ml-0 text-[28px] sm:text-[30px] md:text-[60px] font-light mb-2 leading-tight mt-[30px] sm:mt-0 flex items-center gap-2 whitespace-nowrap"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        color: "#1E5089",
                      }}
                    >
                      Joshua Franklyn
                      <span className="text-[16px] sm:text-[18px] md:text-[20px] font-light text-[#1E5089]  mt-2 md:mt-6">
                        MS FRCS
                      </span>
                    </h1>

                    <p
                      className="mb-4 text-[18px] sm:text-[20px] md:text-[25px] font-light"
                      style={{
                        color: "#1E5089",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    >
                      Consultant Robotic General{" "}
                      <br className="hidden md:block" />
                      and Colorectal Surgeon
                    </p>

                    <p
                      className="leading-relaxed mb-8 text-[14px] sm:text-[18px] md:text-[20px]"
                      style={{
                        color: "#1E5089",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    ></p>

                    <div
                      className="flex flex-col sm:flex-row md:flex-col gap-4 relative items-center md:items-start ml-[16px] md:ml-0"
                      ref={dropdownRef}
                    >
                      <Link to="/treatments">
                        <Button
                          variant="outline"
                          className="py-6 w-[220px] transition-all duration-300 border border-[#1E5089] text-[#1E5089] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                          style={{ fontFamily: '"Montserrat", sans-serif' }}
                        >
                          View Treatments
                        </Button>
                      </Link>

                      <div className="relative">
                        <Button
                          className="bg-[#1E5089] hover:bg-[#717171] text-white py-6 text-base w-[220px]"
                          style={{ fontFamily: '"Montserrat", sans-serif' }}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          Book Appointment
                        </Button>

                        {isDropdownOpen && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none bottom-full mb-2 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
                  </div>
                </div>
              </div>
            </section>

            <section className="pb-16 sm:pb-20 bg-[#FAF9F7]  ">
              <div className="w-[95%] max-w-[1200px] mx-auto space-y-12 pl-[12px]">
                <div className="text-center md:text-left space-y-6 reveal">
                  <h2
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: "26px",
                      color: "#1E5089",
                      fontWeight: 395,
                      marginTop: "-30px",
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
                      marginTop: "40px",
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
                    <p
                      className="text-[14px] sm:text-[15px] leading-relaxed"
                      style={{
                        color: "#612512",
                        fontFamily: '"Montserrat", sans-serif',
                        opacity: 0.8,
                        marginTop: "20px",
                      }}
                    >
                      Please see our{" "}
                      <Link
                        to="/treatments"
                        className="underline font-semibold"
                        style={{ color: "#612512" }}
                      >
                        Treatments
                      </Link>{" "}
                      page for more details
                    </p>
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
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import SEO from "@/components/SEO";

// import heroImage from "@/assets/Herosection2 1 (1).png";
// import joshuaProfile from "@/assets/JoshuaProfileGeneral.png";
// import Header from "@/components/Layout/Header";

// const Home = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("active");
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const reveals = document.querySelectorAll(".reveal");
//     reveals.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const hospitals = [
//     {
//       name: "Foscote Hospital",
//       link: "https://thefoscotehospital.co.uk/enquire-online/",
//     },
//     {
//       name: "Spire Harpenden Hospital",
//       link: "https://www.spirehealthcare.com/spire-harpenden-hospital/how-to-book/",
//     },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <SEO />
//       {/* <Header /> */}
//       <main className="min-h-screen bg-white ">
//         <div className="flex justify-center">
//           <div className="w-[95%] bg-[#FAF9F7]">
//             {/* Hero Section */}
//             <section className="relative flex justify-center items-center min-h-screen md:items-start md:min-h-[70vh]">
//               <div className="relative w-[95%] max-w-[1200px] mx-auto flex justify-center items-center overflow-hidden hero-container">
//                 <img
//                   src={heroImage}
//                   alt="Dr. Joshua Franklyn"
//                   className="absolute inset-0 pl-3 w-full h-full object-cover object-[78%_center] md:object-center"
//                 />

//                 <div className="absolute inset-0 flex flex-col justify-center text-center md:text-left z-20 px-6 sm:px-10">
//                   <div className="max-w-xl w-full mx-auto md:ml-0">
//                     <h1
//                       className="text-[26px] sm:text-[30px] md:text-[60px] font-light mb-2 leading-tight"
//                       style={{
//                         fontFamily: '"Work Sans", sans-serif',
//                         color: "#1E5089",
//                       }}
//                     >
//                       Joshua Franklyn{" "}
//                       <span className="text-[16px] sm:text-[18px] md:text-[20px] font-light ml-1 text-[#1E5089]">
//                         MS FRCS
//                       </span>
//                     </h1>

//                     <p
//                       className="mb-4 text-[16px] sm:text-[20px] md:text-[25px] font-light"
//                       style={{
//                         color: "#1E5089",
//                         fontFamily: '"Work Sans", sans-serif',
//                       }}
//                     >
//                       Consultant Robotic General <br />
//                       and Colorectal Surgeon
//                     </p>

//                     <div
//                       className="flex flex-col gap-4 relative items-center md:items-start"
//                       ref={dropdownRef}
//                     >
//                       <Link to="/treatments">
//                         <Button
//                           variant="outline"
//                           className="py-6 w-[220px] transition-all duration-300 border border-[#1E5089] text-[#1E5089] hover:text-white hover:bg-[#00000040] hover:border-none hover:shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
//                           style={{ fontFamily: '"Montserrat", sans-serif' }}
//                         >
//                           View Treatments
//                         </Button>
//                       </Link>

//                       <div className="relative">
//                         <Button
//                           className="bg-[#1E5089] hover:bg-[#717171] text-white py-6 text-base w-[220px]"
//                           style={{ fontFamily: '"Montserrat", sans-serif' }}
//                           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                         >
//                           Book Appointment
//                         </Button>

//                         {isDropdownOpen && (
//                           <div className="absolute left-0 bottom-full mb-2 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                             {hospitals.map((hospital, index) => (
//                               <a
//                                 key={index}
//                                 href={hospital.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1E5089]/10 hover:text-[#1E5089]"
//                                 onClick={() => setIsDropdownOpen(false)}
//                               >
//                                 {hospital.name}
//                               </a>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* About Section */}
//             <section className="pb-16 sm:pb-20 bg-[#FAF9F7] ">
//               <div className="w-[95%] max-w-[1200px] mx-auto space-y-12 pl-[12px]">
//                 <div className="text-center md:text-left space-y-6 reveal">
//                   <h2
//                     style={{
//                       fontFamily: '"Work Sans", sans-serif',
//                       fontSize: "26px",
//                       color: "#1E5089",
//                       fontWeight: 395,
//                       marginTop: "55px",
//                     }}
//                   >
//                     General Colorectal Services
//                   </h2>

//                   <p
//                     className="text-[14px] sm:text-[15px] leading-relaxed"
//                     style={{
//                       color: "#612512",
//                       fontFamily: '"Montserrat", sans-serif',
//                       opacity: 0.8,
//                       marginTop: "40px",
//                     }}
//                   >
//                     Mr Joshua Franklyn is a consultant General and Colorectal
//                     Surgeon working in Hertfordshire and Oxfordshire.{" "}
//                     <span className="font-bold">Mr. Franklyn</span> believes in
//                     building a strong, trusting relationship with each patient,
//                     ensuring you feel heard and cared for throughout your
//                     treatment while receiving timely, effective care.
//                   </p>
//                 </div>

//                 <div
//                   className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 reveal items-center p-6 md:p-10"
//                   style={{ backgroundColor: "#FAF9F7" }}
//                 >
//                   <div className="flex justify-center md:justify-start">
//                     <div className="rounded-full w-[180px] sm:w-[250px] md:w-[320px] h-[180px] sm:h-[250px] md:h-[320px] overflow-hidden">
//                       <img
//                         src={joshuaProfile}
//                         alt="Dr. Joshua Franklyn"
//                         className="object-cover w-full h-full"
//                       />
//                     </div>
//                   </div>

//                   <div className="text-center md:text-left space-y-2">
//                     <h2
//                       style={{
//                         fontFamily: '"Work Sans", sans-serif',
//                         fontSize: "20px",
//                         color: "#414141",
//                         fontWeight: 300,
//                       }}
//                     >
//                       General Surgery Consultations
//                     </h2>

//                     <ul className="list-disc ml-5 space-y-2 inline-block text-left">
//                       <p
//                         className="text-[14px] sm:text-[15px] leading-relaxed"
//                         style={{
//                           color: "#612512",
//                           fontFamily: '"Montserrat", sans-serif',
//                           opacity: 0.8,
//                         }}
//                       >
//                         <li>Hernias</li>
//                         <li>Haemorrhoids</li>
//                         <li>Fistulas and Fissures</li>
//                         <li>Gut wellness</li>
//                         <li>
//                           Diagnostic procedures: Colonoscopy and sigmoidoscopy
//                         </li>
//                         <li>Robotic General and Colorectal surgery</li>
//                       </p>
//                     </ul>
//                     <p
//                       className="text-[14px] sm:text-[15px] leading-relaxed"
//                       style={{
//                         color: "#612512",
//                         fontFamily: '"Montserrat", sans-serif',
//                         opacity: 0.8,
//                         marginTop: "20px",
//                       }}
//                     >
//                       Please see our{" "}
//                       <Link
//                         to="/treatments"
//                         className="underline font-semibold"
//                         style={{ color: "#612512" }}
//                       >
//                         Treatments
//                       </Link>{" "}
//                       page for more details
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Home;

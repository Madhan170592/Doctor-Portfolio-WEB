import { GraduationCap, Stethoscope, Award, Users } from "lucide-react";
import aboutFranklyn from "@/assets/about Dr.Josua Franklyn.jpg";

const About = () => {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
      {/* Inner Section - 90% width, full height, background FAF9F7 */}
      <div className="w-[95%] max-w-[1800px] bg-[#FAF9F7] min-h-screen px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-12 flex items-center">
        <section className="grid md:grid-cols-2 gap-12 items-center w-full my-20">
          {/* Left Column - Text */}
          <div>
            <div className="flex items-baseline justify-start">
              <h2
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: "26px",
                  color: "#31708F",
                  fontWeight: 395,
                }}
              >
                About Joshua Franklyn
              </h2>
              <h3>
                <span
                  className="text-[17px] font-light ml-3"
                  style={{
                    color: "#31708F",
                  }}
                >
                  MS FRCS
                </span>
              </h3>
            </div>

            <div className="space-y-4 leading-relaxed mt-6">
              <p
                className="text-[14px] sm:text-[15px]"
                style={{
                  color: "#612512",
                  fontFamily: '"Montserrat", sans-serif',
                  opacity: 0.8,
                }}
              >
                I’m a Consultant General and Colorectal Surgeon with a
                specialist interest in robotic colorectal surgery. My focus is
                on providing safe, personalised care in a timely manner —
                ensuring that every treatment decision is made together with my
                patients and guided by the best available evidence.
              </p>

              <p style={{ color: "#612512", opacity: 0.8 }}>
                I currently work as an NHS Consultant at West Hertfordshire
                Teaching Hospitals and privately.
              </p>

              <p style={{ color: "#612512", opacity: 0.8 }}>
                Alongside my clinical work, I’m passionate about teaching and
                training the next generation of surgeons. I serve as the{" "}
                <span className="font-bold">Undergraduate Surgical Lead</span>{" "}
                at{" "}
                <span className="font-bold">
                  University College London (UCL)
                </span>{" "}
                and previously worked as an{" "}
                <span className="font-bold">
                  Assistant Professor of Surgery
                </span>{" "}
                at Christian Medical College (CMC) Vellore.
              </p>

              <p style={{ color: "#612512", opacity: 0.8 }}>
                My commitment to research and academic surgery continues to
                shape my practice. I have authored over 20 peer-reviewed
                publications, presented at international conferences, and
                contributed to several surgical textbooks.
              </p>

              <p style={{ color: "#612512", opacity: 0.8 }}>
                I am a{" "}
                <span className="font-bold">
                  Fellow of the Royal College of Surgeons (FRCS)
                </span>{" "}
                and an active member of both the{" "}
                <span className="font-bold">
                  Association of Coloproctology of Great Britain & Ireland
                </span>{" "}
                and the{" "}
                <span className="font-bold">
                  European Society of Coloproctology
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutFranklyn}
              alt="Dr. Joshua Franklyn"
              className="shadow-lg object-cover"
              style={{ width: "480px", height: "500px" }}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

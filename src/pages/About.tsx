import { GraduationCap, Stethoscope, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import drPortrait from "@/assets/dr-franklyn-portrait.png";
import aboutFranklyn from "@/assets/about Dr.Josua Franklyn.jpg";
const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#FAF9F7] mt-8">
      {/* <div className="w-full px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48 mx-auto max-w-[1600px]"> */}
      <div className="w-full px-10 sm:px-16 md:px-28 lg:px-44 xl:px-60 mx-auto max-w-[1800px]">
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text */}
          <div className="order-1 md:order-1">
            <div className="flex items-baseline justify-start">
              {/* <div className="text-center md:text-left space-y-6 reveal"> */}
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

            <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
              <p
                className="text-[14px] sm:text-[15px] leading-relaxed"
                style={{
                  color: "#612512",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: "100px",
                  opacity: 0.8, // makes it visually thinner
                }}
              >
                <p style={{ marginBottom: "16px" }}>
                  I’m a Consultant General and Colorectal Surgeon with a
                  specialist interest in robotic colorectal surgery. My focus is
                  on providing safe, personalised care in a timely manner. —
                  ensuring that every treatment decision is made together with
                  my patients and guided by the best available evidence.{" "}
                </p>

                <p style={{ marginBottom: "16px" }}>
                  I currently work as an NHS Consultant at West Hertfordshire
                  Teaching Hospitals and privately.{" "}
                </p>

                <p style={{ marginBottom: "16px" }}>
                  Alongside my clinical work, I’m passionate about teaching and
                  training the next generation of surgeons. I serve as the
                  <span className="font-bold">
                    Undergraduate Surgical Lead{" "}
                  </span>{" "}
                  at{" "}
                  <span className="font-bold">
                    University College London (UCL)
                  </span>
                  and previously worked as an{" "}
                  <span className="font-bold">
                    Assistant Professor of Surgery{" "}
                  </span>
                  at Christian Medical College (CMC) Vellore
                </p>

                <p style={{ marginBottom: "16px" }}>
                  My commitment to research and academic surgery continues to
                  shape my practice. I have authored over 20 peer-reviewed
                  publications, presented at international conferences, and
                  contributed to several surgical textbooks.
                </p>

                <p style={{ marginBottom: "16px" }}>
                  I am a{" "}
                  <span className="font-bold">
                    Fellow of the Royal College of Surgeons (FRCS)
                  </span>{" "}
                  an active member of both the{" "}
                  <span className="font-bold">
                    Association of Coloproctology of Great Britain & Ireland
                  </span>{" "}
                  and the{" "}
                  <span className="font-bold">
                    European Society of Coloproctology
                  </span>
                  .
                </p>
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-2 md:order-2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={aboutFranklyn}
              alt="Dr. Joshua Franklyn"
              className=" shadow-lg object-cover"
              style={{ width: "508px", height: "523px" }}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

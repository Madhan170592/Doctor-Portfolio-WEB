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
              <h1
                className="text-[30px] normal-case tracking-normal"
                style={{
                  color: "#31708F",
                  fontStyle: "normal",
                }}
              >
                About Joshua Franklyn
              </h1>
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
              <h3
                style={{
                  fontWeight: 100,
                  fontSize: "17px",
                  color: "#612512",
                  lineHeight: "1.6",
                }}
              >
                <p style={{ marginBottom: "16px" }}>
                  I’m a <span className="font-bold">Consultant General and Colorectal Surgeon</span> with a specialist interest in <span className="font-bold">robotic colorectal surgery</span>. I am committed to providing my patients with a <span className="font-bold">safe, personalised, and compassionate service</span>, ensuring that treatment decisions are made together and based on the best available evidence. I have over <span className="font-bold">5 years of experience</span> as a consultant surgeon and am among the few surgeons in the <span className="font-bold">United Kingdom</span> with a total robotic practice in abdominal colorectal surgery.
                </p>

                <p style={{ marginBottom: "16px" }}>
                  I currently work as an <span className="font-bold">NHS Consultant</span> at <span className="font-bold">West Hertfordshire Teaching Hospitals</span>, where I lead independent <span className="font-bold">robotic colorectal cancer surgery</span> services and <span className="font-bold">benign proctology services</span>. I also offer private consultations and treatment for conditions such as <span className="font-bold">colorectal cancer</span>, <span className="font-bold">inflammatory bowel disease</span>, <span className="font-bold">diverticular disease</span>, <span className="font-bold">hernias</span>, and <span className="font-bold">anorectal disorders</span> including haemorrhoids, fissures, and fistulas.
                </p>

                <p style={{ marginBottom: "16px" }}>
                  Alongside my clinical practice, I have a strong commitment to <span className="font-bold">teaching and training</span>. I am the <span className="font-bold">Undergraduate Surgical Lead at University College London (UCL)</span> and previously worked as an <span className="font-bold">Assistant Professor of Surgery at Christian Medical College (CMC) Vellore</span>. These roles have allowed me to train medical students and young surgeons both in the <span className="font-bold">UK</span> and internationally.
                </p>

                <p style={{ marginBottom: "16px" }}>
                  I am also actively involved in <span className="font-bold">research and academic surgery</span>, with more than <span className="font-bold">20 peer-reviewed publications</span> and contributions to many surgical textbooks including <span className="font-bold">Bailey & Love’s Textbook of Surgery</span>. I regularly present at national and international conferences and remain passionate about advancing surgical techniques, particularly in the field of <span className="font-bold">robotic colorectal surgery</span>.
                </p>

                <p style={{ marginBottom: "16px" }}>
                  I am a <span className="font-bold">Fellow of the Royal College of Surgeons (FRCS)</span> and a member of the <span className="font-bold">Association of Coloproctology of Great Britain & Ireland (ACPGBI)</span> and the <span className="font-bold">European Society of Coloproctology</span>.
                </p>
              </h3>
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

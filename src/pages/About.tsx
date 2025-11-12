import aboutFranklyn from "@/assets/joshua-garden.png";

const About = () => {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center pt-4">
      {/* Inner Section - matches header width structure */}
      <div className="w-[95%] bg-[#FAF9F7] min-h-screen py-12 flex items-center">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <section className="grid md:grid-cols-2 gap-12 items-start w-full my-20 pl-[12px]">
            {/* Right Column - Image - comes FIRST on mobile */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src={aboutFranklyn}
                alt="Dr. Joshua Franklyn"
                className="shadow-lg object-cover"
                style={{ width: "480px", height: "500px" }}
              />
            </div>

            {/* Left Column - Text - comes SECOND on mobile */}
            <div className="order-2 md:order-1">
              <div className="flex items-baseline justify-start flex-wrap">
                <h2
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: "26px",
                    color: "#1E5089",
                    fontWeight: 395,
                  }}
                >
                  Joshua Franklyn
                </h2>
                <span
                  className="text-[17px] font-light ml-2"
                  style={{ color: "#1E5089" }}
                >
                  MS
                </span>
                <span
                  className="text-[17px] font-light ml-1"
                  style={{ color: "#1E5089" }}
                >
                  FRCS
                </span>
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
                  Mr. Joshua Franklyn is a Consultant Robotic General and
                  Colorectal Surgeon. He was elected Fellow of the Royal College
                  of Surgeons in 2020 and completed specialist fellowship
                  training at the renowned Basingstoke Peritoneal Malignancy
                  Institute, focusing on the management of advanced colorectal
                  cancer. He subsequently completed dedicated robotic colorectal
                  training at Oxford University Hospitals (OUH) prior to his
                  appointment as consultant surgeon at West Hertfordshire
                  Teaching Hospital.
                </p>

                <p
                  className="text-[14px] sm:text-[15px]"
                  style={{
                    color: "#612512",
                    fontFamily: '"Montserrat", sans-serif',
                    opacity: 0.8,
                  }}
                >
                  Mr. Franklyn has published widely in scientific journals,
                  presented at international meetings, and authored chapters in
                  multiple surgical textbooks. He is actively involved in
                  teaching and mentoring the next generation of surgeons.
                  Alongside his clinical work, he has served as Assistant
                  Professor of General Surgery at Christian Medical Vellore and
                  has most recently been appointed as the Surgical Lead for
                  Undergraduate Medical Education at University College London
                  (UCL).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;

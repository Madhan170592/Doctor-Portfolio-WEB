import aboutFranklyn from "@/assets/joshua-garden.png";

const About = () => {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center pt-4">
      {/* Inner Section - matches header width structure */}
      <div className="w-[95%] bg-[#FAF9F7] min-h-screen py-12 flex items-center">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <section className="grid md:grid-cols-2 gap-12 items-start w-full my-20 pl-[12px]">
            {/* Left Column - Text - Aligned with logo */}
            <div>
              {/* <div className="flex items-baseline justify-start">
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
              </div> */}
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

  {/* MS FRCS inline always */}
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
                  I am a Consultant General and Colorectal Surgeon with a
                  specialist interest in robotic colorectal surgery. My focus is
                  on providing safe, personalised care in a timely manner —
                  ensuring that every treatment decision is made together with
                  my patients and guided by the best available evidence.
                </p>

                <p
                  className="text-[14px] sm:text-[15px]"
                  style={{
                    color: "#612512",
                    fontFamily: '"Montserrat", sans-serif',
                    opacity: 0.8,
                  }}
                >
                  I currently work as an NHS Consultant at West Hertfordshire
                  Teaching Hospitals and privately. Alongside my clinical work, I am passionate about teaching and
                  training the next generation of surgeons. I serve as the{" "}
                  <span >Undergraduate Surgical Lead</span>{" "}
                  at{" "}
                  <span >
                    University College London (UCL)
                  </span>{" "}
                  and previously worked as an{" "}
                  <span >
                    Assistant Professor of Surgery
                  </span>{" "}
                  at Christian Medical College (CMC) Vellore.
                </p>

                {/* <p
                  className="text-[14px] sm:text-[15px]"
                  style={{
                    color: "#612512",
                    fontFamily: '"Montserrat", sans-serif',
                    opacity: 0.8,
                  }}
                > */}
                 
                {/* </p> */}

                {/* <p
                  className="text-[14px] sm:text-[15px]"
                  style={{
                    color: "#612512",
                    fontFamily: '"Montserrat", sans-serif',
                    opacity: 0.8,
                  }}
                >
                  My commitment to research and academic surgery continues to
                  shape my practice. I have authored over 20 peer-reviewed
                  publications, presented at international conferences, and
                  contributed to several surgical textbooks.
                </p> */}

                <p
                  className="text-[14px] sm:text-[15px]"
                  style={{
                    color: "#612512",
                    fontFamily: '"Montserrat", sans-serif',
                    opacity: 0.8,
                  }}
                >
                  I am a{" "}
                  <span >
                    Fellow of the Royal College of Surgeons (FRCS)
                  </span>{" "}
                  and an active member of both the{" "}
                  <span >
                    Association of Coloproctology of Great Britain & Ireland
                  </span>{" "}
                  and the{" "}
                  <span >
                    European Society of Coloproctology
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Right Column - Image - Aligned to end with button */}
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
      </div>
    </main>
  );
};

export default About;

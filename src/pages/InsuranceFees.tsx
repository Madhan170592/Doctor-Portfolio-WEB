import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Shield } from "lucide-react";
import bupaLogo from "@/assets/Bupa.png";
import aetnaLogo from "@/assets/aetna.png";
import allianzLogo from "@/assets/allianz.png";
import avivaLogo from "@/assets/aviva.jpg";
import axaLogo from "@/assets/axahealth.png";
import cignaLogo from "@/assets/cigna.png";
import vitalityLogo from "@/assets/vitality.png";
import wpaLogo from "@/assets/wpa.png";

const InsuranceFees = () => {
  const insurers = [
    { name: "Bupa", logo: bupaLogo },
    { name: "AXA", logo: axaLogo },
    // { name: "Cigna", logo: cignaLogo },
    { name: "Vitality", logo: vitalityLogo },
    { name: "Aviva", logo: avivaLogo },
    { name: "Allianz", logo: allianzLogo },
    // { name: "Aetna", logo: aetnaLogo },
    { name: "WPA", logo: wpaLogo },
  ];

  const faqItems = [
    {
      question: "What is meant by ''fee assured''?",
      answer: [
        "As a fee-assured surgeon, I charge a fixed fee agreed with you/your private insurer—so there are no surprises. This ensures clarity, transparency, and peace of mind when planning your care. ",
      ],
    },
    {
      question: "Do I need to contact my insurance company first?",
      answer: [
        "Yes, it's best to get in touch with your insurance company before your appointment.",
        "Joshua Franklyn is recognised by all major health insurers. Please check with your insurer to make sure your policy covers treatment with Joshua Franklyn and to get a pre-authorisation number (they'll usually give you one before your appointment).",
        "If your insurer isn't listed, that's absolutely fine — most providers are happy to approve cover if the surgeon is recognised by the main insurance companies. Just contact them to confirm your cover.",
      ],
    },
    {
      question: "What is the referral process?",
      answer: [
        <>
          Whether you come through your <span>GP</span> or refer yourself, we'll
          make the process as simple and stress-free as possible.
        </>,
        <>
          You can see <span>Mr Joshua Franklyn</span> either{" "}
          <span>with a referral</span> from your GP or another doctor, or you
          can <span>self-refer</span> directly.
        </>,
        "If you'd like to self-refer, please email a short summary of your symptoms and any relevant medical history to our friendly team. They will review your information and contact you to arrange an appointment at a time that suits you.",
      ],
    },
  ];

  return (
    <main className="bg-white flex justify-center items-stretch min-h-screen">
      {/* Full-height FAF9F7 background container */}
      <div className="w-[95%] max-w-[1800px] bg-[#FAF9F7] min-h-screen px-6 sm:px-10 md:px-14 lg:px-11  xl:px-34 pt-[100px] pb-24 flex flex-col justify-start shadow-sm">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Header */}
          <section className="mb-10 text-center">
            <p
              className="text-2xl md:text-[28px]"
              style={{
                fontWeight: 300,
                color: "#1E5089",
              }}
            >
              Insurance & Fees
            </p>
            <p
              className="text-lg md:text-[20px] max-w-3xl mx-auto mt-4"
              style={{ color: "#414141", fontWeight: 300 }}
            >
              Transparent pricing and comprehensive insurance coverage
            </p>
          </section>

          {/* Insurance Section - Aligned with header boundaries */}
          <section className="">
            <div className="w-full">
              <Card
                className="glass-card"
                style={{ backgroundColor: "#FAF9F7" }}
              >
                <CardContent className="p-5">
                  <p
                    className="text-2xl md:text-[28px] text-center"
                    style={{
                      fontWeight: 300,
                      color: "#1E5089",
                    }}
                  >
                    Recognised by All Major Health Insurers
                  </p>
                  <p
                    className="text-lg md:text-[20px] text-center  mx-auto mt-4"
                    style={{
                      color: "#414141",
                      fontWeight: 300,
                    }}
                  >
                    Joshua Franklyn is recognised by all major health insurers
                    in the UK and is fee assured*
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center py-4">
                    {insurers.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-10 object-contain"
                        />
                        <p className="mt-2 text-sm font-medium text-center">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section - Aligned with header boundaries */}
          <section style={{ backgroundColor: "#FAF9F7" }} className="py-8">
            <div className="w-full">
              <h2
                className="mb-8 text-center text-2xl md:text-[28px]"
                style={{
                  color: "#31708E",
                  fontFamily: '"Worksans-extralight","Work Sans", sans-serif',
                  padding: "10px 0",
                  borderRadius: "6px",
                  fontWeight: 300,
                }}
              >
                Frequently Asked Questions
              </h2>
              {/* <div>
                <p
                  className="mb-2 text-lg md:text-[20px] "
                  style={{
                    color: "#414141",
                    fontWeight: 300,
                  }}
                >
                  Fee Assured Services
                </p>
                <p
                  className="text-sm md:text-[15px] mb-8"
                  style={{
                    color: "#612512",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: "100px",
                    opacity: 0.8,
                  }}
                >
                  After your initial consultation, we'll provide a personalised
                  treatment plan with a clear, fee-assured quotation. This
                  covers your entire treatment and one appointment, so there are
                  no hidden costs and no surprises.{" "}
                </p>
              </div> */}

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card border-0 rounded-lg  py-4"
                    style={{ backgroundColor: "#FAF9F7" }}
                  >
                    <p
                      className="mb-2 text-lg md:text-[20px]"
                      style={{
                        color: "#414141",
                        fontWeight: 300,
                      }}
                    >
                      {item.question}
                    </p>

                    {Array.isArray(item.answer) ? (
                      item.answer.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm md:text-[15px] leading-relaxed"
                          style={{
                            color: "#612512",
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: "100px",
                            opacity: 0.8,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p
                        className="text-sm md:text-[15px] leading-relaxed"
                        style={{
                          color: "#612512",
                          fontFamily: '"Montserrat", sans-serif',
                          fontWeight: "100px",
                          opacity: 0.8,
                        }}
                      >
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default InsuranceFees;

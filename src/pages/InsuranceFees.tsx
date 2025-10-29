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
    bupaLogo,
    axaLogo,
    cignaLogo,
    vitalityLogo,
    avivaLogo,
    allianzLogo,
    aetnaLogo,
    wpaLogo,
  ];

  const faqItems = [
    {
      question: "How soon can I be seen?",
      answer:
        "We know how important it is to be seen quickly when you’re not feeling your best. Most patients are able to have a face-to-face appointment within one to two weeks, and telephone or video consultations are often available within just a few days.",
    },
    {
      question: "How soon can I be treated?",
      answer: [
        "This can vary depending on your condition, but we always do our best to make sure you’re treated as soon as possible.",
        "• Proctology conditions (such as haemorrhoids, fissures, and fistulas):",
        "In many cases, we can complete all the necessary assessments — including your examination and any investigations — on the same day. Treatment is usually arranged within a week of your clinic visit.",
        "• Abdominal wall hernias (such as inguinal or incisional hernias):",
        "We aim to offer treatment within a week of your consultation, wherever possible.",
        "Our team will guide you through each step, keeping everything as simple and stress-free as possible.",
        "Fee Assured Services",
        "After your initial consultation, we’ll provide a personalised treatment plan with a clear, fee-assured quotation.",
        "This covers your entire treatment and one appointment, so there are no hidden costs and no surprises.",
      ],
    },

    {
      question: "Do I need to contact my insurance company first?",
      answer: [
        "Yes, it’s best to get in touch with your insurance company before your appointment.",
        "Joshua Franklyn is recognised by all major health insurers — including Allianz, Aviva, AXA, Aetna, Bupa, Cigna, Vitality and WPA. Please check with your insurer to make sure your policy covers treatment with Joshua Franklyn and to get a pre-authorisation number (they’ll usually give you one before your appointment).",
        "If your insurer isn’t listed, that’s absolutely fine — most providers are happy to approve cover if the surgeon is recognised by the main insurance companies. Just contact them to confirm your cover.",
      ],
    },
    {
      question: "What is the referral process?",
      answer: [
        <>
          Whether you come through your <span className="font-bold">GP</span> or
          refer yourself, we’ll make the process as simple and stress-free as
          possible.
        </>,
        <>
          You can see <span className="font-bold">Mr Joshua Franklyn</span>{" "}
          either <span className="font-bold">with a referral</span> from your GP
          or another doctor, or you can{" "}
          <span className="font-bold">self-refer</span> directly.
        </>,
        "If you’d like to self-refer, please email a short summary of your symptoms and any relevant medical history to our friendly team. They will review your information and contact you to arrange an appointment at a time that suits you.",
      ],
    },
  ];

  return (
    <main className="bg-white flex justify-center items-stretch min-h-screen">
      {/* Full-height FAF9F7 background container */}
      <div className="w-[95%] max-w-[1800px] bg-[#FAF9F7] min-h-screen px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-[100px] pb-24  flex flex-col justify-start shadow-sm">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Header */}
          <section className="mb-16 text-center">
            <p
              style={{
                fontWeight: 300,
                color: "#31708F",
                fontSize: "28px",
              }}
            >
              {" "}
              Insurance & Fees
            </p>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8"
              style={{ color: "#414141", fontWeight: 300, fontSize: "20px" }}
            >
              {" "}
              Transparent pricing and comprehensive insurance coverage
            </p>
          </section>

          {/* Insurance Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card
                className="glass-card"
                style={{ backgroundColor: "#FAF9F7" }}
              >
                <CardContent className="p-8">
                  {/* <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Shield className="text-secondary" size={32} />
                  </div>
                </div> */}
                  {/* <h2 className=" text-center mb-6"> */}
                  <p
                    className=" text-center mb-6"
                    style={{
                      fontWeight: 300,
                      color: "#31708F",
                      fontSize: "28px",
                    }}
                  >
                    Recognised by All Major Health Insurers
                  </p>
                  <p
                    className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mt-8"
                    style={{
                      color: "#414141",
                      fontWeight: 300,
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    Joshua Franklyn is recognised by all major health insurers
                    in the UK
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {insurers.map((logo, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center p-4 bg-muted/30 rounded-lg"
                      >
                        <img
                          src={logo}
                          alt={`Insurer ${idx + 1}`}
                          className="h-12 object-contain" // adjust height as needed
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section style={{ backgroundColor: "#FAF9F7" }} className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2
                className="mb-8 text-center"
                style={{
                  color: "#31708E",
                  fontSize: "28px",
                  fontFamily: '"Worksans-extralight","Work Sans", sans-serif',
                  padding: "10px 0",
                  borderRadius: "6px",
                  fontWeight: 300,
                }}
              >
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card border-0 rounded-lg px-6 py-4"
                    style={{ backgroundColor: "#FAF9F7" }}
                  >
                    <p
                      className="mb-2"
                      style={{
                        color: "#414141",
                        fontWeight: 300,
                        fontSize: "20px",
                      }}
                    >
                      {item.question}
                    </p>

                    {Array.isArray(item.answer) ? (
                      item.answer.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-[14px] sm:text-[15px] leading-relaxed"
                          style={{
                            color: "#612512",
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: "100px",
                            opacity: 0.8, // makes it visually thinner
                          }}
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p
                        className="text-[14px] sm:text-[15px] leading-relaxed"
                        style={{
                          color: "#612512",
                          fontFamily: '"Montserrat", sans-serif',
                          fontWeight: "100px",
                          opacity: 0.8, // makes it visually thinner
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

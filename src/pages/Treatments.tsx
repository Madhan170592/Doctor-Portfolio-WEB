import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Treatments = () => {
  const treatments = [
    {
      id: "robotic",
      title: "Robotic Surgery",
      category: "Advanced Surgical Techniques",
      shortDesc:
        "State-of-the-art keyhole surgical techniques for bowel conditions with minimal pain and faster recovery.",
      fullDesc: `
    I use the latest <span class="font-bold">keyhole surgical techniques</span> to treat many <span class="font-bold">bowel conditions</span>. 
    This type of surgery is <span class="font-bold">less painful</span>, usually means a <span class="font-bold">shorter stay in hospital</span>, 
    a <span class="font-bold">quicker recovery</span>, and leaves <span class="font-bold">smaller scars</span> compared with traditional open surgery.

    I treat patients with <span class="font-bold">abdominal wall hernias</span> (inguinal and incisional hernias), 
    <span class="font-bold">bowel cancer</span>, <span class="font-bold">inflammatory bowel disease</span> 
    (Crohn’s disease and ulcerative colitis), and <span class="font-bold">diverticular disease</span>. 

    My aim is always to use the <span class="font-bold">safest and most effective approach</span> to get you back to health 
    as <span class="font-bold">quickly and comfortably</span> as possible.
  `,
    },
    {
      id: "hernia",
      title: "Hernia Repair",
      category: "Robotic & Keyhole Surgery",
      shortDesc:
        "Expert robotic and open hernia repair for inguinal, umbilical, and incisional hernias.",
      fullDesc: `I offer robotic and open hernia repair. Whether you have an inguinal, umbilical, or incisional hernia, my main objective is to treat the condition in a timely and safe manner so you can help you return to your normal activities more quickly and with greater comfort.`,
    },
    {
      id: "anorectal",
      title: "Anorectal Conditions",
      category: "Specialized Treatment",
      shortDesc:
        "Compassionate treatment for haemorrhoids, fissures, fistulas, and pilonidal disease.",
      fullDesc: {
        paragraphs: [
          `Problems affecting the <span class="font-bold">bottom</span> can be painful, disruptive, and sometimes difficult to talk about. These conditions are very common, and seeking <span class="font-bold">specialist care</span> can make a big difference to your comfort and quality of life.`,
          `I offer <span class="font-bold">personalised treatment</span> for:`,
        ],
        bullets: [
          `<span class="font-bold">Pilonidal disease</span> – a recurring skin infection near the tailbone that can cause swelling, discharge, and discomfort.`,
          `<span class="font-bold">Anorectal abscesses</span> – painful infections near the bottom, which may require a small procedure to drain.`,
          `<span class="font-bold">Haemorrhoids (piles)</span> – lumps inside or around the bottom that can bleed, itch, or cause discomfort.`,
          `<span class="font-bold">Anal fissures</span> – small tears that cause sharp pain and bleeding when opening the bowels.`,
          `<span class="font-bold">Anal fistulas</span> – small tunnels that develop under the skin between the bowel and the skin around the bottom.`,
          `<span class="font-bold">Chronic constipation / Diarrhea / Changes to bowel habits</span> `,
        ],
        paragraph: [
          `<span>I am able to offer <span class="font-bold">fast access to consultation, diagnosis and treatment</span> to minimise disruption to your daily life — helping you get back to feeling like yourself as quickly as possible, with <span class="font-bold">complete discretion and support</span> at every step.</span>`,
        ],
      },
    },
    {
      id: "colonoscopy",
      title: "Colonoscopy & Sigmoidoscopy",
      category: "Diagnostic Procedures",
      shortDesc:
        "Fast access to diagnostic procedures for bowel symptoms and early cancer detection.",
      fullDesc: {
        paragraphs: [
          `If you are experiencing <span class="font-bold">bowel symptoms</span> such as <span class="font-bold">persistent bleeding</span>, <span class="font-bold">changes in bowel habits</span>, <span class="font-bold">abdominal pain</span>, or <span class="font-bold">unexplained weight loss</span>, it’s important to investigate the cause promptly. <span class="font-bold">Early detection</span> can make a big difference, especially for conditions like <span class="font-bold">bowel cancer</span>, <span class="font-bold">polyps</span>, or <span class="font-bold">inflammatory bowel disease</span>.`,

          `I perform <span class="font-bold">colonoscopy</span> and <span class="font-bold">sigmoidoscopy</span> to examine your bowel. A <span class="font-bold">colonoscopy</span> looks at the entire colon, while a <span class="font-bold">sigmoidoscopy</span> focuses on the lower part of the bowel (<span class="font-bold">rectum and sigmoid colon</span>). Both procedures use a <span class="font-bold">thin, flexible camera</span> passed gently through the bottom, allowing me to see any abnormalities clearly.`,

          `You remain awake during the procedure, but I ensure you are <span class="font-bold">comfortable and supported</span> throughout, with <span class="font-bold">sedation available</span> if needed. These investigations are <span class="font-bold">quick, safe</span>, and are one of the most effective ways to <span class="font-bold">detect bowel problems early</span>, giving you the best chance of successful treatment.`,
        ],
      },
    },
  ];

  return (
    // <main className="min-h-screen pt-24 pb-16 bg-[#FAF9F7]">
    //   <div className="container mx-auto px-40">
        <main className="min-h-screen pt-20 pb-16 bg-[#FAF9F7]">
  <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">

        {/* Header */}
        <section className="mb-16 text-center mt-8">
          <p
            style={{
              fontWeight: 300,
              color: "#31708F",
              fontSize: "28px",
            }}
          >
            Treatments & Procedures
          </p>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8"
            style={{ color: "#414141", fontWeight: 300, fontSize: "20px" }}
          >
            Advanced care. Personal attention. Peace of mind.
          </p>
        </section>

        {/* Treatments Grid */}
        {/* <section className="grid grid-cols-2 gap-6 max-w-[1200px] mx-auto"> */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">

          {treatments.map((treatment) => (
            <Card
              key={treatment.id}
              // className="glass-card hover-lift group"
              style={{ backgroundColor: "#FAF9F7" }}
            >
              <CardContent className="p-6">
                <p
                  className=" uppercase tracking-wide mb-5"
                  style={{
                    color: "#31708F",
                    fontSize: "17px",
                  }}
                >
                  {treatment.category}
                </p>

                <p
                  style={{
                    color: "#31708F",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  {treatment.title}
                </p>

                <p
                  className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6"
                  style={{
                    color: "#414141",
                    fontWeight: 300,
                    fontSize: "15px",
                  }}
                >
                  {treatment.shortDesc}
                </p>

                {/* Full description */}
                {/* Full description */}
                <div className="space-y-4  leading-relaxed mt-6">
                  <p
                    className="text-[14px] sm:text-[15px] leading-relaxed"
                    style={{
                      color: "#612512",
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: "100px",
                      opacity: 0.8, // makes it visually thinner
                    }}
                  >
                    {typeof treatment.fullDesc === "string" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: treatment.fullDesc
                            .split("\n\n")
                            .map((p) => `<p>${p}</p>`)
                            .join(""),
                        }}
                      />
                    ) : (
                      <>
                        {treatment.fullDesc.paragraphs.map((p, idx) => (
                          <p
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: p }}
                          />
                        ))}

                        {treatment.fullDesc.bullets && (
                          <ul className="list-disc ml-5 space-y-2">
                            {treatment.fullDesc.bullets.map((b, idx) => (
                              <li
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: b }}
                              />
                            ))}
                          </ul>
                        )}
                        {treatment.fullDesc.paragraph &&
                          treatment.fullDesc.paragraph.map((para, index) => (
                            <p
                              key={index}
                              style={{
                                color: "#612512",
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: "100px",
                                opacity: 0.8, // makes it visually thinner
                              }}
                              className="text-gray-700 leading-relaxed mt-4"
                              dangerouslySetInnerHTML={{ __html: para }}
                            />
                          ))}
                      </>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Treatments;

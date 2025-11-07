
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BookOpen } from "lucide-react";

const Publications = () => {
  const chapters = [
    {
      title: "Bailey and Love - 28th Edition (2023)",
      chapter: "Chapter 7: Basic Surgical Skills",
      authors: "Joshua Franklyn and Mark Coleman",
    },
    {
      title:
        "Communication Skills for Surgeons, Patel & Rane Springer Nature (2023)",
      chapter: "Chapter: Trainer-trainee relationship",
      authors: "Joshua Franklyn, Tom Cecil and Mark Coleman",
    },
    {
      title: "Bailey and Love - 29th Edition (2025)",
      chapter: "Basic Surgical Skills",
      authors: "Edited by Ronan Connell and Rob Sayers",
      status: "In Press",
    },
    {
      title: "Tips and Tricks in Minimally Invasive Surgery (TATMIS)",
      chapter:
        "Robotic Left hemicolectomy, Sigmoid colectomy and Hartmann's procedure",
      authors: "Edited by S. Aroori",
      status: "Commissioned",
    },
  ];

  const peerReviewed = [
    {
      title:
        "Training the trainees in robotic surgery - a pilot scheme in the United Kingdom",
      journal: "BMC Medical Education, Apr 2025",
      authors: "Mohammed Al-Ani, Joshua Franklyn, Vanash Patel",
      links: [
        "https://pubmed.ncbi.nlm.nih.gov/?term=Al-Ani+M&cauthor_id=40781714",
        "https://pubmed.ncbi.nlm.nih.gov/?term=Franklyn+J&cauthor_id=40781714",
        "https://pubmed.ncbi.nlm.nih.gov/?term=Patel+V&cauthor_id=40781714",
      ],
    },
    {
      title:
        "Transitioning to da Vinci Xi for colorectal cancer surgery: a prospective cohort study of 102 cases from a UK centre with a structured robotic programme",
      journal: "Journal of Robotic Surgery, Sep 2025",
      authors: "Samuel Massias, J Franklyn and Vanash Patel",
    },
    {
      title:
        "Long-term mental and physical quality of life outcomes following ileal pouch anal anastomosis surgery",
      journal: "Annals of RCS, Jan 2025 (Impact factor 1.2)",
      pmid: "38362797",
    },
    {
      title:
        "Immersive robotic colorectal training in the UK is safe and efficient",
      journal:
        "Annals of the Royal College of Surgeons RCSJ-2024-0374.R1 (Impact factor 1.9) Dec 2024 ",
      authors: "J Franklyn, S Holtham and G Farook",
    },
    {
      title:
        "Training the trainees in robotic surgery - a pilot scheme in the United Kingdom",
      journal: "BMC Med education : August 2025 ",
      authors: "Mohamed Al Ani, Joshua Franklyn and Vanash Patel",
    },
    {
      title:
        "Addressing mental and physical fatigue in major abdominal surgery by incorporating muscle stretches and hydration mini breaks",
      journal:
        "Annals of the Royal College of Surgeons RCSJ-2024-0427.R1 (Impact factor 1.9) Jan 2025 ",
      authors: "J Franklyn, Brendan Moran and Tom. Cecil",
    },
    {
      title: "Colon cancer survival in the elderly without curative surgery",
      journal:
        "Annals of the Royal College of Surgeons, Sep 2024 (Impact factor 1.9)",
      authors: "J Franklyn, I Lindsey",
      pmid: "38404248",
    },
    {
      title:
        "Geographical variations in long term colorectal cancer outcomes in England: a contemporary population analysis revealing the north-south divide in colorectal cancer survival.",
      journal: "Surgical Endoscopy, Mar 2023 (Impact factor 4.6)",
      authors: "J Franklyn, Mark Coleman, Sebastian Smolarek",
      pmid: "36991267",
    },
    {
      title:
        "Colorectal cancer outcomes determined by mode of presentation: analysis of population data in England between 2010 and 2014",
      journal: "Techniques in Coloproctology, Jan 2022 (Impact factor 3.78)",
      authors:
        "J Franklyn, J Lomax, P. Labib, A. Baker, J Hosking, B Moran, S Smolarek",
      pmid: "35084620",
    },
    {
      title:
        "Abdominal wall reconstruction with tissue-engineered mesh using Muscle-Derived stem cells in an Animal model",
      journal:
        "Regenerative Engineering and Translational Medicine, Apr 2022 (Impact factor 2.2)",
      authors: "Joshua Franklyn, Sowmya Rames, Vrisha Madhuri, Inian Samarasam",
      doi: "10.1007/s40883-022-00253-2",
    },
    {
      title:
        "Young onset colorectal cancer: Insights based on a population-based study from England",
      journal: "Colorectal Disease, Apr 2022 (Impact factor 3.78)",
      authors:
        "J Franklyn, J Lomax, P Labib, M Abdalkoddus, A Baker, J Hosking, S Smolarek",
      pmid: "35437885",
    },
    {
      title:
        "Delayed cholecystectomy following Endoscopic Retrograde Cholangio-Pancreatography is not associated with worse surgical outcomes.",
      journal: "Surgical Endoscopy, Jul 2021 (Impact factor 4.6)",
      authors:
        "Muhammed Abdalkoddus, Joshua Franklyn, Rashid Ibrahim, Nur Zainuddin, Lucy Yao, Somaiah Aroori",
      pmid: "34231064",
    },
    {
      title:
        "A surgical ward round proforma can improve documentation and efficiency of ward rounds",
      journal:
        "BMJ Post Graduate Medical Journal, Dec 2020 (Impact factor 2.4)",
      authors:
        "Dominic Dewson, Victoria Eves, Joshua Franklyn, Sebastian Smolarek",
      pmid: "33361416",
    },
    {
      title:
        "Prognosis of non-operative management of non-metastatic colorectal cancer in octo/nonagenarians",
      journal:
        "Annals of the Royal College of Surgeons, Sep 2020 (Impact factor 1.2)",
      authors:
        "Franklyn J, Abdalkuddos M, Demitra Limnantitou, Rossi B, Smolarek S",
      pmid: "32799666",
    },
    {
      title:
        "Prospective randomised controlled trial comparing early post-operative complications in patients undergoing loop colostomy with and without a stoma rod",
      journal: "Colorectal Disease, Jul 2017 (Impact factor 3.8)",
      authors:
        "Franklyn J, Varghese G, Mittal R, Rebekah G, Jesudason MR, Perakath B",
      pmid: "28067986",
    },
    {
      title:
        "Oncological outcomes of Obstructed locally advanced rectal cancer in a tertiary care Indian hospital. ",
      journal: "International Surgery journal Volume 6 No. 11 Nov 2018",
      authors:
        "Joshua Franklyn, Gigi Varghese, Rajat Raghunath, Tunny Sebastian, Mark Ranjan Jesudason",
    },
    {
      title:
        "Oral verrucous carcinoma: ten-year experience from a tertiary care hospital in India.",
      journal:
        "Indian Journal of Medical and Pediatric Oncology, Dec 2017 (Impact factor 0.2)",
      authors:
        "Joshua Franklyn, Rajinikanth Janakiraman, Amit J Tirkey, Cecil Thankachan, John Muthusami",
      pmid: "29333011",
    },
    {
      title:
        "Parotid abscess – clinical analysis of 40 cases in a tertiary Indian hospital.",
      journal:
        "Journal of Oral and Maxillofacial Surgery, Medicine, and Pathology, May 2017",
      authors:
        "Joshua Franklyn, Pranay Gaikwad, Emmanuel Lazarus, Alen Thomas, John Muthusami",
      links: [
        "https://www.sciencedirect.com/science/article/abs/pii/S221255581630151X",
        "https://www.sciencedirect.com/science/article/abs/pii/S221255581630151X",
        "https://www.sciencedirect.com/science/article/abs/pii/S221255581630151X",
        "https://www.sciencedirect.com/science/article/abs/pii/S221255581630151X",
        "https://www.sciencedirect.com/science/article/abs/pii/S221255581630151X",
      ],
    },
    {
      title:
        "Malignant Peripheral Nerve Sheath Tumour of the Small Bowel Presenting with Intussusception and Perforation: a Double Jeopardy? ",
      journal: "Indian J Surg Oncology June 2017 (Impact factor 0.16)",
      authors:
        "Ananth P Abraham, Joshua Franklyn, Jagan Chandramohan, Pranay Gaikwad, John Chandrakumar Muthusami",
      pmid: "28546722",
    },
    {
      title:
        "Demographics and outcomes of surgically treated right sided colon cancer in India: 9 year single institution experience",
      journal: "Tropical Gastroenterology, 2016",
      authors:
        "Joshua Franklyn, Rohin Mittal, Tunny Sebastian, Benjamin Perakath",
      pmid: "29668177",
    },
    {
      title:
        "Operable carcinoma stomach – Demographics, survival and outcomes. An analysis of 427 patients in a tertiary care Indian hospital.",
      journal: "Journal of Gastric Cancer, Mar 2017 (Impact factor 0.81)",
      authors:
        "Joshua Franklyn, Sam V. George, Myla Yacob, Vijay Abraham, Sudhakar Chandran, Tunny Sebastian, Inian Samarasam",
      pmid: "2833764",
    },
    {
      title:
        "Disseminated echinococcosis of the lung and central compartment of the neck",
      journal: "World Journal of Endocrine Surgery, Jan–Apr 2013; 5(1): 25–27",
      authors:
        "Nischal Pandya, MJ Paul, Lalit Choudhry, Birla Roy Gnanamuthu, Kochu Krishnan, Joshua Franklyn, Jyoti Prasad Kalita",
    },
  ];

  return (
    <main className="bg-white flex justify-center items-stretch min-h-screen">
      {/* Inner container with full-height FAF9F7 background */}
      <div className="w-[95%] bg-[#FAF9F7] min-h-screen pt-[100px] pb-24 flex flex-col justify-start">
        {/* Content aligned with header's inner container */}
        <div className="w-[95%] max-w-[1200px] mx-auto pl-[12px]">
          {/* Header */}
          <section className="mb-10 text-center">
            <p
              style={{
                fontWeight: 300,
                color: "#1E5089",
                fontSize: "28px",
              }}
            >
             Research
            </p>
          </section>

          {/* Tabs for different publication types */}
          <Tabs defaultValue="papers" className="w-full ">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-1 md:grid-cols-2 mb-20  bg-transparent gap-4">
              <TabsTrigger
                value="papers"
                className="rounded-xl py-3 shadow-sm data-[state=active]:bg-[#FAF9F7] data-[state=active]:text-[#1E5089] border border-transparent data-[state=active]:border-[#1E5089] transition"
              >
                <FileText className="h-4 w-4 mr-2" />
               Scientific Publications
              </TabsTrigger>

              <TabsTrigger
                value="chapters"
                className="rounded-xl py-3 shadow-sm data-[state=active]:bg-[#FAF9F7] data-[state=active]:text-[#1E5089] border border-transparent data-[state=active]:border-[#1E5089] transition "
              >
                <BookOpen className="mr-2 h-4 w-4" />
               Text Book Chapters
              </TabsTrigger>
            </TabsList>

            <TabsContent value="papers">
              <div className="space-y-6 pt-5 md:pt-0">
                {peerReviewed.map((paper, index) => (
                  <Card key={index} style={{ backgroundColor: "#FAF9F7" }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p
                            className="mb-5"
                            style={{
                              fontWeight: 300,
                              color: "#1E5089",
                              fontSize: "20px",
                            }}
                          >
                            {paper.title}
                          </p>
                          <p
                            className="mt-2 mb-2"
                            style={{
                              color: "#414141",
                              fontWeight: 300,
                              fontSize: "17px",
                            }}
                          >
                            {paper.journal}
                          </p>
                        </div>

                        {(paper.pmid || paper.doi) && (
                          <div className="flex flex-col gap-1 text-sm">
                            {paper.pmid && (
                              <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full text-center">
                                PMID: {paper.pmid}
                              </span>
                            )}
                            {paper.doi && (
                              <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full text-center">
                                DOI: {paper.doi}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chapters">
              <div className="space-y-6 pt-5 md:pt-0">
                {chapters.map((chapter, index) => (
                  <Card key={index} style={{ backgroundColor: "#FAF9F7" }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p
                            className="mb-5"
                            style={{
                              fontWeight: 300,
                              color: "#1E5089",
                              fontSize: "20px",
                            }}
                          >
                            {chapter.title}
                          </p>
                          <p
                            className="mt-2 mb-2"
                            style={{
                              color: "#414141",
                              fontWeight: 300,
                              fontSize: "17px",
                            }}
                          >
                            {chapter.chapter}
                          </p>
                          <p
                            className="text-[14px] sm:text-[15px] leading-relaxed"
                            style={{
                              color: "#612512",
                              fontFamily: '"Montserrat", sans-serif',
                              opacity: 0.8,
                            }}
                          >
                            <strong>Authors:</strong> {chapter.authors}
                          </p>
                        </div>
                        {chapter.status && (
                          <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full">
                            {chapter.status}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Publications;

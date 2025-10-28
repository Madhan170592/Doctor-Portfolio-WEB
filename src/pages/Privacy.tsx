import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <Card className="glass-card mb-8">
            <CardContent className="p-8 space-y-6">

              {/* 1. Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  Dr. Joshua Franklyn (“we”, “us”, or “our”) is dedicated to protecting your personal
                  information and respecting your privacy. This Privacy Policy explains how your data
                  is collected, used, and safeguarded when you visit our website or use our services.
                </h3>
              </section>

              {/* 2. Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed mb-3"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  We may collect the following information, depending on how you interact with us:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>Your name, email address, and contact details</h3></li>
                  <li><h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>Medical history and clinical details (only with your consent)</h3></li>
                  <li><h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>Appointment and billing information</h3></li>
                  <li><h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>Any messages, forms, or correspondence you send us</h3></li>
                  <li><h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>Website usage data such as pages visited and device information</h3></li>
                </ul>
              </section>

              {/* 3. How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed mb-3"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  Your information helps us provide safe and effective care. We use it to:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  <li>Arrange consultations and provide medical treatment</li>
                  <li>Manage appointments and patient communications</li>
                  <li>Process billing, insurance, and payments</li>
                  <li>Respond to enquiries and feedback</li>
                  <li>Improve our clinical and website services</li>
                  <li>Comply with UK legal and regulatory requirements</li>
                  </h3>
                </ul>
              </section>

              {/* 4. Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  We take appropriate technical and organisational steps to protect your personal data
                  from unauthorised access, alteration, or loss. While we strive to use secure systems,
                  no internet transmission is completely risk-free, and we encourage you to take care
                  when sharing personal details online.
                </h3>
              </section>

              {/* 5. Medical Confidentiality */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Medical Confidentiality</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  All medical information you share is handled with the highest level of confidentiality,
                  in line with UK medical ethics and data protection laws. We only share information with
                  your explicit consent, or when required by law or necessary for your ongoing care.
                </h3>
              </section>

              {/* 6. Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed mb-3"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  Under the UK General Data Protection Regulation (UK GDPR), you have the right to:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  <li>Access the personal data we hold about you</li>
                  <li>Request corrections to inaccurate or incomplete data</li>
                  <li>Ask for deletion of your information (where applicable)</li>
                  <li>Object to the processing of your data</li>
                  <li>Request a copy of your data (data portability)</li>
                  <li>Withdraw your consent at any time</li></h3>
                </ul>
              </section>

              {/* 7. Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  Our website may use cookies to enhance your browsing experience. You can choose to
                  accept or disable cookies through your browser settings. Disabling cookies may affect
                  certain website functions.
                </h3>
              </section>

              {/* 8. Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
                <h3
                  className="text-[16px] sm:text-[17px] leading-relaxed"
                  style={{
                    fontWeight: 100,
                    color: '#612512',
                  }}
                >
                  If you have any questions about this Privacy Policy or wish to exercise your rights,
                  please reach out via our contact form or email us at{' '}
                  <a
                    href="mailto:contact@joshuafranklyn.co.uk"
                    className="font-bold text-primary hover:underline"
                  >
                    contact@joshuafranklyn.co.uk
                  </a>.
                </h3>
              </section>

            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Privacy;

import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <Card className="glass-card mb-8">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  By accessing and using this website and services provided by Dr. Joshua Franklyn, you 
                  accept and agree to be bound by these Terms of Service. If you do not agree to these 
                  terms, please do not use our services.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Medical Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  Dr. Joshua Franklyn provides specialist medical consultations and surgical services. 
                  All medical advice and treatment are provided in accordance with UK medical standards 
                  and regulations. The information on this website is for general guidance only and does 
                  not constitute medical advice.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Appointments</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  <li>Appointments must be booked in advance through our booking system or contact form</li>
                  <li>Please provide at least 48 hours notice for cancellations</li>
                  <li>Late cancellations or no-shows may incur a cancellation fee</li>
                  <li>We reserve the right to reschedule appointments if necessary</li>
                  </h3>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Fees and Payment</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  
                  Consultation and treatment fees are outlined on our Insurance & Fees page:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  <li>Self-pay patients: Payment is required at the time of service</li>
                  <li>Insured patients: Pre-authorization from your insurer must be obtained prior to treatment</li>
                  <li>Fee-assured quotations will be provided before proceeding with treatment</li>
                  <li>All fees are subject to change with prior notice</li>
                  </h3>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Insurance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  While Dr. Franklyn is recognized by major insurance providers, it is your responsibility 
                  to verify coverage and obtain necessary pre-authorizations. We cannot guarantee insurance 
                  reimbursement and patients are ultimately responsible for all charges.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Medical Records</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  All medical records are maintained in accordance with UK medical record-keeping standards 
                  and data protection laws. You have the right to access your medical records upon request.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  All medical consultations and patient information are treated with strict confidentiality 
                  in accordance with medical ethics and UK law. Information will only be shared with your 
                  consent or where legally required.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Website Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When using this website, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  <li>Provide accurate and complete information</li>
                  <li>Use the website only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to any systems</li>
                  <li>Respect intellectual property rights</li>
                  </h3>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  While we strive to provide accurate information, we cannot guarantee that this website 
                  is error-free. We are not liable for any losses or damages arising from the use of this 
                  website or services, except where liability cannot be excluded by law.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  We reserve the right to modify these Terms of Service at any time. Changes will be 
                  effective immediately upon posting to this website. Continued use of our services 
                  constitutes acceptance of updated terms.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  These Terms of Service are governed by the laws of England and Wales. Any disputes 
                  will be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </h3>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">12. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <h3 className="text-[16px]" style={{ fontWeight: 100, color: '#612512' }}>
                  If you have questions about these Terms of Service, please contact us through our 
                  contact form.
                  </h3>
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Terms;

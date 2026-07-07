"use client";

import Headingagebanner from "@/components/CommenComponent/Headingagebanner";

export default function PrivacyPolicy() {
  return (
    <>
      <Headingagebanner pagename="Privacy Policy" />

      <section className="py-20 bg-[#f8fafc]">
        <div className="section-container">
          {/* <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12"> */}

            {/* <div className="mb-12">
              <span className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                Legal Information
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900">
                Privacy Policy
              </h1>

              <p className="text-slate-600 mt-5 leading-8">
                We are committed to protecting your personal information and
                ensuring transparency, security, and compliance.
              </p>
            </div> */}

            {/* Section */}
            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  1. Scope & Applicability
                </h2>

                <p className="text-slate-600 leading-8">
                  This Privacy Policy governs the collection, use, storage,
                  and disclosure of personal data of users accessing
                  Stokzy’s website, applications, and services.
                  Stokzy is operated by Futurebulls Technologies Private Limited
                  (“Company”, “we”, “us”, “our”).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  2. Information We Collect
                </h2>

                <div className="space-y-4 text-slate-600">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      2.1 Personal Information
                    </h4>

                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li>Name, email address, phone number</li>
                      <li>Account registration details</li>
                      <li>Support and contact form submissions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      2.2 Technical & Usage Data
                    </h4>

                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li>IP address and browser details</li>
                      <li>Device and operating system information</li>
                      <li>Pages visited and session activity</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      2.3 Cookies & Tracking Technologies
                    </h4>

                    <p className="mt-2">
                      We use cookies and similar technologies to improve
                      functionality, personalize content, and analyze traffic.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  3. Purpose of Data Collection
                </h2>

                <ul className="list-disc ml-6 text-slate-600 space-y-2">
                  <li>Provide educational courses and learning tools</li>
                  <li>Manage user accounts and customer support</li>
                  <li>Process payments securely</li>
                  <li>Improve platform security and performance</li>
                  <li>Comply with applicable legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  4. Legal Basis for Processing
                </h2>

                <ul className="list-disc ml-6 text-slate-600 space-y-2">
                  <li>User consent</li>
                  <li>Contractual obligations</li>
                  <li>Compliance with Indian laws</li>
                  <li>Fraud prevention and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  5. Data Sharing & Disclosure
                </h2>

                <p className="text-slate-600 leading-8">
                  Stokzy does not sell or rent personal data. Information may
                  be shared with trusted service providers, payment processors,
                  regulatory authorities, and internal teams on a need-to-know basis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  6. Payment & Financial Data
                </h2>

                <p className="text-slate-600 leading-8">
                  All payment transactions are processed through secure,
                  RBI-compliant payment gateways. We do not store card
                  numbers, CVV details, or banking credentials.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  7. Data Retention Policy
                </h2>

                <ul className="list-disc ml-6 text-slate-600 space-y-2">
                  <li>Data retained only as necessary</li>
                  <li>Retention as required by law</li>
                  <li>User-requested deletion where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  8. Data Security Measures
                </h2>

                <ul className="list-disc ml-6 text-slate-600 space-y-2">
                  <li>SSL encryption</li>
                  <li>Secure servers and monitoring</li>
                  <li>Access control mechanisms</li>
                  <li>Routine updates and audits</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  9. User Rights
                </h2>

                <ul className="list-disc ml-6 text-slate-600 space-y-2">
                  <li>Access personal data</li>
                  <li>Request corrections</li>
                  <li>Withdraw consent</li>
                  <li>Request data deletion</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  10. Educational Disclaimer
                </h2>

                <p className="text-slate-600 leading-8">
                  Stokzy is an educational platform. All content is provided
                  for learning and informational purposes only and does not
                  constitute financial, investment, or trading advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  11. Children’s Privacy
                </h2>

                <p className="text-slate-600 leading-8">
                  Our services are intended for users aged 18 years and above.
                  We do not knowingly collect personal data from minors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  12. Third-Party Links
                </h2>

                <p className="text-slate-600 leading-8">
                  Our platform may contain links to external websites.
                  We are not responsible for the privacy practices of
                  third-party platforms.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  13. Grievance Redressal
                </h2>

                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong>Grievance Officer:</strong> Ankush Dabas
                  </p>

                  <p>
                    <strong>Email:</strong> ankush@stokzy.com
                  </p>

                  <p>
                    <strong>Contact:</strong> +91 98735 53113
                  </p>

                  <p>
                    <strong>Resolution Timeline:</strong> Within 30
                    working days
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  14. Policy Updates
                </h2>

                <p className="text-slate-600 leading-8">
                  Stokzy reserves the right to modify this Privacy Policy
                  at any time. Updated versions will be published on this page,
                  and continued usage constitutes acceptance of such changes.
                </p>
              </div>

            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
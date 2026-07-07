import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import React from "react";

export default function page() {
  return (
    <>
      <Headingagebanner pagename="Privacy Policy" />

      <section className="py-20 bg-[#f8fafc]">
        <div className="section-container">
          <div className="space-y-10 text-slate-700">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">
                1. Digital-Only Services
              </h2>

              <p className="leading-8">
                Stokzy is a digital education platform. All courses, programs,
                tools, live sessions, recorded content, and subscriptions are
                provided exclusively in electronic format through our website or
                application.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                2. No Physical Shipping
              </h2>

              <p className="leading-8">
                There is no physical product involved in any transaction on
                Stokzy. Therefore, shipping, courier, logistics, or postal
                delivery services are not applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                3. Instant Access Delivery
              </h2>

              <p className="leading-8">
                Upon successful payment, access to the purchased digital service
                is granted instantly or within a short activation period via the
                user’s registered Stokzy account. This is considered successful
                delivery.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">
                4. No Exchange Policy (Strict)
              </h2>

              <p className="leading-8">
                Digital services once accessed, activated, or delivered cannot
                be exchanged for any other course, program, subscription, or
                service. Exchange requests will not be entertained under any
                circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                5. User Responsibility Before Purchase
              </h2>

              <p className="leading-8">
                Users are responsible for reviewing course descriptions,
                curriculum details, eligibility, and suitability before
                completing a purchase. Stokzy shall not be liable for incorrect
                selection or change of preference.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                6. Technical Access Support
              </h2>

              <p className="leading-8">
                If a user faces genuine technical issues accessing purchased
                content due to platform-related errors, assistance will be
                provided to restore access. This does not constitute an
                exchange, refund, or cancellation.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">7. Legal Compliance</h2>

              <p className="leading-8">
                This policy is framed in accordance with the Consumer Protection
                Act, 2019 and Indian e-commerce guidelines applicable to digital
                goods and online educational services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

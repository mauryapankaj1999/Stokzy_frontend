import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import React from "react";

export default function page() {
    return (
      <>
            <Headingagebanner pagename="Refund policy" />
      
      <div className="py-12 section-container  space-y-10 text-slate-700">

     
      <div className="space-y-10 text-slate-700">

  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
    <h2 className="text-2xl font-bold mb-4">
      1. No Refund Policy (Strict)
    </h2>

    <p className="leading-8">
      All purchases made on Stokzy are final and non-refundable. This includes
      online courses, recorded sessions, live programs, tools, subscriptions,
      mentorships, and any other digital or virtual services offered on the
      platform.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">
      2. No Cancellation After Payment
    </h2>

    <p className="leading-8">
      Once a payment is successfully completed, cancellation requests will not
      be accepted under any circumstances. Access to digital content is
      considered immediate delivery.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">
      3. Digital Nature of Services
    </h2>

    <p className="leading-8 mb-4">
      Due to the digital and intangible nature of our offerings, refunds or
      cancellations are not possible once access is granted.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Instant access to digital content</li>
      <li>Irreversible delivery of educational material</li>
      <li>Allocation of platform resources and infrastructure</li>
    </ul>
  </div>

  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
    <h2 className="text-2xl font-bold mb-4">
      4. No Exceptions Clause
    </h2>

    <p className="leading-8">
      No refunds will be provided for reasons including but not limited to
      change of mind, lack of usage, misunderstanding of course content,
      scheduling conflicts, technical issues on the user’s end, or
      dissatisfaction with learning outcomes.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">
      5. Payment Errors
    </h2>

    <p className="leading-8">
      In the rare event of a duplicate payment or technical error resulting in
      multiple charges for the same transaction, users must notify us within 48
      hours with valid proof. If verified by the payment gateway, the excess
      amount (only) will be reversed. This does not apply to valid single
      payments.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">
      6. Chargebacks & Disputes
    </h2>

    <p className="leading-8">
      Initiating chargebacks or payment disputes without valid grounds is a
      violation of these terms and may result in suspension or permanent
      termination of access. Stokzy reserves the right to contest chargebacks
      with full transaction and access logs.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">
      7. Legal & Regulatory Compliance
    </h2>

    <p className="leading-8">
      This policy is framed in accordance with the Consumer Protection Act,
      2019 and Indian e-commerce guidelines applicable to digital goods and
      online educational services.
    </p>
  </div>

  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
    <h2 className="text-2xl font-bold mb-4">
      8. Contact & Grievance Redressal
    </h2>

    <p className="leading-8 mb-6">
      By making a payment on Stokzy, you acknowledge that you have read,
      understood, and agreed to this strict no-refund and no-cancellation
      policy.
    </p>

    <div className="space-y-3">
      <p>
        <strong>Email:</strong> support@stokzy.in
      </p>

      <p>
        <strong>Grievance Officer:</strong> Ankush Dabas
      </p>

      <p>
        <strong>Response Time:</strong> Within 30 working days
      </p>
    </div>
  </div>

</div>
 </div>
      </>
    )
}
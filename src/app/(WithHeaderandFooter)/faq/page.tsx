"use client";

import { useState } from "react";
import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is Stokzy suitable for beginners?",
      answer:
        "Yes. Stokzy offers beginner-friendly programs alongside advanced modules, making it useful for learners at every stage.",
    },
    {
      question: "Will I get regular learning resources or updates?",
      answer:
        "Yes. You’ll receive structured lessons, updated study materials, and simplified workflows such as no-code algo learning examples.",
    },
    {
      question:
        "Do the courses cover different areas of financial knowledge?",
      answer:
        "Yes. Stokzy covers multiple domains including equities, commodities, indices, and more — to broaden your overall understanding.",
    },
    {
      question: "What tools will I need to follow Stokzy’s programs?",
      answer:
        "You just need a laptop or smartphone with internet access. For practice activities, freely available simulation or charting tools may be suggested.",
    },
    {
      question: "Do you provide live market calls or signals?",
      answer:
        "No. Stokzy focuses only on education, skill-building, and strategy awareness — not buy/sell recommendations.",
    },
    {
      question: "At what time are live classes or sessions held?",
      answer:
        " Most live classes are scheduled in the evenings IST, and recordings are available 24/7 so you can learn at your own pace.",
    },
    {
      question: "Does Stokzy cover short-term and long-term concepts?",
      answer:
        " Yes. Our courses include a variety of learning modules so that learners can explore different timeframes and approaches academically.",
    },
    {
        question: "Can I apply this learning in real markets?",
        answer:
          "Stokzy is an educational platform. The knowledge you gain can help you understand financial concepts better. Application in real markets should always be done independently, at your discretion.",
    },
    {
        question: "Is there a refund policy?",
        answer:
          "Due to the digital nature of our courses, we do not offer refunds. Please review the curriculum and free previews before enrolling.",
    },
    {
        question: "Will I get one-on-one mentorship?",
        answer:
          "Our standard plans include group sessions and community support. One-on-one mentorship may be available in select premium programs.",
    }

  ];

  return (
    <>
      <Headingagebanner pagename="FAQs" />

      <section className="py-6 bg-[#f8fafc]">
        <div className="section-container">

          <div className="text-center max-w-3xl mx-auto mb-8">
           
            <h2 className="text-5xl font-bold mt-6 text-slate-900">
              Clear Your Doubts
            </h2>

            <p className="text-slate-600 mt-5 text-lg">
              Find answers to the most common questions learners ask
              about Stokzy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "border-primary shadow-lg"
                    : "border-slate-200 hover:border-primary/40"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-transform duration-300`} 
                  >
                        {
                            openIndex === index ? (
                                <FaMinus />
                            )
                            : (
                                <FaPlus />
                            )
                        }

                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-7">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

         

        </div>
      </section>
    </>
  );
}
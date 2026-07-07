"use client";

import { FaStar } from "react-icons/fa";

export default function TestimonialsMarquee() {
  const reviews = [
    {
      description:
        "Stokzy's masterclasses helped me understand financial concepts from scratch. The structured learning path gave me clarity and confidence in my studies.",
      name: "Aarav Mehta",
      role: "Beginner Learner",
    },
    {
      description:
        "The practical simulations are amazing. I was able to practice what I learned in a safe environment, which really boosted my confidence.",
      name: "Riya Kapoor",
      role: "Student",
    },
    {
      description:
        "As a working professional, I found Stokzy's recorded lectures extremely helpful. I can learn at my own pace and revisit topics whenever needed.",
      name: "Kunal Verma",
      role: "Finance Professional",
    },
    {
      description:
        "The mentors at Stokzy are truly inspiring. Their teaching style and live Q&A sessions made complex topics much easier to understand.",
      name: "Sneha Jain",
      role: "Intermediate Learner",
    },
    {
      description:
        "I was completely new to this subject, but Stokzy made it simple. The community support and step-by-step guidance kept me motivated.",
      name: "Ankit Sharma",
      role: "Beginner Learner",
    },
    {
      description:
        "Joining Stokzy was the best decision! The certification and learning experience added real value to my personal and professional growth.",
      name: "Neha Singh",
      role: "Advanced Learner",
    },
  ];

  return (
    <section className="py-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-center mb-1 ">
            Trusted by Learners
          </h2>

          <p className="text-gray-400 text-[15px] mt-5 max-w-3xl mx-auto">
            Hear from learners and professionals who've experienced Stokzy's
            structured, practical, and industry-focused education.
          </p>
        </div>

        {/* Top Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            {[...reviews, ...reviews].map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="marquee reverse mt-8">
          <div className="marquee-content">
            {[...reviews, ...reviews].map((item, index) => (
              <Card item={item} key={`bottom-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item }: any) {
  return (
    <div className="bg-white mb-3 rounded-[24px] shadow-lg p-3 w-[420px] min-h-[250px] flex-shrink-0 border border-gray-100">
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 mb-6">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-2 text-[15px] mb-4">
        "{item.description}"
      </p>

      {/* Name */}
      <h4 className="text-[15px] font-bold text-black">{item.name}</h4>

      <p className="text-gray-500 mt-1 text-[14px]">{item.role}</p>
    </div>
  );
}

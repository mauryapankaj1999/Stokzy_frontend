"use client";
import React from "react";
import { Fraunces } from "next/font/google";
import { useSingleCourse } from "@/hooks/useCourses";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCreateOrder, useVerifyPayment } from "@/hooks/useOrders";
import { showError, showSuccess } from "@/utils/toast";
import {
  FaCircleCheck,
  FaRegClock,
  FaChalkboardUser,
  FaLayerGroup,
} from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

// Rotating accent colours for parsed curriculum weeks — echoes the
// module colour-coding used across the source brochure.
const WEEK_ACCENTS = ["#1B5E3F", "#1E4E8C", "#B5651D", "#5B3A8E", "#0B1F33"];

const stripTags = (raw: string) =>
  raw
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();

interface CurriculumWeek {
  label: string;
  lead: string;
  rest: string;
}

function parseCurriculum(html?: string): CurriculumWeek[] {
  if (!html) return [];

  const blocks = Array.from(
    html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>|<li[^>]*>([\s\S]*?)<\/li>/gi),
  )
    .map((m) => stripTags(m[1] ?? m[2] ?? ""))
    .filter(Boolean);

  const weekRe = /^week\s+(\d+)\.?$/i;
  const weeks: { label: string; parts: string[] }[] = [];
  let current: { label: string; parts: string[] } | null = null;

  blocks.forEach((block) => {
    const match = block.match(weekRe);

    if (match) {
      if (current) weeks.push(current);
      current = { label: `Week ${match[1]}`, parts: [] };
    } else if (current) {
      current.parts.push(block);
    }
  });

  if (current) weeks.push(current);

  return weeks
    .filter((w) => w.parts.length > 0)
    .map((w) => {
      const text = w.parts.join(" ");
      const splitAt = text.indexOf(";");
      const lead =
        splitAt > 12 && splitAt < 160 ? text.slice(0, splitAt) : text;
      const rest = lead === text ? "" : text.slice(splitAt + 1).trim();

      return { label: w.label, lead, rest };
    });
}

export default function CourseDetails() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const { data: courseData, isLoading } = useSingleCourse(slug);
  const course = courseData?.data;
  const { mutateAsync: createOrderMutation } = useCreateOrder();
  const { mutateAsync: verifyPaymentMutation } = useVerifyPayment();
  const { isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-sm text-gray-500 tracking-wide">
            Loading course…
          </span>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Course not found
        </h1>
        <p className="text-gray-500">
          This course may have been moved or is no longer available.
        </p>
      </div>
    );
  }

  const hasDiscount =
    Number(course.discountPrice) > Number(course.price) &&
    Number(course.discountPrice) > 0;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((Number(course.discountPrice) - Number(course.price)) /
          Number(course.discountPrice)) *
          100,
      )
    : 0;

  const curriculum = parseCurriculum(course.description);

  const handleBuyCourse = async () => {
    try {
      if (!isAuthenticated) {
        showError("Log in to access");
        return;
      }

      const orderRes = await createOrderMutation(course._id);
      const razorpayOrder = orderRes.data.razorpayOrder;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        order_id: razorpayOrder.id,
        name: "Stokzy",
        description: course.title,
        handler: async (response: any) => {
          try {
            await verifyPaymentMutation({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            showSuccess("Payment Successful!");
            router.push("/my-courses");
          } catch (error) {
            showError("Payment verification failed.");
          }
        },
        theme: { color: "#57a846" },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      showError("Something went wrong");
    }
  };

  const statChips = [
    course.duration && { icon: FaRegClock, label: course.duration },
    course.level && { icon: HiOutlineAcademicCap, label: course.level },
    course.category?.name && {
      icon: FaLayerGroup,
      label: course.category.name,
    },
    { icon: FaChalkboardUser, label: "Live + Recorded" },
  ].filter(Boolean) as { icon: any; label: string }[];

  return (
    <div className={fraunces.variable}>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#0B1B2B]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 0%, #12351f 0%, #0B1B2B 55%, #0B1B2B 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative section-container pt-14 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
            {/* Left: narrative */}
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#9BE15D] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9BE15D]" />
                Stokzy Trading Academy
              </span>

              <h1
                className="mt-5 font-[var(--font-fraunces)] text-white text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] font-semibold"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {course.title}
              </h1>

              {course.shortDescription && (
                <p className="mt-5 text-[#C9D3DC] text-base lg:text-lg leading-relaxed max-w-2xl">
                  {course.shortDescription}
                </p>
              )}

              {statChips.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {statChips.map((chip, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 text-xs sm:text-sm backdrop-blur-sm"
                    >
                      <chip.icon className="text-[#9BE15D]" size={14} />
                      {chip.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: floating certified badge (desktop only, decorative) */}
            <div className="hidden lg:flex justify-end">
              <CertifiedBadge label={course.level || "Certified"} />
            </div>
          </div>

          {/* thin divider bar echoing the brochure's rule */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-[#9BE15D]/70 via-white/10 to-transparent" />
        </div>
      </section>

      {/* ---------------- BODY ---------------- */}
      <div className="section-container py-10 lg:py-14 max-lg:pb-28">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Left column */}
          <div className="lg:col-span-2">
            {/* What's included */}
            <div className="mb-12 lg:mb-16">
              <Eyebrow>What Makes It Premium</Eyebrow>
              <SectionTitle>Everything you need, nothing you don't</SectionTitle>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Live + recorded sessions with practising mentors",
                  "Hands-on assignments, simulations & projects",
                  "1:1 doubt-clearing & personalised feedback",
                  "Certificate of completion on finishing the program",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#F7F7F7] p-4"
                  >
                    <FaCircleCheck className="text-primary mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <Eyebrow>The Curriculum</Eyebrow>
              <SectionTitle>What you'll learn, week by week</SectionTitle>

              {curriculum.length > 0 ? (
                <div className="mt-6 space-y-3">
                  {curriculum.map((week, i) => {
                    const accent = WEEK_ACCENTS[i % WEEK_ACCENTS.length];

                    return (
                      <div
                        key={i}
                        className="relative rounded-2xl border border-gray-100 bg-white pl-5 pr-4 py-4 shadow-sm"
                        style={{ borderLeft: `4px solid ${accent}` }}
                      >
                        <span
                          className="inline-block text-[11px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 mb-2"
                          style={{
                            color: accent,
                            backgroundColor: `${accent}1A`,
                          }}
                        >
                          {week.label}
                        </span>
                        <p className="text-sm leading-relaxed text-gray-700">
                          <span className="font-semibold text-gray-900">
                            {week.lead}
                          </span>
                          {week.rest && `; ${week.rest}`}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : course.description ? (
                <div
                  className="mt-6 prose prose-sm max-w-none text-gray-700 rounded-2xl border border-gray-100 bg-[#F7F7F7] p-6"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                />
              ) : null}
            </div>
          </div>

          {/* Right: sticky buy card */}
          <div>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-gray-100 shadow-xl overflow-hidden bg-white">
                <div className="relative aspect-video bg-[#0B1B2B]">
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <HiOutlineAcademicCap className="text-[#9BE15D]/60" size={56} />
                    </div>
                  )}
                </div>

                <div className="p-5 lg:p-6">
                  <div className="flex items-end gap-2 flex-wrap">
                    <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                      ₹{Number(course.price).toLocaleString("en-IN")}
                    </span>
                    {hasDiscount && (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          ₹{Number(course.discountPrice).toLocaleString("en-IN")}
                        </span>
                        <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[11px] font-semibold">
                          {discountPercentage}% off
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-400 text-xs mt-1">
                    One-time payment · lifetime access
                  </p>

                  <button
                    onClick={handleBuyCourse}
                    className="w-full py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#57a846] via-[#6BCB5B] to-[#9BE15D] mt-5 shadow-[0_8px_20px_rgba(87,168,70,0.3)] active:scale-[0.98] transition-transform"
                  >
                    Enrol Now
                  </button>

                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-2.5">
                    {[
                      "Live market labs",
                      "Mentor support",
                      "Certificate on completion",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <FaCircleCheck className="text-primary shrink-0" size={13} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-16 text-[11px] leading-relaxed text-gray-400 border-t border-gray-100 pt-6">
          Trading and investing in stocks, derivatives, forex and crypto-assets
          carry a high risk of financial loss and are subject to market and
          regulatory conditions in India. This program is educational and does
          not constitute investment advice or a guarantee of profits or
          employment.
        </p>
      </div>

      {/* Mobile sticky buy bar */}
      <div
        className="
          lg:hidden fixed bottom-0 left-0 right-0 z-50
          bg-white rounded-t-3xl
          shadow-[0_-6px_24px_rgba(0,0,0,0.12)]
          px-4 py-4
          pb-[calc(env(safe-area-inset-bottom)+16px)]
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xl font-bold text-gray-900">
                ₹{Number(course.price).toLocaleString("en-IN")}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{Number(course.discountPrice).toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {hasDiscount && (
              <span className="inline-block mt-1 bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                {discountPercentage}% off
              </span>
            )}
          </div>

          <button
            onClick={handleBuyCourse}
            className="
              shrink-0 px-6 py-2.5 rounded-md
              text-white font-semibold text-[15px]
              bg-gradient-to-r from-[#57a846] via-[#6BCB5B] to-[#9BE15D]
              shadow-[0_4px_14px_rgba(87,168,70,0.4)]
              active:scale-95 transition-transform
            "
          >
            Enrol Now
          </button>
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-2 text-2xl lg:text-[32px] font-semibold text-gray-900 leading-tight"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h2>
  );
}

function CertifiedBadge({ label }: { label: string }) {
  const topPathId = "course-certified-orbit-top";
  const bottomPathId = "course-certified-orbit-bottom";
  const topText = "STOKZY TRADING ACADEMY";
  const bottomText = `${label.toUpperCase()} · CERTIFIED`;

  return (
    <svg
      viewBox="0 0 160 160"
      width={148}
      height={148}
      className="opacity-90"
    >
      <circle
        cx="80"
        cy="80"
        r="72"
        fill="none"
        stroke="#9BE15D"
        strokeOpacity="0.35"
        strokeDasharray="2 6"
        strokeWidth="1.5"
      />
      <circle cx="80" cy="80" r="58" fill="none" stroke="#9BE15D" strokeOpacity="0.6" strokeWidth="1" />
      <defs>
        {/* top arc: left -> right, text sits upright above the stroke */}
        <path id={topPathId} d="M 16,80 A 64,64 0 0 1 144,80" fill="none" />
        {/* bottom arc: right -> left, so text stays upright below the stroke */}
        <path id={bottomPathId} d="M 144,80 A 64,64 0 0 1 16,80" fill="none" />
      </defs>
      <text fill="#9BE15D" fontSize="7" letterSpacing="1.5" fontWeight={600} textAnchor="middle">
        <textPath href={`#${topPathId}`} startOffset="50%">
          {topText}
        </textPath>
      </text>
      <text fill="#9BE15D" fontSize="7" letterSpacing="1.5" fontWeight={600} textAnchor="middle">
        <textPath href={`#${bottomPathId}`} startOffset="50%">
          {bottomText}
        </textPath>
      </text>
      <text
        x="80"
        y="84"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontWeight={700}
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        360°
      </text>
    </svg>
  );
}

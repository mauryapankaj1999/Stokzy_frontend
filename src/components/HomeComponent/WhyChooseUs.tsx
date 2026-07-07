// "use client";

// import {
//   FaUsers,
//   FaMapMarkerAlt,
//   FaGlobeAsia,
//   FaChartLine,
// } from "react-icons/fa";

// const stats = [
//   {
//     icon: <FaUsers />,
//     number: "45,000+",
//     title: "Students Trained",
//     desc: "Thousands of traders have transformed their trading journey with Stokzy.",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     number: "24+",
//     title: "Cities Across India",
//     desc: "Building a strong trading network across major cities.",
//   },
//   {
//     icon: <FaGlobeAsia />,
//     number: "5+",
//     title: "Countries Impacted",
//     desc: "Helping traders globally achieve financial freedom.",
//   },
//   {
//     icon: <FaChartLine />,
//     number: "3000+",
//     title: "Active Community",
//     desc: "A growing ecosystem of passionate traders and investors.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className=" relative py-24 bg-black overflow-hidden">
//       <div className="section-container">
//         {/* Background Glow */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 blur-[120px]" />

//         <div className="container mx-auto px-4 relative z-10">
//           {/* Heading */}
//           <div className="text-center max-w-4xl mx-auto mb-20">
//             <span className="inline-block text-[#7ED957] font-semibold uppercase tracking-widest">
//               Why Choose Stokzy
//             </span>

//             <h2 className="text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
//               Turn Your Trading Dreams
//               <br />
//               Into Reality
//             </h2>

//             <p className="text-gray-400 mt-6 text-lg">
//               Learn trading with proven strategies, expert mentorship, real-time
//               market insights and a thriving trader community.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
//             {stats.map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-[#7ED957]/40 transition-all duration-500 hover:-translate-y-3"
//               >
//                 {/* Icon */}
//                 <div className="w-16 h-16 rounded-2xl bg-[#7ED957]/10 text-[#7ED957] flex items-center justify-center text-2xl mb-8">
//                   {item.icon}
//                 </div>

//                 {/* Number */}
//                 <h3 className="text-5xl font-bold text-[#7ED957]">
//                   {item.number}
//                 </h3>

//                 {/* Title */}
//                 <h4 className="text-2xl font-semibold text-white mt-5">
//                   {item.title}
//                 </h4>

//                 {/* Description */}
//                 <p className="text-gray-400 mt-4 leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Bottom Line */}
//                 <div className="h-[2px] w-0 bg-[#7ED957] mt-6 group-hover:w-full transition-all duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaUsers,
  FaMapMarkerAlt,
  FaGlobeAsia,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "45,000+",
    title: "Students Trained",
    desc: "Thousands of traders have transformed their trading journey with Stokzy.",
  },
  {
    icon: <FaMapMarkerAlt />,
    number: "24+",
    title: "Cities Across India",
    desc: "Building a strong trading network across major cities.",
  },
  {
    icon: <FaGlobeAsia />,
    number: "5+",
    title: "Countries Impacted",
    desc: "Helping traders globally achieve financial freedom.",
  },
  {
    icon: <FaChartLine />,
    number: "3000+",
    title: "Active Community",
    desc: "A growing ecosystem of passionate traders and investors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-center mb-1">
            Turn Your Trading Dreams
            {/* <br /> */}
         <span className="text-primary moving-gradient">   Into Reality </span>
          </h2>

          <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
            Learn trading with proven strategies, expert mentorship,
            real-time market insights and a thriving trader community.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">

          {stats.map((item, index) => (
           <div
  key={index}
  className="relative overflow-hidden group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#7ED957]/50 transition-all duration-500 hover:-translate-y-3"
>
  {/* Content */}
  <div className="relative z-10">

    <div className="w-16 h-16 rounded-2xl bg-[#7ED957]/10 text-[#4CAF50] flex items-center justify-center text-2xl mb-8">
      {item.icon}
    </div>

    <h3 className="text-3xl font-bold text-[#4CAF50]">
      {item.number}
    </h3>

    <h4 className="text-2xl font-semibold text-[#111827] mt-5">
      {item.title}
    </h4>

    <p className="text-gray-600 mt-4 leading-relaxed">
      {item.desc}
    </p>

  </div>

  {/* SVG Graph */}
  <div className="absolute inset-0 pointer-events-none z-0 opacity-50">

    <svg
      className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
      width="220"
      height="120"
      viewBox="0 0 220 120"
    >
      <path
        className="graph-line"
        d="M10 100 L50 85 L90 90 L130 45 L170 55 L210 15"
        fill="none"
        stroke="#7ED957"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="50" cy="85" r="3" fill="#7ED957" />
      <circle cx="130" cy="45" r="3" fill="#7ED957" />

      <circle
        className="pulse-dot"
        cx="210"
        cy="15"
        r="4"
        fill="#7ED957"
      />
    </svg>

  </div>

  {/* Glow */}
  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#7ED957]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
</div>
          ))}


        </div>

      </div>
    </section>
  );
}
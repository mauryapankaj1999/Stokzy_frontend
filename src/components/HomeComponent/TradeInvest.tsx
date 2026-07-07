// import { url } from "inspector";
// import React from "react";

import Courseslider from "../CommenComponent/Courseslider";

// const platforms = [
//   {
//     title: "Stokzy Mobile",
//     subtitle: "Available on Play Store / App Store",
//     highlight: "Play Store / App Store",
//     image: "/img/DhanMob-mainframe.png",
//   },
//   {
//     title: "Stokzy Web",
//     subtitle: "Login to web.stokzy.com",
//     highlight: "web.stokzy.com",
//     image: "/img/Maskgroup.png",
//   },
//   {
//     title: "TradingView Charts",
//     subtitle: "Advanced Chart Analysis",
//     highlight: "Chart Analysis",
//     image: "/img/TVchart-mainframe.png",
//   },
//   {
//     title: "Trading APIs",
//     subtitle: "Build & Automate Strategies",
//     highlight: "Automation",
//     image: "/img/TVchart-mainframe.png",
//   },
// ];

// export default function TradeInvest() {
//   return (
//     <section className="py-24 bg-no-repeat bg-top bg-cover InvestSection">
//       <div className="section-container">
//         <div className="text-center mb-8">
//           <h2 className="text-5xl font-bold ">
//             Trade & Invest from Any{" "}
//             <span className="text-primary moving-gradient">
//               Stokzy Platform!
//             </span>
//           </h2>

//           <p className="text-gray-500 mt-4 text-lg">
//             Access markets from mobile, web, charts, and automation tools.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 md:grid-cols-2">
//           <div className="col-span-1">
//             <div className="shadow-lg bg-white rounded-lg overflow-hidden">
//               <div className="px-4 py-4">

//               <div className="mt-4 text-md font-bold mb-1  leading-tight text-[#0F172A]">Standard Account</div>
//               <p className="text-gray-500 mt-1 text-[14px]">Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
//               </div>
//               <div className="shapimg">
//                 <img src="/img/TVchart-mainframe.png" alt="" className="w-full h-full" />
//                 {/* <div className=""></div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
//           {platforms.map((item, index) => (
//             <div
//               key={index}
//               className="
//         platform-card
//         relative
//         overflow-hidden
//         rounded-[24px]
//         border
//         border-[#9ca3af2b]
//           shadow-lg
//         min-h-[320px]
//         flex
//         flex-col
//         justify-between
//         group
//         bg-white
//       "
//             >
//               <div
//                 className="
//           absolute
//           -bottom-24
//           -right-24
//           w-[280px]
//           h-[280px]
//           rounded-full
//           bg-primary/20
//           blur-[80px]
//           opacity-0
//           transition-all
//           duration-500
//           group-hover:opacity-100
//           group-hover:scale-125
//         "
//               />

//               <div className="p-4 relative z-10">
//                 <h3 className="text-2xl font-semibold">{item.title}</h3>

//                 <p className="text-gray-500  mt-2 text-[14px]">
//                   {item.subtitle.split(item.highlight)[0]}   {""}
//                   <span className="text-primary">{item.highlight}</span>
//                 </p>
//               </div>

//               <div className="flex justify-end items-end relative z-10">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="
//             w-[88%]
//             transition-all
//             duration-700
//             group-hover:scale-105
//           "
//                 />
//               </div>
//               <div className="oda-platform-bubble absolute"></div>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// }



export default function TradeInvest() {
  return(
    <>
      <div className="labptopsection relative mt-16">
        {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]"></div> */}
        <div className="w-[60%] mx-auto h-full object-contain">
          <img src="/img/getprepped.webp" alt="" className="w-full h-full" />
        </div>
      </div>
      <Courseslider />
    </>
  )
}
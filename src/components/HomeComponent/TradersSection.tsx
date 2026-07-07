import { FaCheckCircle } from "react-icons/fa";

export default function TradersSection() {
  const reasons = [
    "Too Much Information, No Clear Direction",
    "Emotional Buy & Sell Decisions",
    "Poor Risk And Capital Management",
    "No Fixed System To Learn From Mistakes",
  ];

  return (
    <>
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      <div className="section-container relative z-10">
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex justify-center">
            <img
              src="/img/lose_img.png"
              alt="Trader Loss"
              className="max-w-[500px] w-full"
              />
          </div>

          {/* Right */}
          <div>
            <h2 className="text-4xl font-bold  mb-1">
              Why Most Traders Lose Money
            </h2>

            <div className="space-y-5 mt-5">
              {reasons.map((item, index) => (
                  <div
                  key={index}
                  className="bg-[#ecfdf5] 
                  border
                  border-[#94e39a]
                  w-[70%]
                  rounded-2xl px-6 py-4 inline-flex items-center gap-4 hover:translate-x-2 transition"
                  >
                  <FaCheckCircle className="text-[#57a846] text-xl flex-shrink-0" />

                  <p className="font-medium text-[16px] text-[#222]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="relative py-24  overflow-hidden mt-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div> */}
      <div className="section-container relative z-10">
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          

          {/* Right */}
          <div>
            <h2 className="text-4xl font-bold  mb-1">
                How ai helps you Trade Better
            </h2>

            <div className="space-y-5 mt-5">
              {reasons.map((item, index) => (
                <div
                key={index}
                className="bg-[#ecfdf5] 
                border
                border-[#94e39a]
                w-[70%]
                rounded-2xl px-6 py-4 inline-flex items-center gap-4 hover:translate-x-2 transition"
                >
                  <FaCheckCircle className="text-[#57a846] text-xl flex-shrink-0" />

                  <p className="font-medium text-[16px] text-[#222]">{item}</p>
                </div>
              ))}
            </div>
          </div>
<div className="flex justify-center">
            <img
              src="/img/trader_batter.png"
              alt="Trader Loss"
              className="max-w-[600px] w-full"
              />
          </div>
        </div>
      </div>
    </section>
                </>
  );
}

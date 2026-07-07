
import React from "react";

export default function MarqueeSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Top Marquee */}
      <div className="-rotate-3 bg-black py-5 whitespace-nowrap relative z-10">
        <div className="flex items-center gap-12 text-white text-3xl font-bold uppercase animate-marquee-left">

          <span>✦ Real-Time Price Alerts</span>
          <span>✦ Multi-Asset Trading Platform</span>
          <span>✦ Index & Stock Options</span>
          <span>✦ Forex Markets</span>
          <span>✦ Commodities</span>
          <span>✦ Prop Firm Trading</span>
          <span>✦ Automated Systems</span>

          {/* Duplicate */}
          <span>✦ Real-Time Price Alerts</span>
          <span>✦ Multi-Asset Trading Platform</span>
          <span>✦ Index & Stock Options</span>
          <span>✦ Forex Markets</span>
          <span>✦ Commodities</span>
          <span>✦ Prop Firm Trading</span>
          <span>✦ Automated Systems</span>

        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="rotate-3 bg-primary py-5 whitespace-nowrap relative -mt-4">
        <div className="flex items-center gap-12 text-white text-3xl font-bold uppercase animate-marquee-right">

          <span>✦ Risk Management</span>
          <span>✦ Smart Trading</span>
          <span>✦ Market Analysis</span>
          <span>✦ Algo Strategies</span>
          <span>✦ Trading Automation</span>
          <span>✦ Portfolio Insights</span>
          <span>✦ Strategy Builder</span>

          {/* Duplicate */}
          <span>✦ Risk Management</span>
          <span>✦ Smart Trading</span>
          <span>✦ Market Analysis</span>
          <span>✦ Algo Strategies</span>
          <span>✦ Trading Automation</span>
          <span>✦ Portfolio Insights</span>
          <span>✦ Strategy Builder</span>

        </div>
      </div>

    </section>
  );
}
import Image from "next/image";
import bannerimg from "../../../public/img/img-frame-1.webp";
import { AiFillThunderbolt } from "react-icons/ai";
import icon from "../../../public/img/adv_opt_chain.webp";
import Features from "@/components/Features";
import BannerSection from "@/components/HomeComponent/bannerSection";
import StrategiesStocksSection from "@/components/HomeComponent/StrategiesStocksSection";
import MarqueeSection from "@/components/HomeComponent/MarqueeSection";
import TradeInvest from "@/components/HomeComponent/TradeInvest";
import Newsection from "@/components/HomeComponent/Newsection";
import AlgoTradingSection from "@/components/HomeComponent/AlgoTradingSection";
import BlogSection from "@/components/HomeComponent/BlogSection";
import WhyChooseUs from "@/components/HomeComponent/WhyChooseUs";
import CourseSection from "@/components/HomeComponent/CourseSection";
import WhyStokzy from "@/components/HomeComponent/WhyStokzy";
import TradersSection from "@/components/HomeComponent/TradersSection";
import CTASection from "@/components/CommenComponent/CtaSection";
import TestimonialSlider from "@/components/HomeComponent/Testimonials";

export default function Home() {
  return (
    <>
      <BannerSection />
      <CourseSection />
      <WhyChooseUs />
      <AlgoTradingSection />
      <MarqueeSection />
      <TradeInvest />
      <TradersSection />
      {/* <Features /> */}
      <BlogSection />
      {/* <Newsection /> */}
      <TestimonialSlider />
      <CTASection />
    </>
  );
}

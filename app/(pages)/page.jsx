import Contest from "@/components/common/Contest";
import Features from "@/components/common/Features";
import HowToPlay from "@/components/common/HowToPlay";
import LatestWinner from "@/components/common/LatestWinner";
import Overview from "@/components/common/Overview";
import Support from "@/components/common/Support";
import Testimonial from "@/components/common/Testimonial";
import Hero from "@/components/home/Hero";
import Winner from "@/components/home/Winner";

const page = () => {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* How To Play section */}
      <HowToPlay />

      {/* Contest section */}
      <Contest />


      {/*Features section */}
      <Features />

      {/*Testimonial section */}
      <Testimonial />

      {/*Support section */}
      <Support />
    </>
  );
};

export default page;

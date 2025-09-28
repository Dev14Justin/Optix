import CtaSection from "../components/home/CtaSection";
import DataInsightsSection from "../components/home/DataInsightsSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ValuesSection from "../components/home/ValuesSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <DataInsightsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;

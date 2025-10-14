import AboutSection from "../components/home/AboutSection";
import CtaSection from "../components/home/CtaSection";
import DataInsightsSection from "../components/home/DataInsightsSection";
import HeroSection from "../components/home/HeroSection";
import NewsletterSection from "../components/home/NewsletterSection";
import ServicesSection from "../components/home/ServicesSection";
import SolutionsSection from "../components/home/SolutionsSection";
import ValuesSection from "../components/home/ValuesSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ServicesSection />
      <DataInsightsSection />
      <ValuesSection />
      <NewsletterSection />
      <CtaSection />
    </>
  );
};

export default HomePage;

import Hero from "../../components/Hero/Hero";
import OnlinePotential from "../../components/OnlinePotential/OnlinePotential";
import Services from "../../components/Services/Services";
import GrowthResults from "../../components/GrowthResults/GrowthResults";
import Portfolio from "../../components/Portfolio/Portfolio";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OnlinePotential />
      <Services />
      <GrowthResults />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;

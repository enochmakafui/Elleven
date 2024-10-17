import Hero from "../Sections/Hero";
import ScrollingSlider from "../components/ScrollingSlider";
import Carrousel from "../components/Carrousel";
import ScopeOfWork from "../Sections/ScopeOfWork";
import ClientsWeServe from "../Sections/ClientsWeServe";
import TestimonialSection from "../Sections/TestimonialSection";
import StoreShowCase from "../Sections/StoreShowCase";
import InsightsFromUs from "../Sections/InsightsFromUs";
import ArticlesOverView from "../Sections/ArticlesOverView";
const HomePage = () => {
  return (
    <>
      <Hero />
      <ScrollingSlider />
      <Carrousel />
      <ScopeOfWork />
      <ClientsWeServe />
      <TestimonialSection />
      <StoreShowCase />
      <InsightsFromUs />
      <ArticlesOverView />
    </>
  );
};

export default HomePage;

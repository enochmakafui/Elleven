import LerpCirlce from "../components/LerpCircle";
import Hero from "../components/Hero";
import FlowContainer from "../components/FlowContainer";
import Carrousel from "../components/Carrousel";
import Service from "../components/Service";
import Client from "../components/Client";
import Testimonial from "../components/Testimonial";
import StoreSection from "../components/StoreSection";
import Insights from "../components/Insights";
import Articles from "../components/Articles";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <main>
      <LerpCirlce />
      <Hero />
      <FlowContainer />
      <Carrousel />
      <Service />
      <Client />
      <Testimonial />
      <StoreSection />
      <Insights />
      <Articles />

      <NewsLetter />
      <Footer />
    </main>
  );
};

export default HomePage;

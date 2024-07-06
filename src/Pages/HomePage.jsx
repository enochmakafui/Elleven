import LerpCirlce from "../components/LerpCircle";
import FlowContainer from "../components/FlowContainer";
import Carrousel from "../components/Carrousel";
import Service from "../components/Service";
import Client from "../components/Client";
import Testimonial from "../components/Testimonial";
import StoreSection from "../components/StoreSection";
import Insights from "../components/Insights";
import Articles from "../components/Articles";
import { motion } from "framer-motion";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <main>
      <LerpCirlce />
      <section className="hero">
        <h2>We are a creative agency </h2>
        <h2>building brands that</h2>
        <h2>make a difference</h2>
        <div className="hero-btn-container">
          <motion.button
            className="start-project-btn"
            whileHover={{ scale: 1.1 }}
            // eslint-disable-next-line react/no-unescaped-entities
            transition={{ type: "spring", stiffness: 500 }}
          >
            Lets Talk
          </motion.button>
          <motion.button
            className="see-work-btn"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            See our work
          </motion.button>
        </div>
      </section>
      <FlowContainer />
      <Carrousel />
      <Service />
      <Client />
      <Testimonial />
      <StoreSection />
      <Insights />
      <Articles/>
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default HomePage;

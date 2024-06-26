import LerpCirlce from "../components/LerpCircle";
import FlowContainer from "../components/FlowContainer";
import Carrousel from "../components/Carrousel";
import Service from "../components/Service";
import Client from "../components/Client";
import Testimonial from "../components/Testimonial";
const HomePage = () => {
  return (
    <main>
      <LerpCirlce />
      <section className="hero">
        <h2>We are a creative agency </h2>
        <h2>building brands that</h2>
        <h2>make a difference</h2>
        <div className="hero-btn-container">
          <button className="start-project-btn">Let's Talk</button>
          <button className="see-work-btn">See our work</button>
        </div>
      </section>
      <FlowContainer />
      <Carrousel />
      <Service />
      <Client />
      <Testimonial />
    </main>
  );
};

export default HomePage;

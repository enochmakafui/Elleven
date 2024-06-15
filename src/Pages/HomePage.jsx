import LerpCirlce from "../components/LerpCircle";
const HomePage = () => {
  return (
    <main>
      <LerpCirlce />
      <section className="hero">
        <h2>We are a creative agency </h2>
        <h2>building brands that</h2>
        <h2>make a difference</h2>
        <div className="hero-btn-container">
          <button className="start-project-btn">Start a Project</button>
          <button className="see-work-btn">See our work</button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

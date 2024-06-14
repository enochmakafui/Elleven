import LerpCirlce from "../components/LerpCircle";
const HomePage = () => {
  return (
    <main>
      <LerpCirlce />
      <section className="hero">
        <h2>We are a creative agency building brands that make a difference</h2>
        <button className="start-project-btn">Start a Project</button>
        <button className="see-work-btn">See our work</button>
      </section>
    </main>
  );
};

export default HomePage;

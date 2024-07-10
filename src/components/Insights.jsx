import athleteImage from "../assets/images/pic.png";
import "../CSS/Insights.css";
import ButtonDark from "./ButtonDark";

const Insights = () => {
  return (
    <div className="insights">
      <h2 className="insight-head">Some insights from us</h2>

      <div className="insights-section">
        <div className="article-about">
          <p>Article by Richmond Aryeh | 2024</p>
          <p className="title">
            The power of branding for small-scale startups
          </p>
          <p className="description">
            Branding has become an essential part of business development and is
            fast becoming quite indispensable in the priority of business needs
            globally.
          </p>
          <ButtonDark style={{ alignSelf: "flex-start" }}>
            {" "}
            Read more
          </ButtonDark>
        </div>
        <img src={athleteImage} alt="an athlete" />
      </div>
    </div>
  );
};

export default Insights;

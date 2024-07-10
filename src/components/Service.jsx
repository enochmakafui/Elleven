import cardImage from "../assets/images/card.png";
import "../CSS/ClientSection.css"
const Service = () => {
  return (
    <div className="service">
      <h2>Our Scope Of Work</h2>
      <div className="service-img-container">
        <img src={cardImage} alt="card image" />
        <button className="service-next-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.50006 11H16.0861L11.5861 6.5L13.0001 5.086L19.9141 12L13.0001 18.914L11.5861 17.5L16.0861 13H4.50006V11Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Service;

import Marquee from "react-fast-marquee";
const SLIDES = [
  "BRAND STRATEGY & IDENTITY",
  "UI/UX DESIGN",
  "GRAPHIC & MOTION DESIGN",
  "WEB & APP DEVELOPMENT",
  "SOCIAL MEDIA",
];

const FlowContainer = () => {
  return (
    <div
      className="flow-container"
      style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex" }}
    >
      <Marquee>
        {SLIDES.map((slide, index) => (
          <div key={index} className="slide">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <ellipse
                  cx="8.81461"
                  cy="9.55157"
                  rx="8.35732"
                  ry="8.87965"
                  transform="rotate(3.15994 8.81461 9.55157)"
                  fill="#FF7E21"
                />
              </svg>
            </span>
            {slide}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FlowContainer;

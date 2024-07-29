import AnimatedCursor from "react-animated-cursor";

const AnimateCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        moveSpeed={0.1}
        outerStyle={{
          mixBlendMode: "exclusion",
          backgroundColor: "#fff",
        }}
        innerStyle={{
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default AnimateCursor;

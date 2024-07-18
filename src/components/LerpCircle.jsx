import AnimatedCursor from "react-animated-cursor";

const LerpCircle = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        hasBlendMode={true}
        outerStyle={{
          background: "#fff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          border: "1px solid #fff",
          background: " #fff",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
};

export default LerpCircle;

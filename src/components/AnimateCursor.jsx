import AnimatedCursor from "react-animated-cursor";

const AnimateCursor= () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        outerStyle={{
          mixBlendMode: "exclusion",
          backgroundColor: "#fff",
        }}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
};

export default AnimateCursor ;

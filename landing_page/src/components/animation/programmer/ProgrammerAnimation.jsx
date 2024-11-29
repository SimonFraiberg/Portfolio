import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import programmer from "./programmer.json";
import dog from "./dog.json";

const ProgrammerAnimation = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    // Play animation once when the page loads
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Lottie
          lottieRef={lottieRef}
          animationData={programmer}
          loop={false} // Disable looping to play once
          autoplay={true} // Start animation on load
          style={{ width: 600, height: 600, padding: 10, marginTop: 100 }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice", // Optional: preserves aspect ratio
            clearCanvas: true, // Improve performance
          }}
        />
        <Lottie
          loop
          animationData={dog}
          play={1}
          style={{ width: "10vw", bottom: "0" }}
        />
      </div>
    </>
  );
};

export default ProgrammerAnimation;

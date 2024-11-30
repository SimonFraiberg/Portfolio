import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import programmer from "./programmer.json";

const ProgrammerAnimation = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    // Play programmer animation once when the page loads
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  return (
    <>
      <Lottie
        lottieRef={lottieRef}
        animationData={programmer}
        loop={false} // Disable looping to play once
        autoplay={true} // Start animation on load
        style={{
          height: "auto",
          margin: "5vw",
          marginBottom: "0",
          padding: 10,
          paddingBottom: "0",
          position: "relative",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice", // Optional: preserves aspect ratio
          clearCanvas: true, // Improve performance
        }}
      />
    </>
  );
};

export default ProgrammerAnimation;

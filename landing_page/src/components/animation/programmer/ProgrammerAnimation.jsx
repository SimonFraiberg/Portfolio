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
      <div
        style={{ display: "flex", alignItems: "center", position: "absolute" }}
      >
        <Lottie
          loop
          animationData={dog}
          play={1}
          style={{
            width: "15%", // Adjust width as needed
          }}
        />
        <Lottie
          loop
          animationData={dog}
          play={1}
          style={{
            width: "15%", // Adjust width as needed
          }}
        />
        <Lottie
          loop
          animationData={dog}
          play={1}
          style={{
            width: "20%", // Adjust width as needed
            paddingBottom: "20px",
          }}
        />
      </div>
    </>
  );
};

export default ProgrammerAnimation;

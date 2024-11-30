import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import dog from "./dog.json";

const DogAnimation = () => {
  const [dogPosition, setDogPosition] = useState(0);

  useEffect(() => {
    // Move the dogs to the right over time
    const interval = setInterval(() => {
      setDogPosition((prevPosition) => prevPosition + 5); // Adjust increment for speed
    }, 50); // Adjust interval for smoother/faster movement

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        left: `${dogPosition}px`, // Move horizontally
      }}
    >
      <Lottie
        loop
        animationData={dog}
        play={1}
        style={{
          width: "100px", // Adjust width as needed
        }}
      />
    </div>
  );
};

export default DogAnimation;

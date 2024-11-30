import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./loading.json";

const Loading = ({ load }) => {
  if (!load) return null;

  return (
    <div style={styles.container}>
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        style={styles.lottie}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#2F2653",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  lottie: {
    width: "300px",
    height: "300px",
  },
};

export default Loading;

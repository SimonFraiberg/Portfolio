// LoadingScreen.jsx
import React from "react";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner">Loading...</div>{" "}
      {/* You can add a custom spinner here */}
    </div>
  );
};

export default LoadingScreen;

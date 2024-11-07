import React, { useState, useEffect } from "react";
import Projects from "./pages/Projects";
import HomePage from "./pages/HomePage";
import MyBar from "./components/MyBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicBackground from "./components/DynamicBackground";
import Resume from "./pages/Resume";
import CircularProgress from "@mui/material/CircularProgress";

// Loading Screen Component
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
        zIndex: 1000, // Ensure the loading screen is on top
      }}
    >
      <CircularProgress /> {/* You can replace this with a custom spinner */}
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Track images loading
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoading(false); // All images are loaded
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded(); // If image is already loaded, count it immediately
      } else {
        img.addEventListener("load", checkImagesLoaded); // Otherwise, listen for the load event
      }
    });

    // Track document loading (e.g., PDFs, other resources)
    const documents = document.querySelectorAll("object, iframe");
    let loadedDocs = 0;

    const checkDocumentsLoaded = () => {
      loadedDocs++;
      if (loadedDocs === documents.length) {
        setIsLoading(false); // All documents are loaded
      }
    };

    documents.forEach((doc) => {
      doc.addEventListener("load", checkDocumentsLoaded);
    });

    // Cleanup event listeners when the component is unmounted
    return () => {
      images.forEach((img) =>
        img.removeEventListener("load", checkImagesLoaded)
      );
      documents.forEach((doc) =>
        doc.removeEventListener("load", checkDocumentsLoaded)
      );
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading && <LoadingScreen />}{" "}
        {/* Show loading screen if still loading */}
        <MyBar />
        <DynamicBackground id="particles" />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

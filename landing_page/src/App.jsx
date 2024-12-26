import React, { useState, useEffect } from "react";
import Projects from "./pages/Projects";
import HomePage from "./pages/HomePage";
import MyBar from "./components/MyBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicBackground from "./components/DynamicBackground";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Scroll from "./components/Scroll";
import Loading from "./components/animation/loading/Loading";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return <Loading load={load} />; // Render loading screen while loading
  }

  return (
    <>
      <Analytics />

      <BrowserRouter>
        <MyBar />
        <Scroll></Scroll>
        <DynamicBackground id="particles" />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />

          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

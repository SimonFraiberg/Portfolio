import Projects from "./pages/Projects";
import HomePage from "./pages/HomePage";
import MyBar from "./components/MyBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicBackground from "./components/DynamicBackground";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <>
      <BrowserRouter>
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

import "./Resume.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  return (
    <>
      <h1 className="resume_title">Resume</h1>
      <div className="pdfScreen">
        <Worker
          className="worker"
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <div className="pdfScreen">
            <Viewer className="worker" fileUrl="my_Resume.pdf" />
          </div>
        </Worker>
      </div>
    </>
  );
}
